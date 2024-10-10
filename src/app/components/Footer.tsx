// pages/page.tsx
import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Other content of your page goes here */}

            <footer className="bg-black text-white py-4 mt-auto">
                <div className="container mx-auto flex justify-center space-x-6">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className="text-2xl hover:text-gray-400" />
                    </a>
                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <FaWhatsapp className="text-2xl hover:text-gray-400" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin className="text-2xl hover:text-gray-400" />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

