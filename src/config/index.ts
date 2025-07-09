import { Metadata } from 'next';

export const SITE_CONFIG: Metadata = {
  title: {
    default: 'Escape - An AI Powered Code Editor',
    template: `%s | Escape`,
  },
  description:
    'Escacpe is an AI-powered code editor designed to accelerate your development process. Get intelligent suggestions, real-time refactoring, and seamless debugging support — all in one place.',
  icons: {
    icon: [
      {
        url: '/assets/favicon.ico',
        href: '/assets/favicon.ico',
      },
    ],
  },
  openGraph: {
    title: 'Escape - An AI Powered Code Editor',
    description:
      'Escape is an AI-powered code editor designed to accelerate your development process. Get intelligent suggestions, real-time refactoring, and seamless debugging support — all in one place.',
    // images: [
    //   {
    //     url: '',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@harshitxcodes',
    title: 'Escape - An AI Powered Code Editor',
    description:
      'Esacpe is an AI-powered code editor designed to accelerate your development process. Get intelligent suggestions, real-time refactoring, and seamless debugging support — all in one place.',
    // images: [
    //   {
    //     url: '',
    //   },
    // ],
  },
  // metadataBase: new URL(''),
};
