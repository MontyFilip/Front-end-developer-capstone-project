import React, { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (formData.guests < 1) newErrors.guests = "Must have at least 1 guest";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Reservation confirmed!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Booking Form"
      className="max-w-md mx-auto bg-gray-100 p-6 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-4">Book a Table</h2>

      <label htmlFor="name" className="block mb-2">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        aria-required="true"
        aria-invalid={errors.name ? "true" : "false"}
        className="w-full mb-4 p-2 border rounded"
      />
      {errors.name && <p className="text-red-500">{errors.name}</p>}

      <label htmlFor="date" className="block mb-2">
        Date
      </label>
      <input
        type="date"
        name="date"
        id="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
      />
      {errors.date && <p className="text-red-500">{errors.date}</p>}

      <label htmlFor="time" className="block mb-2">
        Time
      </label>
      <input
        type="time"
        name="time"
        id="time"
        value={formData.time}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
      />
      {errors.time && <p className="text-red-500">{errors.time}</p>}

      <label htmlFor="guests" className="block mb-2">
        Number of Guests
      </label>
      <input
        type="number"
        name="guests"
        id="guests"
        min="1"
        value={formData.guests}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
      />
      {errors.guests && <p className="text-red-500">{errors.guests}</p>}

      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
      >
        Reserve
      </button>
    </form>
  );
}
