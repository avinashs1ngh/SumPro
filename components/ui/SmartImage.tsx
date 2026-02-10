import React from 'react';

interface SmartImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    loading?: 'lazy' | 'eager';
    fetchPriority?: 'high' | 'low' | 'auto';
}

const SmartImage: React.FC<SmartImageProps> = ({
    src,
    alt,
    width = 800,
    height = 600,
    className = '',
    loading = 'lazy',
    fetchPriority = 'auto'
}) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            loading={loading}
            fetchPriority={fetchPriority}
        />
    );
};

export default SmartImage;
