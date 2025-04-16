import React from "react";
import BookingForm from "./components/BookingForm.js";

export default function App() {
  return (
    <main className="font-sans bg-white min-h-screen text-gray-900">
      <header className="bg-yellow-400 p-6 text-center">
        <h1 className="text-4xl font-bold" role="heading" aria-level="1">Little Lemon</h1>
        <p className="text-lg mt-2">Fresh Mediterranean Food</p>
      </header>

      <section className="p-6">
        <BookingForm />
      </section>

      <footer className="bg-gray-800 text-white p-4 text-center mt-10">
        <p>&copy; 2025 Little Lemon Restaurant</p>
      </footer>
    </main>
  );
}
