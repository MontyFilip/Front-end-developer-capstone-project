import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.form`
  max-width: 400px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #007f5f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005f3f;
  }
`;

const Booking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', date: '', time: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input id="name" name="name" onChange={handleChange} required />

      <Label htmlFor="date">Date</Label>
      <Input type="date" id="date" name="date" onChange={handleChange} required />

      <Label htmlFor="time">Time</Label>
      <Input type="time" id="time" name="time" onChange={handleChange} required />

      <Button type="submit">Book Now</Button>
    </FormContainer>
  );
};

export default Booking;
