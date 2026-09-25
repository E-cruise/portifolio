import type { MetadataRoute } from 'next'
import { siteUrl } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/experience', '/projects', '/contact']

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
