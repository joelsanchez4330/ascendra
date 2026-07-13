module.exports = {
    theme: {
      extend: {
        animation: {
          'marquee-left': 'marqueeLeft 35s linear infinite',
          'marquee-right': 'marqueeRight 35s linear infinite',
        },
        keyframes: {
          marqueeLeft: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-50%)' },
          },
          marqueeRight: {
            '0%': { transform: 'translateX(-50%)' },
            '100%': { transform: 'translateX(0%)' },
          },
        },
      },
    },
  };