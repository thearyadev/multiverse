import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/app/header";
import ScreenSizeIndicator from "@/components/app/ssi";
import Image from "next/image";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { SocialIcon } from "react-social-icons";


export const metadata: Metadata = {
  title: "Multiverse Immigration Consultancy",
  description: "Immigration Consultancy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <Header />
        <ScreenSizeIndicator />
        {children}
        <footer className="w-full bg-zinc-950 px-3 md:px-8 lg:px-28 flex flex-wrap justify-center md:space-x-8">
          <div className="w-full md:w-auto flex justify-center">
            <Image
              className="w-96"
              src="/stacked_logo.png"
              alt="Logo"
              width={300}
              height={300}
            />
          </div>

          <div className="text-white">
            <div className="py-8 flex flex-col space-y-3">
              <h3 className="text-2xl font-extrabold py-3 px-2">Get In Touch</h3>
              <div className="flex items-center">
                <MapPinIcon className="h-8 w-8 pr-2" />
                <p className="">
                  100 Consilium Place, Suite 200 Toronto, ON M1H 3E3
                </p>
              </div>

              <div className="flex items-center">
                <MailIcon className="h-8 w-8 pr-2" />
                <p className="">
                  info@multiverseimmigration.ca
                </p>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-8 w-8 pr-2" />
                <p className="">
                  +1 (416) 587-5348
                </p>
              </div>
            </div>


          </div>
          <div className="py-8 grid grid-cols-4 gap-4">
            <SocialIcon url="https://twitter.com" />
            <SocialIcon url="https://facebook.com" />
            <SocialIcon url="https://linkedin.com" />
            <SocialIcon url="https://instagram.com" />
          </div>
          <div className="w-full text-white text-center py-2 text-sm">
            © 2024 Multiverse Immigration Consultancy Inc. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
