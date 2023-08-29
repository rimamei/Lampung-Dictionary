import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kamus Indonesia - Lampung',
    short_name: 'Kamus Indonesia - Lampung',
    description: 'Kamus Indonesia - Lampung merupakan sebuah aplikasi yang mampu menerjemahkan kata dalam Bahasa Lampung ke Bahasa Indonesia ataupun sebaliknya.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/siger.svg',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}