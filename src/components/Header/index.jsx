import React from 'react';
import { CardHeader, CardTitle } from "../../components/Layout/Card";

function Header() {
  return (
    <CardHeader className="bg-black p-6 border-b border-red-600">
      <CardTitle className="text-4xl font-bold text-center text-red-600">
        <img src="/assets/icon.svg" alt="popcorn" className="w-12 h-12 inline-block mr-4" />
        Cinema Reservation
      </CardTitle>
    </CardHeader>
  );
}

export default Header;