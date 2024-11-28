"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FooterLink from "./FooterLink";
import FooterSection from "./FooterSection";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" mt-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Image
              src="/griddyLogo.png"
              alt="Griddy Movies Logo"
              width={150}
              height={150}
              className="mb-4"
            />
            <p className="text-gray-400 text-sm">
              Your ultimate destination for streaming movies and TV shows. Enjoy
              unlimited entertainment with our vast collection of content.
            </p>
            <SocialLinks />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <FooterSection title="Quick Links">
              <FooterLink href="/media/trending">Trending</FooterLink>
              <FooterLink href="/media/movies">Movies</FooterLink>
              <FooterLink href="/media/shows">TV Shows</FooterLink>
              <FooterLink href="/contact">About Us</FooterLink>
            </FooterSection>
          </motion.div>

          {/* Legal */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <FooterSection title='Legal'>
              <FooterLink href='/privacy'>Privacy Policy</FooterLink>
              <FooterLink href='/terms'>Terms of Service</FooterLink>
              <FooterLink href='/cookies'>Cookie Policy</FooterLink>
              <FooterLink href='/disclaimer'>Disclaimer</FooterLink>
            </FooterSection>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <FooterSection title="V4 Code">
              <FooterLink href="https://v4code.vercel.app/">
                About V4 Code
              </FooterLink>
              <div className="text-gray-400 text-sm mt-2">
                Transforming entertainment through innovative solutions
              </div>
            </FooterSection>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <FooterSection title="Contact">
              <FooterLink href="mailto:vfourcode@gmail.com">
                vfourcode@gmail.com
              </FooterLink>
            </FooterSection>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Griddy Movies. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <FooterLink href="https://github.com/silentm4gician">
                @silentM4gician
              </FooterLink>
              <FooterLink href="https://github.com/Luks-code">
                @Tropicaal_
              </FooterLink>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
