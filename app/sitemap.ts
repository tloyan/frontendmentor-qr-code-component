import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://qr-code-component.tloyan.com/',
      lastModified: new Date(),
      priority: 1,
    },
  ]
}