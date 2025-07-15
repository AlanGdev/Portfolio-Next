// app/components/Footer.jsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-100 text-base-content border-t-1 px-4 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        {/* Logo et description */}
        <div>
          <h2 className="text-lg font-bold">Alan Grolleau</h2>
          <p className="mt-2">Développeur Web Freelance</p>
          <p className="mt-2 text-sm">Basé à Theix-Noyalo, Morbihan</p>
        </div>

        {/* Liens de navigation */}
        <div>
          <h3 className="footer-title">Navigation</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="/#projets" className="link link-hover">
                Projets
              </a>
            </li>
            <li>
              <a href="/#a-propos" className="link link-hover">
                À propos
              </a>
            </li>
            <li>
              <a href="/#contact" className="link link-hover">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & réseaux sociaux */}
        <div>
          <h3 className="footer-title">Contact</h3>
          <p className="mt-2">
            Email :{' '}
            <a
              href="mailto:alan.grolleau@gmail.com"
              className="link link-hover"
            >
              alan.grolleau@gmail.com
            </a>
          </p>
          <p>
            Tél :{' '}
            <a href="tel:+33687190292" className="link link-hover">
              +33 6 87 19 02 92
            </a>
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://github.com/AlanGdev"
              target="_blank"
              aria-label="lient github"
              rel="noopener noreferrer"
              className="link"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0.5C5.4 0.5 0 5.9 0 12.5C0 17.9 3.4 22.4 8.2 23.9C8.8 24 9 23.7 9 23.4V21.2C5.7 21.9 5 19.6 5 19.6C4.5 18.3 3.8 18 3.8 18C2.7 17.3 3.9 17.3 3.9 17.3C5 17.4 5.6 18.5 5.6 18.5C6.6 20.1 8.2 19.6 8.8 19.3C8.9 18.5 9.2 18 9.6 17.7C7 17.4 4.2 16.3 4.2 11.7C4.2 10.4 4.7 9.3 5.6 8.4C5.5 8.1 5 6.8 5.7 5C5.7 5 6.7 4.7 9 6.2C9.9 5.9 10.9 5.8 12 5.8C13.1 5.8 14.1 5.9 15 6.2C17.3 4.7 18.3 5 18.3 5C19 6.8 18.5 8.1 18.4 8.4C19.3 9.3 19.8 10.4 19.8 11.7C19.8 16.3 17 17.4 14.4 17.7C14.9 18.1 15.3 18.9 15.3 20.1V23.4C15.3 23.7 15.5 24 16.1 23.9C20.9 22.4 24.3 17.9 24.3 12.5C24.3 5.9 18.9 0.5 12.3 0.5H12Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/alan-grolleau-developpeur-web"
              target="_blank"
              aria-label="lien linkedin"
              rel="noopener noreferrer"
              className="link"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.88 1 4.98 2.12 4.98 3.5ZM.5 8H4.5V24H.5V8ZM8 8H12V10.1H12.1C12.7 9.06 14 7.98 15.94 7.98C20.44 7.98 21 10.78 21 14.34V24H17V15.23C17 13.38 16.96 10.97 14.63 10.97C12.26 10.97 12 12.93 12 15.09V24H8V8Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm opacity-60">
        © {currentYear} Alan Grolleau. Tous droits réservés.
      </div>
    </footer>
  );
}
