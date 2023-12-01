import React, { useState } from "react";
import { FormWrapper } from "./FormWrapper";

const PaymentForm = ({ payment, updateFields }: PaymentFormProps) => {
  const [selectedPayment, setSelectedPayment] = useState(payment);

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    setSelectedPayment(selectedValue);
    updateFields({ payment: selectedValue });
  };

  return (
    <FormWrapper title="Payment Method">
      <div className="flex flex-col space-y-4">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="CARD"
            checked={selectedPayment === "CARD"}
            onChange={handlePaymentChange}
            className="form-radio h-4 w-4 text-indigo-600"
          />
          <span className="text-gray-700">Credit or debit card</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="NETBANKING"
            checked={selectedPayment === "NETBANKING"}
            onChange={handlePaymentChange}
            className="form-radio h-4 w-4 text-indigo-600"
          />
          <span className="text-gray-700">Net Banking</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="UPI"
            checked={selectedPayment === "UPI"}
            onChange={handlePaymentChange}
            className="form-radio h-4 w-4 text-indigo-600"
          />
          <span className="text-gray-700">Other UPI Apps</span>
        </label>

        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="payment"
            value="COD"
            checked={selectedPayment === "COD"}
            onChange={handlePaymentChange}
            className="form-radio h-4 w-4 text-indigo-600"
          />
          <span className="text-gray-700">
            Cash on Delivery/Pay on Delivery
          </span>
        </label>
      </div>
    </FormWrapper>
  );
};

export default PaymentForm;
