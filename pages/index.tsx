import Image from "next/image";
import localFont from "next/font/local";
import hotels from "@/components/hotels";
import { useEffect, useRef, useState } from "react";
import HotelInfo from "@/components/HotelInfo";

// Load environment variables from .env file
import dotenv from 'dotenv';

dotenv.config();


export default function Home() {
  const [randomHotels, setRandomHotels] = useState(hotels.slice(0, 4)); // Initial display of 5 hotels
  const [selectedHotel, setSelectedHotel] = useState(null);
  const modalRef = useRef<HTMLDialogElement>(null); 

  function handleOpenModal(hotel:any) {
    setSelectedHotel(hotel);
    modalRef.current?.showModal(); // Use ref to show the modal
  }

      
  useEffect(() => {
    
    const shuffledHotels = hotels.sort(() => 0.5 - Math.random()); 
    const selectedHotels = shuffledHotels.slice(0, 4); 
    setRandomHotels(selectedHotels);
  }, []);

  console.log(randomHotels)

  return (
    <div className="flex flex-col items-center justify-center min-w-screen m-3">
      Hello World

      <div className="flex flex-wrap justify-center gap-4 m-5">
        {randomHotels.map((hotel) => (
          <div key={hotel.id} className="card bg-base-100 w-80 shadow-xl">
            <figure className="p-1">
              <img
                src={"hotel1.jpg"}
                alt={hotel.name}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{hotel.name}</h2>
              <p>{hotel.state}</p>
              <p>{hotel.stars} stars</p>
              <div className="card-actions">
                <button className="btn btn-primary" onClick={() => handleOpenModal(hotel)}>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box w-screen max-w-5xl m-5 ">
          {selectedHotel && <HotelInfo hotel={selectedHotel} />}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
            {/* <button className="btn btn-primary">Proceed with Booking</button> */}
          </div>
        </div>
      </dialog>

    </div>
  );
}


      // className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}

      // const geistSans = localFont({
      //   src: "./fonts/GeistVF.woff",
      //   variable: "--font-geist-sans",
      //   weight: "100 900",
      // });
      // const geistMono = localFont({
      //   src: "./fonts/GeistMonoVF.woff",
      //   variable: "--font-geist-mono",
      //   weight: "100 900",
      // });