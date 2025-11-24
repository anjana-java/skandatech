import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react"
import { LinkWrapper } from "./link-wrapper"
import { getAssetPath } from "@/lib/utils"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img
              src={getAssetPath("images/skanda_logo.png")}
              alt="Skanda - Experience Expertise"
              className="h-10 w-auto mb-4 brightness-[1.5] filter"
            />
            <p className="text-sm text-gray-400">
              skanda, a MCCI member company
              <br />
              skanda, a NASSCOM member company
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <LinkWrapper
                  href="/offerings/management-and-business-consulting"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Management and Business consulting
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  href="/offerings/it-services"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  IT Consulting
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  href="/offerings/bespoke-application-development"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Bespoke Application development
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  href="/offerings/training"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Training
                </LinkWrapper>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <LinkWrapper href="/aboutus" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About Us
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper
                  href="/offerings/management-and-business-consulting"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Offerings
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="/engagement" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Engagement
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="/contactus" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </LinkWrapper>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; Copyright 2014 by skanda IT Consulting (P) Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
