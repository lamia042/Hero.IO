import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B1120] text-white">

  <div className="mx-auto px-10 sm:px-8 lg:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

    {/* Logo + About */}
    <div>
      <div className="flex items-center gap-2 mb-3">
        <img src={logo} alt="HeroIO" className="h-8 w-auto" />
        <span className="text-white text-lg">Hero.IO</span>
      </div>
      <p className="text-sm text-white/60">
        Hero.IO is a modern app marketplace where users can explore, review, and install apps easily.
      </p>
    </div>

    {/* Navigation */}
    <div>
      <h3 className="text-sm font-semibold mb-3">Navigation</h3>
      <ul className="space-y-2 text-sm text-white/60">
        <li>Home</li>
        <li>Apps</li>
        <li>Installation</li>
        <li>My Installation</li>
      </ul>
    </div>

    {/* Technologies */}
    <div>
      <h3 className="text-sm font-semibold mb-3">Technologies</h3>
      <ul className="space-y-2 text-sm text-white/60">
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>Recharts</li>
        <li>LocalStorage</li>
      </ul>
    </div>

    {/* Social + Contact */}
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold">Connect</h3>

      <div className="flex gap-4 text-lg text-white/40">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>

      <p className="text-sm text-white/60">Email: lamiaaktar1216@email.com</p>
    </div>

  </div>

  {/* Bottom */}
  <div className="border-t border-white/10 text-center py-4 text-xs text-white/40">
    © {new Date().getFullYear()} Hero.IO — All rights reserved
  </div>

</footer>
  );
}
