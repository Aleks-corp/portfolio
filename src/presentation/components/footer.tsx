const Footer = () => {
  return (
    <footer className="w-full border-t border-border py-10 px-6 mt-24 bg-background">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Aleks Haran. All rights reserved.
        </div>

        <div className="flex gap-6 text-muted-foreground">
          <a
            href="mailto:aleks.haran.dev@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/Aleks-corp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aleks-haran-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
