import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [presetUno()],
  theme: {
    colors: {
      primary: '#84C98B',
      secondary: '#FFB06B',
      tertiary: '#C28CDB',

      misskey: '#9DC603',
      mastodon: ' #563ACC',
      bluesky: '#0085FF',
      x: '#000000',
      threads: '#000000',
      instagram: '#E1306C',
      zenn: '#3EA8FF',
      github: '#000000',
      youtube: '#FF0000',
      discord: '#5865F2',
      line: '#21B94E',
      rss: 'orange',
      hatena: '#00A4DE',
      pocket: '#EF4056',
      peertube: '#F47825',

      dark: {
        misskey: '#9dc603',
        mastodon: '#563ACC',
        bluesky: '#0085FF',
        x: '#FFFFFF',
        threads: '#FFFFFF',
        instagram: '#E1306C',
        zenn: '#3EA8FF',
        github: '#FFFFFF',
        youtube: '#FF0000',
        discord: '#5865F2',
        line: '#21B94E',
        rss: 'orange',
        hatena: '#00A4DE',
        pocket: '#EF4056',
        peertube: '#F47825',
      },
    },
  },
  shortcuts: {
    divider: 'w-full mb-4 h-px bg-gray-300',
    button:
      'px-4 py-2 rounded bg-primary text-black disabled:text-gray-700 inline-block m-2',
    section: 'p-4 mb-4',
    h1: 'text-4xl font-bold mb-4',
    h2: 'text-3xl font-semibold mb-3',
    h3: 'text-2xl mb-2',
    p: 'text-lg mb-4',
    ul: 'list-disc list-inside mb-4',
    ol: 'list-decimal list-inside mb-4',
    blockquote: 'border-l-4 border-gray-400 pl-4 italic mb-4',
  },
});
