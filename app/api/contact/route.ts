import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || 'yatusabesstudio@gmail.com',
      pass: process.env.APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
};

// Email templates
const createContactEmailTemplate = (data: any) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background: linear-gradient(135deg, #0f172a, #1e293b); color: white; padding: 30px; border-radius: 10px; margin-bottom: 20px;">
        <h1 style="margin: 0; font-size: 28px; text-align: center;">YA TU SABES STUDIO</h1>
        <p style="margin: 10px 0 0 0; text-align: center; color: #94a3b8;">New Contact Form Submission</p>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #1e293b; margin-bottom: 20px; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">Contact Information</h2>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Full Name:</strong>
          <p style="margin: 5px 0; color: #6b7280;">${data.name}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Email:</strong>
          <p style="margin: 5px 0; color: #6b7280;">${data.email}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Phone:</strong>
          <p style="margin: 5px 0; color: #6b7280;">${data.phone}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Service Interested In:</strong>
          <p style="margin: 5px 0; color: #6b7280;">${data.service}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Message:</strong>
          <div style="margin: 5px 0; color: #6b7280; background: #f3f4f6; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.message}</div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            This message was sent from the YA TU SABES STUDIO contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}.
          </p>
        </div>
      </div>
    </div>
  `;
};

const createConfirmationEmailTemplate = (data: any) => {
  const serviceName = data.service || 'your selected service';
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background: linear-gradient(135deg, #0f172a, #1e293b); color: white; padding: 30px; border-radius: 10px; margin-bottom: 20px;">
        <h1 style="margin: 0; font-size: 28px; text-align: center;">YA TU SABES STUDIO</h1>
        <p style="margin: 10px 0 0 0; text-align: center; color: #94a3b8;">Thank You for Your Interest!</p>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #1e293b; margin-bottom: 20px;">¡Hola ${data.name}!</h2>
        
        <p style="color: #6b7280; line-height: 1.6; margin-bottom: 20px;">
          Thank you for reaching out to YA TU SABES STUDIO! We've received your message about <strong>${serviceName}</strong> and we're excited to help you amplify your voice.
        </p>
        
        <div style="background: #f0f9ff; border-left: 4px solid #06b6d4; padding: 20px; margin: 20px 0; border-radius: 5px;">
          <h3 style="color: #0c4a6e; margin-top: 0;">What happens next?</h3>
          <ul style="color: #6b7280; margin: 0; padding-left: 20px;">
            <li>Our team will review your message within 24 hours</li>
            <li>We'll contact you to discuss your project details</li>
            <li>We'll provide a personalized proposal for your needs</li>
          </ul>
        </div>
        
        <p style="color: #6b7280; line-height: 1.6;">
          If you have any urgent questions, feel free to call us at <strong>(214) 562-7755</strong> or email us directly at <strong>yatusabesstudio@gmail.com</strong>.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://yatusabesstudio.net" style="background: linear-gradient(135deg, #06b6d4, #0891b2); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
            Visit Our Website
          </a>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px; text-align: center;">
            YA TU SABES STUDIO<br>
            3201 W. DAVIS ST, Dallas, TX 75211<br>
            Phone: (214) 562-7755 | Email: yatusabesstudio@gmail.com
          </p>
        </div>
      </div>
    </div>
  `;
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.message || !data.service) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message, and service are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const transporter = createTransporter();

    // Send email to studio
    const studioMailOptions = {
      from: process.env.EMAIL_USER || 'yatusabesstudio@gmail.com',
      to: process.env.EMAIL_RECIPIENT || 'yatusabesstudio@gmail.com',
      subject: `New Contact Form Submission - ${data.name}`,
      html: createContactEmailTemplate(data),
    };

    // Send confirmation email to user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER || 'yatusabesstudio@gmail.com',
      to: data.email,
      subject: 'Thank you for contacting YA TU SABES STUDIO!',
      html: createConfirmationEmailTemplate(data),
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(studioMailOptions),
      transporter.sendMail(confirmationMailOptions),
    ]);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
