import React from "react";
import Image from "next/image";
import homePic from "./images/homePic.jpg"
import HF3 from "./images/HF3.jpg"
import HF4 from "./images/HF4.png"
import HF5 from "./images/HF5.jpg"



export default function Home() {
  return (
    <div>
      <Image src={homePic} alt="home" className="home width={300} height={100} shadow-lg shadow-black-500/90 bg-opacity-20" />


      <div className="text-center text-2xl mt-8 font-bold homehead ">The Ultimate Collection of Tech Products
        <section className="py-10 ">
          <div className="max-w-6xl mx-auto text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Handfree Card */}
              <div className="border p-6 rounded-lg shadow-lg bg-black hover:border-red-600 ">
                <div className="flex flex-col items-center">
                  <Image
                    src={HF3}
                    alt="Tech"
                    width={300}
                    height={300}
                    className="inline-block mb-4 rounded-lg"
                  />
                </div>
                <h4 className="text-xl text-white font-bold mb-7">Handfree</h4>
                <h4 className="text-xl text-white font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg ">Rs.500.00 PKR</h4>
              </div>

              {/* Airpods Card */}
              <div className="border p-6 rounded-lg shadow-lg bg-black hover:border-red-600 ">
                <div className="flex flex-col items-center">
                  <Image
                    src={HF4}
                    alt="Tech"
                    width={300}
                    height={300}
                    className="inline-block mb-4 rounded-lg"
                  />
                </div>
                <h4 className="text-xl  text-white font-bold mb-7">Airpods</h4>
                <h4 className="text-xl text-white font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.2800.00 PKR</h4>
              </div>

              {/* Affordable Prices Card */}
              <div className="border p-6 rounded-lg shadow-lg  bg-black hover:border-red-600 ">

                <div className="flex flex-col items-center">
                  <Image
                    src={HF5}
                    alt="Headphones"
                    width={300}
                    height={300}
                    className="inline-block mb-4 rounded-lg"
                  />
                </div>
                <h4 className="text-xl text-white font-bold mb-7">Headphones</h4>
                <h4 className="text-xl text-white font-semibold mb-2 mt-2 border-2 border-grey-500 shadow-lg">Rs.5200.00 PKR</h4>
              </div>

            </div>

          </div>

        </section>
      </div>
    </div>

  )
}