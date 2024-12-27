/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        custom: {
          css: {
            '--tw-prose-body': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-headings': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-lead': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-links': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-bold': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-counters': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-bullets': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-hr': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-quotes': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-quote-borders': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-captions': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-code': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-pre-code': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-pre-bg': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-th-borders': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-td-borders': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-invert-body': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-invert-headings': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-invert-lead': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-invert-links': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-invert-bold': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-invert-counters': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-invert-bullets': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-invert-hr': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-invert-quotes': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-invert-quote-borders': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-invert-captions': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-invert-code': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-invert-pre-code': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-invert-pre-bg': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-invert-th-borders': 'rgba(255, 255, 255, 0.87)',
            '--tw-prose-invert-td-borders': 'rgba(255, 255, 255, 0.87)',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

