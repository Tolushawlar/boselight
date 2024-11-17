import Link from "next/link";

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
            <div className="relative h-8 w-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
              >
                <path
                  d="M12 6C11.0538 4.37665 9.36418 3.17708 7.5 3.17708C4.6371 3.17708 2.29167 5.52251 2.29167 8.38541C2.29167 14.0833 12 20.8333 12 20.8333"
                  stroke="#2A9D8F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 6C12.9462 4.37665 14.6358 3.17708 16.5 3.17708C19.3629 3.17708 21.7083 5.52251 21.7083 8.38541C21.7083 14.0833 12 20.8333 12 20.8333"
                  stroke="#E07A5F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">
              Helping Hand
            </span>
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
