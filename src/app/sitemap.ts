import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: '/pages/about',
      lastModified: new Date(),
    },
  ];
}