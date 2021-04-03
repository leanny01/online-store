import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../../assets/crown.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Ic5VbEUoNlOiJRMREQIuqGjvJPnSE790kGh63kOGo7aD2xBWEHukb56YigTq2JkxMrqaQEbtrOCFis5p3y7Gc2400YlPNZOzg";
  const onToken = (token) => {
    console.log(token);
    alert(`Payment successful`);
  };
  return (
    <StripeCheckout
      label="Pay Now"
      Name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      onToken={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
