"use client";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export const Phone = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="mt-1 w-full ">
      <PhoneInput
        value={phone}
        onChange={(phone) => setPhone(phone)}
        className="w-full "
      />
    </div>
  );
};
