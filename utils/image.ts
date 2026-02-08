
/**
 * Optimizes Unsplash image URLs by appending appropriate query parameters
 * for formatting, quality, and sizing.
 */
export const getOptimizedImage = (url: string, width: number, quality: number = 75) => {
  if (!url || !url.includes('images.unsplash.com')) return url;
  
  // Strip existing query parameters to ensure we apply our optimizations correctly
  const baseUrl = url.split('?')[0];
  
  // fm=webp: Use WebP format for better compression
  // auto=format,compress: Let Unsplash handle best format and compression
  // fit=crop: Ensure the image fits the requested aspect ratio
  return `${baseUrl}?auto=format,compress&fit=crop&q=${quality}&w=${width}&fm=webp`;
};
