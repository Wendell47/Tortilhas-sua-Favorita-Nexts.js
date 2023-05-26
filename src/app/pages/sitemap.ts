import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tortilhas-sua-favorita-nexts-js.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://tortilhas-sua-favorita-nexts-js.vercel.app/pages/about',
      lastModified: new Date(),
    },
  ];
}