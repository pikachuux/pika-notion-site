import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const templates = [
    'property-rental-manager',
    'pika-finance-tracker',
    'agency-os',
  ];

  const templateEntries: MetadataRoute.Sitemap = templates.map((slug) => ({
    url: `https://pikanotion.com/templates/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly', // Fixed: was 'changefreq'
    priority: 0.8,
  }));

  return [
    {
      url: 'https://pikanotion.com',
      lastModified: new Date(),
      changeFrequency: 'weekly', // Fixed: was 'changefreq'
      priority: 1,
    },
    ...templateEntries,
  ]
}