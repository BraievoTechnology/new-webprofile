import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import PrimaryButton from "../maincomponents/PrimaryButton";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#019CD4]/80 to-[#022F8C]/80 text-gray-100 py-10 px-6 sm:px-12">
      <div className="grid grid-cols-1 gap-10 mx-auto text-center max-w-7xl md:grid-cols-3 md:text-left">
        {/* Column 1 */}
        <div className="flex flex-col items-center justify-center md:items-start">
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
            className="mb-2 text-lg font-semibold"
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
        <div className="flex flex-col items-center justify-center md:items-start ml-30">
          <h2
            style={{ fontFamily: "Sora, sans-serif" }}
            className="mb-4 text-lg font-semibold"
          >
            Our Pages
          </h2>
          <ul
            style={{ fontFamily: "Sora, sans-serif" }}
            className="space-y-2 text-[18px] text-start "
          >
            <li>
              <Link href="/" className="hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-gray-900">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-gray-900">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-900">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center justify-center text-right md:items-end">
          <div>
            <h2
              style={{ fontFamily: "Sora, sans-serif" }}
              className="mb-4 text-lg font-semibold"
            >
              Follow Us
            </h2>
            <p
              style={{ fontFamily: "Sora, sans-serif" }}
              className="mb-4 text-sm"
            >
              At BraiEvo Technologies, our services are designed to elevate your
              vision through smart technology, intuitive design, and strategic
              innovation.
            </p>
            <div className="flex justify-end gap-4 text-xl">
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
          <div className="self-end mt-6">
            <Link href="/contact" passHref>
              <PrimaryButton>Contact Us</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
