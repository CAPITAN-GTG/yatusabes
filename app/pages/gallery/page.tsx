"use client"
import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy load the modal component
const PreviewModal = dynamic(() => import("./PreviewModal"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>
  ),
});

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const preloadTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const galleryImages = [
    { src: "/potcast-1.webp", alt: "Studio Session 1", category: "studio" },
    { src: "/potcast-2.webp", alt: "Interview Session", category: "interview" },
    { src: "/potcast-3.webp", alt: "Community Event", category: "event" },
    { src: "/potcast-4.webp", alt: "Behind the Scenes", category: "behind" },
    { src: "/potcast-5.webp", alt: "Recording Session", category: "studio" },
    { src: "/potcast-6.webp", alt: "Podcast Discussion", category: "interview" },
    { src: "/potcast-7.webp", alt: "Studio Setup", category: "studio" },
    { src: "/potcast-8.webp", alt: "Community Gathering", category: "event" },
    { src: "/potcast-9.webp", alt: "Behind the Mic", category: "behind" },
    { src: "/potcast-10.webp", alt: "Recording Equipment", category: "studio" },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "studio", label: "Studio" },
    { id: "interview", label: "Interviews" },
    { id: "event", label: "Events" },
    { id: "behind", label: "Behind Scenes" },
  ];

  // Memoize filtered images to prevent unnecessary recalculations
  const filteredImages = useMemo(() => {
    return selectedCategory === "all" 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const handleImageClick = useCallback((index: number) => {
    setSelectedImage(index);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const handleNavigatePreview = useCallback((direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const totalImages = filteredImages.length;
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = selectedImage === 0 ? totalImages - 1 : selectedImage - 1;
    } else {
      newIndex = selectedImage === totalImages - 1 ? 0 : selectedImage + 1;
    }
    
    setSelectedImage(newIndex);
  }, [selectedImage, filteredImages.length]);

  // Optimized hover handling with debounced preload
  const handleMouseEnter = useCallback((imageSrc: string) => {
    setHoveredImage(imageSrc);
    
    // Clear any existing timeout
    if (preloadTimeoutRef.current) {
      clearTimeout(preloadTimeoutRef.current);
    }
    
    // Only preload after user hovers for 300ms (indicating intent to click)
    preloadTimeoutRef.current = setTimeout(() => {
      if (typeof window !== 'undefined') {
        // Check if image is already loaded
        const img = new window.Image();
        img.onload = () => {
          // Image is now cached, no need for preload link
        };
        img.src = imageSrc;
      }
    }, 300);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredImage(null);
    
    // Clear preload timeout if user leaves before 300ms
    if (preloadTimeoutRef.current) {
      clearTimeout(preloadTimeoutRef.current);
      preloadTimeoutRef.current = null;
    }
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (preloadTimeoutRef.current) {
        clearTimeout(preloadTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
              <p className="text-gray-300 text-lg">
            Explore our podcast studio, community events, and behind-the-scenes moments.
              </p>
          </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
              </div>
              
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <GalleryImage
              key={`${image.src}-${index}`}
              image={image}
              index={index}
              isHovered={hoveredImage === image.src}
              onClick={() => handleImageClick(index)}
              onMouseEnter={() => handleMouseEnter(image.src)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
              </div>
            </div>

      {/* Preview Modal */}
      {selectedImage !== null && (
        <PreviewModal
          images={filteredImages}
          currentIndex={selectedImage}
          onClose={handleCloseModal}
          onNavigate={handleNavigatePreview}
        />
      )}
    </div>
  );
}

// Separate component for better performance
const GalleryImage = ({ 
  image, 
  index, 
  isHovered, 
  onClick, 
  onMouseEnter, 
  onMouseLeave 
}: {
  image: { src: string; alt: string; category: string };
  index: number;
  isHovered: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  return (
    <div
      className="group cursor-pointer"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-900">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className={`object-cover transition-all duration-300 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
          loading={index < 4 ? "eager" : "lazy"}
          priority={index < 2}
        />
        <div className={`absolute inset-0 border-4 transition-all duration-300 ${
          isHovered ? 'border-white' : 'border-transparent'
        }`} />
      </div>
    </div>
  );
};