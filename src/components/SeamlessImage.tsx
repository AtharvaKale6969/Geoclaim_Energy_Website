import React, { useState, useEffect } from 'react';

interface SeamlessImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export default function SeamlessImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  ...props
}: SeamlessImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    setIsLoaded(false);
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 bg-gray-200/20 animate-pulse transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <img
        src={imageSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
        {...props}
      />
    </div>
  );
}
