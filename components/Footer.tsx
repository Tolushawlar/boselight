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
                <Link href="#" className="hover:text-gray-900">
                  Donations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Popular Causes
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  UpComing Event
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Latest Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Help
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © 2023 Asra . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
