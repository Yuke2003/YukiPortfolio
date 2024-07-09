// components/Footer.js
function Footer() {
    return (
      <footer className="bg-[#201f1f] text-gray-300 py-8 mt-5">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <h1 className="text-2xl font-semibold">Yuki Portfolio</h1>
            <p className="text-sm">© 2024 Yuki Portfolio. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/Yuke2003" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.41c.6.11.82-.26.82-.58v-2.22c-3.34.73-4.03-1.63-4.03-1.63-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.51.12-3.15 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 0 1 3-.4c1.02.01 2.05.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.24 2.85.12 3.15.78.84 1.24 1.91 1.24 3.23 0 4.63-2.81 5.65-5.49 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.83.57A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.44 4.83c-.81.36-1.68.6-2.6.71a4.51 4.51 0 0 0 1.98-2.48 8.94 8.94 0 0 1-2.85 1.09 4.5 4.5 0 0 0-7.64 4.1A12.8 12.8 0 0 1 1.67 3.15a4.5 4.5 0 0 0 1.39 6.01 4.47 4.47 0 0 1-2.04-.57v.06a4.5 4.5 0 0 0 3.6 4.41 4.49 4.49 0 0 1-2.03.08 4.5 4.5 0 0 0 4.2 3.12 9 9 0 0 1-5.58 1.93A8.92 8.92 0 0 1 0 20.29a12.78 12.78 0 0 0 6.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.41-.02-.61a9.18 9.18 0 0 0 2.26-2.34l.02-.03z" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.8 0 0 .8 0 1.77v20.45C0 23.2.8 24 1.77 24h20.45c.98 0 1.78-.8 1.78-1.78V1.77C24 .8 23.2 0 22.23 0zM7.12 20.45H3.55V8.55h3.57v11.9zm-1.78-13.5a2.08 2.08 0 1 1 0-4.16 2.08 2.08 0 0 1 0 4.16zm15.13 13.5h-3.57v-5.73c0-1.37-.03-3.12-1.9-3.12-1.9 0-2.18 1.48-2.18 3v5.85H10.5V8.55h3.42v1.63h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.64z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  