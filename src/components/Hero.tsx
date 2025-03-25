
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
  overlayOpacity?: 'light' | 'medium' | 'dark';
  size?: 'small' | 'medium' | 'large';
  alignment?: 'left' | 'center' | 'right';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  imageUrl = 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=2000&h=800&q=80',
  imageAlt = 'Hero background',
  buttonText,
  buttonLink,
  className,
  overlayOpacity = 'medium',
  size = 'large',
  alignment = 'center',
}) => {
  // Calculate height based on size
  const heightClasses = {
    small: 'h-[30vh] md:h-[40vh]',
    medium: 'h-[50vh] md:h-[60vh]',
    large: 'h-[70vh] md:h-[80vh]',
  };

  // Calculate overlay opacity
  const overlayClasses = {
    light: 'bg-black/30',
    medium: 'bg-black/50',
    dark: 'bg-black/70',
  };

  // Calculate text alignment
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div
      className={cn(
        'relative w-full flex justify-center overflow-hidden',
        heightClasses[size],
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover object-center"
        />
        <div className={cn('absolute inset-0', overlayClasses[overlayOpacity])} />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col justify-center px-6 md:px-8 animate-fade-in-up">
        <div className={cn('flex flex-col max-w-3xl gap-4', alignmentClasses[alignment])}>
          {subtitle && (
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gf-green text-white rounded-md">
              {subtitle}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              {description}
            </p>
          )}
          {buttonText && buttonLink && (
            <div className="mt-4">
              <Button asChild className="bg-gf-green hover:bg-gf-green/90 text-white border-none">
                <Link to={buttonLink} className="flex items-center gap-2">
                  {buttonText}
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
