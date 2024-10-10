import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../images/logo.png"

export default function Navbar() {

    return (
        <nav className="fixed w-full h-24 shadow-x2 bg-black  ">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Image src={logo} alt="Logo" className="w-20 md:w-32 lg:w-25" />
                <div>
                    <ul className="hidden sm:flex ">
                        <Link href="/">
                            <li className="ml-10 uppercase hover:border-b text-xl hover:active text-white hover:text-red-500">Home</li>
                        </Link >
                        <Link href="./categories">
                            <li className="ml-10 uppercase hover:border-b text-xl  text-white hover:text-red-500">Categories</li>
                        </Link >
                        <Link href="/features">
                            <li className="ml-10 uppercase hover:border-b text-xl  text-white hover:text-red-500">Features</li>
                        </Link >
                        <Link href="/serivces">
                            <li className="ml-10 uppercase hover:border-b text-xl  text-white hover:text-red-500">About Us</li>
                        </Link >
                        <Link href="/contact-us">
                            <li className="ml-10 uppercase hover:border-b text-xl  text-white hover:text-red-500">Contact Us</li>
                        </Link >

                    </ul>
                </div>
            </div>

        </nav>
    )
}