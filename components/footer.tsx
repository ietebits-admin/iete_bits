"use client";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const socials = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/ietebits/",
  },
  {
    icon: <FaTwitter />,
    link: "https://x.com/IETE_BITS",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/ietebits/",
  },
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/company/iete-students-chapter-bit-sindri123/posts/?feedView=all",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 text-white">

     <div className="absolute inset-0 
bg-gradient-to-b from-white/10 via-white/5 to-transparent 
backdrop-blur-2xl 
border-t border-white/20 
shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_-10px_40px_rgba(59,130,246,0.15)]" />

    
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />

      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

      
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">

         
        <div className="flex items-center gap-3">
  <Image
    src="logo1.png"
    alt="IETE Logo"
    width={36}
    height={36}
    className="object-contain"
  />
  <h2 className="text-xl font-bold tracking-wide">IETE</h2>
</div>
        
        <div className="flex gap-4">
  {socials.map((item, i) => (
    <a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full 
      bg-white/10 hover:bg-blue-500 transition cursor-pointer backdrop-blur-md
      hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] text-lg"
    >
      {item.icon}
    </a>
  ))}
</div>
        </div>

      
        <div className="grid md:grid-cols-4 gap-10">

         
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-widest text-gray-300">
              IETE
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer transition">Home</li>
              <li className="hover:text-white cursor-pointer transition">Contact us</li>
              <li className="hover:text-white cursor-pointer transition">About us</li>
              <li className="hover:text-white cursor-pointer transition">Events</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-widest text-gray-300">
              FIND US
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              BIT Sindri <br />
              828123, Dhanbad <br />
              Jharkhand
            </p>
          </div>

         
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-widest text-gray-300">
              CONTACT US
            </h3>
            <p className="text-gray-400 text-sm">
              contact@ietebits.com <br />
              +91-8987475187 <br />
              +91-9546003148
            </p>
          </div>

         
          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-widest text-gray-300">
              GET IN TOUCH
            </h3>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mb-3 rounded-md 
              bg-white/10 border border-white/20 
              text-white placeholder-gray-400 
              focus:outline-none focus:border-blue-400 backdrop-blur-md"
            />

            <button
              className="w-full py-2 rounded-md 
              bg-white/10 hover:bg-blue-500 
              transition backdrop-blur-md border border-white/10"
            >
              Send
            </button>
          </div>

        </div>

      </div>

     
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm py-4 px-6 border-t border-white/10">
        <p>Copyright © 2025 IETE SF. All rights reserved</p>
        <p>Designed & Developed By: Team IETE</p>
      </div>

    </footer>
  );
}