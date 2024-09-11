import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// Define keyframes for a sliding animation
const slideIn = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Styled component for cascading effect
const CascadingSpan = styled.span`
  display: inline-block;
  animation: ${slideIn} 1s ease forwards;
  animation-delay: ${({ delay }) => delay};
`;

const CascadingLoveText = () => (
  <Slide direction="bottom" triggerOnce>
    <h2>
      <CascadingSpan delay="0s">L</CascadingSpan>
      <CascadingSpan delay="0.1s">o</CascadingSpan>
      <CascadingSpan delay="0.2s">v</CascadingSpan>
      <CascadingSpan delay="0.3s">e</CascadingSpan>
    </h2>
  </Slide>
);

export default CascadingLoveText;
