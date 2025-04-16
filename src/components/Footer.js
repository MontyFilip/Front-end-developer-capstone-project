import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #f4f4f4;
  text-align: center;
  padding: 1rem;
  font-size: 0.875rem;
  color: #777;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2025 Little Lemon. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
