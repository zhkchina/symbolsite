// symbolsite/src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const host = 'https://linkbit.cloud/'; // 改为你的域名
  return [
    {
      url: `${host}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}



