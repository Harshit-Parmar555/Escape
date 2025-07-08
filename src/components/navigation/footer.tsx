import Link from "next/link";
import { Heart } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative mx-auto w-full max-w-7xl border-t border-border px-6 pb-12 pt-16 lg:px-8">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-5">
        {/* Logo and Summary */}
        <div>
          <h2 className="text-2xl font-semibold text-white">Neurix</h2>

          <div className="mt-4 flex gap-4 text-muted-foreground">
            <Link href="#" aria-label="Facebook">
              <FaFacebookF className="hover:text-primary transition h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="hover:text-primary transition h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FaTwitter className="hover:text-primary transition h-5 w-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="hover:text-primary transition h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-base font-medium text-white">Product</h3>
          <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Enterprise
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Downloads
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Students
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-base font-medium text-white">Resources</h3>
          <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Docs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Forum
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Changelog
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-base font-medium text-white">Company</h3>
          <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Anysphere
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Comunities
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Customers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-medium text-white">Legal</h3>
          <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Terms
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Security
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-foreground transition">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-border/40 pt-6 text-center md:flex md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Neurix. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-1 text-sm text-muted-foreground md:mt-0">
          Made in India with{" "}
          <Heart className="ml-1 h-3.5 w-3.5 fill-primary text-primary" />
        </div>
      </div>
    </footer>
  );
}
