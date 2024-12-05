import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative py-12">
      {/* Background heart watermark */}
      {/* <div className="absolute right-0 top-0 opacity-10">
        <div className="h-96 w-96 bg-[url('/placeholder.svg')] bg-contain bg-center bg-no-repeat" />
      </div> */}

      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-8 flex items-center gap-2">
            <Logo />
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900 fontTomorrow">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 fontTomorrow">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 fontTomorrow">
                  FAQ‘s
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900 fontTomorrow">
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="hover:text-gray-900">
                  Register
                </Link>
              </li> */}
            </ul>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © 2023 Boslight. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
