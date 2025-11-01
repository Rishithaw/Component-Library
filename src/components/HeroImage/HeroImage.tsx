import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const StyledHero = styled.div<{
  $backgroundImage: string;
  $disabled?: boolean;
}>`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 1px 1px 3px #00000099;
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.$disabled ? 'none' : 'auto')};
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  backgroundImage,
  title,
  subtitle,
  disabled,
}) => {
  return (
    <StyledHero
      role="banner"
      aria-label={title}
      $backgroundImage={backgroundImage}
      $disabled={disabled}
    >
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </StyledHero>
  );
};
