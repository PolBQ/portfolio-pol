export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}'
  ],

  theme: {
    extend: {

      colors: {

        background: '#020617',
        surface: '#0F172A',
        card: '#111827',
        elevated: '#172033',
        border: '#1E293B',

        text: {
          primary: '#E2E8F0',
          secondary: '#94A3B8',
          muted: '#64748B'
        },

        accent: {
          DEFAULT: '#2563EB',
          hover: '#3B82F6'
        },

        success: '#16A34A',
        warning: '#CA8A04'
      },

      maxWidth: {
        content: '1280px',
        reading: '900px'
      },

      borderRadius: {
        card: '1rem'
      }
    }
  },

  plugins: []
}