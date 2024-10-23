// components/HotelInfo.tsx
import React, { useState } from 'react';

interface Hotel {
  id: number;
  name: string;
  state: string;
  stars: number;
  pricePerNight: number;
}

interface HotelInfoProps {
  hotel: Hotel; // Define the hotel prop type
}

const HotelInfo: React.FC<HotelInfoProps> = ({ hotel }) => {
  const [formData, setFormData] = useState({
    checkInDate: '',
    checkOutDate: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setReslt] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault(); // Prevent the default form submission

  //   try {
  //     const response = await fetch('/api/sendBooking', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         hotel,
  //         ...formData,
  //       }),
  //     });

  //     if (response.ok) {
  //       setSuccessMessage('Booking confirmed! An email has been sent.');
  //       setFormData({
  //         checkInDate: '',
  //         checkOutDate: '',
  //         firstName: '',
  //         lastName: '',
  //         email: '',
  //       });
  //     } else {
  //       setSuccessMessage('Failed to send the booking. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error sending booking:', error);
  //     setSuccessMessage('An error occurred. Please try again later.');
  //   }
  // };


  const sendMail=()=>{
    setLoading(true);
    fetch('/api/emails',{
      method:'POST'
    })
    .then(response =>response.json())
    .then(data =>setFormData(data))
    .catch(error =>setReslt(error))
    .finally(() =>setLoading(false))
  }

  return (
    <div className="flex justify-evenly items-start">
      {/* Hotel Info Section */}
      <div className="flex flex-col items-start justify-center text-left mr-8"> {/* Margin right for spacing */}
        <img src="hotel1.jpg" alt={hotel.name} className="rounded-xl mb-4 w-96" />
        <h3 className="font-bold text-lg text-blue-950 ">
          {hotel.name}, <span className="text-blue-400 font-thin">{hotel.state}</span>
        </h3>
        <p className="py-1">Stars: {hotel.stars} stars</p>
        <p className="py-1">Price per night: ${hotel.pricePerNight}</p>
      </div>
  
      {/* Form Section */}
      <div className="flex flex-col">
        <h3 className="font-bold text-lg mb-2">Booking Form</h3>
        <form className="flex flex-col" onSubmit={sendMail}>
          <label className="mb-2">
            Check-in Date:
            <input
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              className="input input-bordered w-full mb-4"
            />
          </label>
          <label className="mb-2">
            Check-out Date:
            <input
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              className="input input-bordered w-full mb-4"
            />
          </label>
          <label className="mb-2">
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="input input-bordered w-full mb-4"
            />
          </label>
          <label className="mb-2">
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="input input-bordered w-full mb-4"
            />
          </label>
          <label className="mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full mb-4"
            />
          </label>
          <button type="submit" className="btn btn-primary">Book Now</button>
        </form>
        {successMessage && <p className="mt-4 text-green-500">{successMessage}</p>}
      </div>
    </div>
  );
};

export default HotelInfo;
function setLoading(arg0: boolean) {
  throw new Error('Function not implemented.');
}

