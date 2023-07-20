/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'sm': '390px',
      'md': '768px',
      'lg': '1220px',
      'xl': '1920px'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        logo: "url('../assets/shared/logo.svg')",
        /** BG Crew */
        'crew-desktop' : "url('../assets/crew/background-crew-desktop.jpg')",
        'crew-mobile' : "url('../assets/crew/background-crew-mobile.jpg')",
        'crew-tablet' : "url('../assets/crew/background-crew-tablet.jpg')",
        /** BG Home */
        'home-desktop' : "url('../assets/home/background-home-desktop.jpg')",
        'home-mobile' : "url('../assets/home/background-home-mobile.jpg')",
        'home-tablet' : "url('../assets/home/background-home-tablet.jpg')",
        /** BG Destination */
        'destination-desktop' : "url('../assets/destination/background-destination-desktop.jpg')",
        'destination-mobile' : "url('../assets/destination/background-destination-mobile.jpg')",
        'destination-tablet' : "url('../assets/destination/background-destination-tablet.jpg')",
        /** BG Tech */
        'technology-desktop' : "url('../assets/technology/background-technology-desktop.jpg')",
        'technology-mobile' : "url('../assets/technology/background-technology-mobile.jpg')",
        'technology-tablet' : "url('../assets/technology/background-technology-tablet.jpg')",
        /**Planets pictures .png - Destination */
        'moon-png' : "url('../assets/destination/image-moon.png')",
        'mars-png' : "url('../assets/destination/image-mars.png')",
        'europa-png' : "url('../assets/destination/image-europa.png')",
        'titan-png' : "url('../assets/destination/image-titan.png')",
        /**Planets pictures .webp - Destination */
        'moon-webp' : "url('../assets/destination/image-moon.webp')",
        'mars-webp' : "url('../assets/destination/image-mars.webp')",
        'europa-webp' : "url('../assets/destination/image-europa.webp')",
        'titan-webp' : "url('../assets/destination/image-titan.webp')",
        /** Crew pictures .png - Crew*/
        'doug-png' : "url('../assets/crew/image-douglas-hurley.png')",
        'mark-png' : "url('../assets/crew/image-mark-shuttleworth.png')",
        'victor-png' : "url('../assets/crew/image-victor-glover.png')",
        'ano-png' : "url('../assets/crew/image-anousheh-ansari.png')",
        /** Crew pictures .webp - Crew*/
        'doug-webp' : "url('../assets/crew/image-douglas-hurley.webp')",
        'mark-webp' : "url('../assets/crew/image-mark-shuttleworth.webp')",
        'victor-webp' : "url('../assets/crew/image-victor-glover.webp')",
        'ano-webp' : "url('../assets/crew/image-anousheh-ansari.webp')",
        /** Technology pictures .jpg - Tech*/
        'veh-lScape-jpg' : "url('../assets/technology/image-launch-vehicle-landscape.jpg')",
        'veh-port-jpg' : "url('../assets/technology/image-launch-vehicle-portrait.jpg')",
        'cap-lScape-jpg' : "url('../assets/technology/image-space-capsule-landscape.jpg')",
        'cap-port-jpg' : "url('../assets/technology/image-space-capsule-portrait.jpg')",
        'sPort-lScape-jpg' : "url('../assets/technology/image-spaceport-landscape.jpg')",
        'sPort-port-jpg' : "url('../assets/technology/image-spaceport-portrait.jpg')",
        /** Icon : Close - Hamburger */
        'icon-close' : "url('../assets/shared/icon-close.svg')",
        'icon-ham' : "url('../assets/shared/icon-hamburger.svg')",
      },
      colors: {
        'space-black' : 'rgb(11, 13, 23)',
        'space-mid-light' : 'rgb(208, 214, 249)',
        'space-light' : 'rgb(255, 255, 255)',
      },
      fontFamily: {
        bellefair: ['var(--font-bellefair)'],
        barlowCondensed: ['var(--font-barlow_condensed)'],
      }
    },
  },
  plugins: [],
}
