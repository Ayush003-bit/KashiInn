
  import React, { useState } from "react";

const BookingModal = ({ isOpen, onClose, room }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Full Name is required";
    if (!form.phone || form.phone.length < 10)
      newErrors.phone = "Valid phone required";
    if (!form.email.includes("@"))
      newErrors.email = "Valid email required";
    if (!form.category) newErrors.category = "Select category";
    if (!form.checkIn) newErrors.checkIn = "Check-in required";
    if (!form.checkOut) newErrors.checkOut = "Check-out required";
    if (!form.guests) newErrors.guests = "Guests required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const message = `
*Hotel Room Booking*
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Room: ${form.category}
Check-in: ${form.checkIn}
Check-out: ${form.checkOut}
Guests: ${form.guests}
Room Selected: ${room?.name}
    `;

    const whatsappURL = `https://wa.me/918127198888?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  const inputStyle =
    "w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600";

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg p-6 space-y-4 font-poppins animate-fadeIn">
        <h2 className="text-2xl font-semibold text-center text-amber-700">
          Book Your Room
        </h2>

        <div className="grid grid-cols-1 gap-3">
          <input
            type="text"
            placeholder="Full Name"
            className={inputStyle}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <p className="text-red-500 text-xs">{errors.name}</p>

          <input
            type="tel"
            placeholder="Phone Number"
            className={inputStyle}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <p className="text-red-500 text-xs">{errors.phone}</p>

          <input
            type="email"
            placeholder="Email"
            className={inputStyle}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <p className="text-red-500 text-xs">{errors.email}</p>

          <select
            className={inputStyle}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option value="">Select Room Category</option>
            <option>Delux</option>
            <option>Single AC</option>
            <option>Double AC</option>
            <option>Single Non-AC</option>
            <option>Double Non-AC</option>
          </select>
          <p className="text-red-500 text-xs">{errors.category}</p>

          <div className="grid grid-cols-2 gap-2">
            <input
              type="date"
              className={inputStyle}
              onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
            />
            <input
              type="date"
              className={inputStyle}
              onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
            />
          </div>
          <p className="text-red-500 text-xs">{errors.checkIn}</p>

          <input
            type="number"
            placeholder="No. of Guests"
            className={inputStyle}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
          />
          <p className="text-red-500 text-xs">{errors.guests}</p>
        </div>

        <div className="flex gap-3 pt-3">
          <button
            onClick={onClose}
            className="w-full py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="w-full py-2 rounded-lg bg-amber-700 text-white hover:bg-amber-600 cursor-pointer"
          >
            Send Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;