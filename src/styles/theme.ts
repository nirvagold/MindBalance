const theme = {
  colors: {
    primary: '#A8D5BA', // pastel green
    secondary: '#B9E3C6', // pastel blue
    background: '#F9F9F9', // cream
    accent: '#F6C9B7', // pastel peach
    text: '#333333', // dark text for readability
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
  fonts: {
    main: 'Arial, sans-serif',
    heading: 'Georgia, serif',
  },
  spacing: (factor) => `${0.25 * factor}rem`, // spacing utility
};

export default theme;