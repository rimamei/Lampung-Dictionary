import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lampung-dictionary.vercel.app/',
      lastModified: new Date(),
    },
  ]
}