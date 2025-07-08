import { Metadata } from 'next';

export const SITE_CONFIG: Metadata = {
  title: {
    default: 'Neurix - An AI Powered Code Editor',
    template: `%s | Neurix`,
  },
  description:
    'Neurix is an AI-powered code editor designed to accelerate your development process. Get intelligent suggestions, real-time refactoring, and seamless debugging support — all in one place.',
  icons: {
    icon: [
      {
        url: '/assets/favicon.ico',
        href: '/assets/favicon.ico',
      },
    ],
  },
  openGraph: {
    title: 'Neurix - An AI Powered Code Editor',
    description:
      'Neurix is an AI-powered code editor designed to accelerate your development process. Get intelligent suggestions, real-time refactoring, and seamless debugging support — all in one place.',
    // images: [
    //   {
    //     url: '',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@harshitxcodes',
    title: 'Neurix - An AI Powered Code Editor',
    description:
      'Neurix is an AI-powered code editor designed to accelerate your development process. Get intelligent suggestions, real-time refactoring, and seamless debugging support — all in one place.',
    // images: [
    //   {
    //     url: '',
    //   },
    // ],
  },
  // metadataBase: new URL(''),
};
