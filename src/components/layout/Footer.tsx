import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden py-16 md:py-20 px-6 sm:px-8 bg-transparent">
      {/* Background watermark text partially outside (half visible) */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[35%]"
      >
        <span className="block text-[8rem] sm:text-[14rem] md:text-[20rem] leading-none font-extrabold tracking-tight text-gray-900/5">
          BraiEvo
        </span>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 rounded-3xl bg-white shadow-xl ring-1 ring-black/5 p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Brand + About */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <Image
                  src="/assets/Horizontal2.png"
                  alt="BraiEvo Logo"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <span className="text-xl font-semibold">BraiEvo</span>
              </div>
              <p className="mt-5 text-sm text-gray-600 leading-6 max-w-md">
                BraiEvo empowers teams to transform raw ideas into clear,
                compelling digital experiences — making insights easier to
                share, understand, and act on.
              </p>
              <div className="mt-6 flex items-center gap-5 text-gray-600 text-lg">
                <a
                  href="#"
                  aria-label="X/Twitter"
                  className="hover:text-gray-900 transition-colors"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-gray-900 transition-colors"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="hover:text-gray-900 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-gray-900 transition-colors"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>

            {/* Link Columns */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Pages
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pages/AboutSection"
                      className="hover:text-gray-900 transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pages/Contactus"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/portfolio"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Services
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Digital Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Innovation Consulting
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Team Empowerment
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Company
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Our Vision
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-8 border-gray-200" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} BraiEvo. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
