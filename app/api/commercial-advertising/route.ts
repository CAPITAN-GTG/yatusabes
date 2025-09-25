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
const createCommercialAdvertisingEmailTemplate = (data: any) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background: linear-gradient(135deg, #059669, #10b981); color: white; padding: 30px; border-radius: 10px; margin-bottom: 20px;">
        <h1 style="margin: 0; font-size: 28px; text-align: center;">YA TU SABES STUDIO</h1>
        <p style="margin: 10px 0 0 0; text-align: center; color: #d1fae5;">New Commercial Advertising Request</p>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #1e293b; margin-bottom: 25px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">Business Information</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
          <div>
            <strong style="color: #374151;">Business Name:</strong>
            <p style="margin: 5px 0; color: #6b7280;">${data.businessName}</p>
          </div>
          
          <div>
            <strong style="color: #374151;">Phone Number:</strong>
            <p style="margin: 5px 0; color: #6b7280;">${data.phoneNumber}</p>
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Email Address:</strong>
          <p style="margin: 5px 0; color: #6b7280;">${data.email}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Business Address:</strong>
          <p style="margin: 5px 0; color: #6b7280;">${data.address}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Days and Hours of Operation:</strong>
          <p style="margin: 5px 0; color: #6b7280;">${data.daysHours}</p>
        </div>
        
        <div style="margin-bottom: 25px;">
          <strong style="color: #374151;">Products/Services Offered:</strong>
          <p style="margin: 5px 0; color: #6b7280;">${data.productsServices}</p>
        </div>
        
        <h3 style="color: #1e293b; margin-bottom: 20px; border-bottom: 2px solid #10b981; padding-bottom: 10px;">Advertising Details</h3>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Advertising Description:</strong>
          <div style="margin: 5px 0; color: #6b7280; background: #f3f4f6; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.advertisingDescription}</div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Plan of Action:</strong>
          <div style="margin: 5px 0; color: #6b7280; background: #f3f4f6; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.planOfAction}</div>
        </div>
        
        ${data.businessLogo ? `
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Business Logo:</strong>
          <p style="margin: 5px 0; color: #6b7280;">File attached: ${data.businessLogo}</p>
        </div>
        ` : ''}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            This commercial advertising request was submitted from the YA TU SABES STUDIO website on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}.
          </p>
        </div>
      </div>
    </div>
  `;
};

const createCommercialConfirmationEmailTemplate = (data: any) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background: linear-gradient(135deg, #059669, #10b981); color: white; padding: 30px; border-radius: 10px; margin-bottom: 20px;">
        <h1 style="margin: 0; font-size: 28px; text-align: center;">YA TU SABES STUDIO</h1>
        <p style="margin: 10px 0 0 0; text-align: center; color: #d1fae5;">Commercial Advertising Request Received!</p>
      </div>
      
      <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #1e293b; margin-bottom: 20px;">¡Hola ${data.businessName}!</h2>
        
        <p style="color: #6b7280; line-height: 1.6; margin-bottom: 20px;">
          Thank you for your interest in our commercial advertising services! We've received your request and we're excited to help you promote <strong>${data.businessName}</strong> and reach your target audience.
        </p>
        
        <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; margin: 20px 0; border-radius: 5px;">
          <h3 style="color: #14532d; margin-top: 0;">What happens next?</h3>
          <ul style="color: #6b7280; margin: 0; padding-left: 20px;">
            <li>Our advertising team will review your request within 24 hours</li>
            <li>We'll analyze your business goals and target audience</li>
            <li>We'll create a customized advertising proposal for your brand</li>
            <li>We'll schedule a consultation to discuss your campaign strategy</li>
          </ul>
        </div>
        
        <p style="color: #6b7280; line-height: 1.6;">
          Our team specializes in creating compelling commercial content that resonates with your audience and drives results. We'll work closely with you to develop a strategy that aligns with your business objectives.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://yatusabesstudio.net/pages/services" style="background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
            Learn More About Our Services
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
    const formData = await request.formData();
    
    // Extract form data
    const data = {
      businessName: formData.get('businessName') as string,
      address: formData.get('address') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      email: formData.get('email') as string,
      daysHours: formData.get('daysHours') as string,
      productsServices: formData.get('productsServices') as string,
      businessLogo: formData.get('businessLogo') as File | null,
      advertisingDescription: formData.get('advertisingDescription') as string,
      planOfAction: formData.get('planOfAction') as string,
    };
    
    // Validate required fields
    const requiredFields = ['businessName', 'address', 'phoneNumber', 'email', 'daysHours', 'productsServices', 'advertisingDescription', 'planOfAction'];
    for (const field of requiredFields) {
      if (!data[field as keyof typeof data]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
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

    // Prepare attachments if logo is provided
    const attachments = [];
    if (data.businessLogo && data.businessLogo.size > 0) {
      const buffer = Buffer.from(await data.businessLogo.arrayBuffer());
      attachments.push({
        filename: data.businessLogo.name,
        content: buffer,
        contentType: data.businessLogo.type,
      });
    }

    // Send email to studio
    const studioMailOptions = {
      from: process.env.EMAIL_USER || 'yatusabesstudio@gmail.com',
      to: process.env.EMAIL_RECIPIENT || 'yatusabesstudio@gmail.com',
      subject: `New Commercial Advertising Request - ${data.businessName}`,
      html: createCommercialAdvertisingEmailTemplate(data),
      attachments,
    };

    // Send confirmation email to user
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER || 'yatusabesstudio@gmail.com',
      to: data.email,
      subject: 'Thank you for your Commercial Advertising Request!',
      html: createCommercialConfirmationEmailTemplate(data),
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
