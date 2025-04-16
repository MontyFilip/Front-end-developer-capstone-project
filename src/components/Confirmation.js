import React from "react";
import styled from "styled-components";

const ConfirmationBox = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Confirmation = () => (
  <ConfirmationBox>
    <Heading>Booking Confirmed!</Heading>
    <p>Thank you for choosing Little Lemon. We look forward to serving you.</p>
  </ConfirmationBox>
);

export default Confirmation;
