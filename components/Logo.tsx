import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/logo.png"
        alt="Logo"
        width={100}
        height={100}
        className="object-contain"
      />
    </Link>
  );
};