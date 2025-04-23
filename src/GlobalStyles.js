import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --error: #dc3545;
    --bg-light: #ffffff;
    --bg-dark: #121212;
    --text-light: #212529;
    --text-dark: #f8f9fa;
    --gray-100: #f8f9fa;
    --gray-200: #e9ecef;
    --gray-300: #dee2e6;
    --gray-600: #6c757d;
    --gray-800: #343a40;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
    transition: background-color 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--primary);
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--accent);
    }
  }

  code, pre {
    font-family: 'Roboto Mono', monospace;
    background-color: var(--codeBackground);
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
  }

  button {
    font-family: 'Poppins', sans-serif;
    padding: 0.6rem 1.2rem;
    border-radius: 4px;
    border: none;
    background: var(--primary);
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    &:active {
      transform: translateY(0);
    }
  }

  section {
    padding: 5rem 1rem;
    position: relative;
  }

  /* Container sizing */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--scrollbarTrack);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--scrollbarThumb);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--scrollbarThumbHover);
  }
  
  /* Utility classes */
  .text-center {
    text-align: center;
  }
  
  .mb-1 {
    margin-bottom: 0.5rem;
  }
  
  .mb-2 {
    margin-bottom: 1rem;
  }
  
  .mb-3 {
    margin-bottom: 1.5rem;
  }
  
  .mb-4 {
    margin-bottom: 2rem;
  }
  
  .mb-5 {
    margin-bottom: 3rem;
  }
  
  .mt-1 {
    margin-top: 0.5rem;
  }
  
  .mt-2 {
    margin-top: 1rem;
  }
  
  .mt-3 {
    margin-top: 1.5rem;
  }
  
  .mt-4 {
    margin-top: 2rem;
  }
  
  .mt-5 {
    margin-top: 3rem;
  }
`;

export default GlobalStyles; 