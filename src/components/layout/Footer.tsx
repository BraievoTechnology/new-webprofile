import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import PrimaryButton from "../maincomponents/PrimaryButton";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#019CD4]/50 to-[#022F8C]/50 text-gray-700 py-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Column 1 */}
        <div className="flex flex-col items-center md:items-start justify-center">
          <div className="mb-4">
            <Image
              src="/assets/Horizontal2.png"
              alt="BraiEvo Logo"
              width={150}
              height={50}
              priority
            />
          </div>
          <h2
            style={{ fontFamily: "Sora, sans-serif" }}
            className="text-lg font-semibold mb-2"
          >
            BraiEvo Technologies Pvt. Ltd.
          </h2>
          <p
            style={{ fontFamily: "Sora, sans-serif" }}
            className="text-sm leading-6"
          >
            No. 45, Garden Street,
            <br />
            Colombo 07,
            <br />
            Sri Lanka.
            <br />
            <a
              href="mailto:support@braievo.com"
              className="underline hover:text-gray-900"
            >
              support@braievo.com
            </a>
            <br />
            +94 77 123 4567
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center md:items-start justify-center ml-30">
          <h2
            style={{ fontFamily: "Sora, sans-serif" }}
            className="text-lg font-semibold mb-4"
          >
            Our Pages
          </h2>
          <ul
            style={{ fontFamily: "Sora, sans-serif" }}
            className="space-y-2 text-[18px] text-start "
          >
            <li>
              <a href="/" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-gray-900">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-gray-900">
                Careers
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gray-900">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center md:items-end justify-center text-right">
          <div>
            <h2
              style={{ fontFamily: "Sora, sans-serif" }}
              className="text-lg font-semibold mb-4"
            >
              Follow Us
            </h2>
            <p
              style={{ fontFamily: "Sora, sans-serif" }}
              className="text-sm mb-4"
            >
              At BraiEvo Technologies, our services are designed to elevate your
              vision through smart technology, intuitive design, and strategic
              innovation.
            </p>
            <div className="flex gap-4 text-xl justify-end">
              <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-sky-600">
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-600"
              >
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="mt-6 self-end">
            <PrimaryButton href="/contact">Contact Us</PrimaryButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
