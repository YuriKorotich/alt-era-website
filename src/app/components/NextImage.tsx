'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

type TypeImage = {
  src: string | StaticImageData,
  alt?: string,
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  objectFit?: string,
  quality?: number,
  placeholder?: 'blur' | 'empty' | `data:image/${string}` | undefined,
  fill?: boolean | undefined,
  priority?: boolean | undefined,
  className: string,
};

const NextImage = ({
  src, alt = '', width, height, objectFit, quality, placeholder, fill, priority, className,
}: TypeImage) => {
  const [isReady, setIsReady] = useState<boolean>(false);

  const onLoadCallback = () => {
    setIsReady(true);
  };

  return (
    <Image
      alt={alt}
      src={src}
      fill={fill}
      width={width}
      height={height}
      quality={quality}
      priority={priority}
      objectFit={objectFit}
      placeholder={placeholder}
      // layout='responsive'
      className={`${className} transition duration-1000 ${isReady ? 'blur-0 scale-100' : 'blur-2xl scale-120'}`}
      onLoadingComplete={onLoadCallback}
    />
  );
};

export default NextImage;
