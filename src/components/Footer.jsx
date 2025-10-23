const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-800 text-center text-sm text-gray-600 dark:text-gray-400 py-4 mt-8">
    <p>&copy; {new Date().getFullYear()} Raphael Kamunyu. All rights reserved.</p>
    <p>
      <a href="https://github.com/Raphael-Kamau" target="_blank" className="underline">GitHub</a> | 
      <a href="https://vercel.com" target="_blank" className="underline">Vercel</a>
    </p>
  </footer>
);

export default Footer;
