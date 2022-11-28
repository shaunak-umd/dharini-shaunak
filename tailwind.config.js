/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'playfair': ['Playfair Display', 'ui-serif'],
      'garamond': ['EB Garamond', 'ui-serif']
    },
    fontSize: {
      md: '40px',
      xl: '64px'
    },
    extend: {
      colors: {
        'theme-yellow': '#FFF175',
        'theme-black': '#000000',
        'theme-white': '#ffffff'
      },
      backgroundImage: {
        // 'frame1': "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('https://images.unsplash.com/photo-1515816052601-210d5501d471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')",
    
        'frame1': "url('https://images.unsplash.com/photo-1515816052601-210d5501d471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')",
        'frame2': "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1618944913480-b67ee16d7b77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        'frame3': "url('https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80')",
        'frame4': "url('https://images.pexels.com/photos/7978848/pexels-photo-7978848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'frame5': "url('https://images.pexels.com/photos/7965868/pexels-photo-7965868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'frame6': "url('https://images.unsplash.com/photo-1533462506003-13c20d204b58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        'frame7': "linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2108&q=80')"
      }
    },
  },
  plugins: [],
}
