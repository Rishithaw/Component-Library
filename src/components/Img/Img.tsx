import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.type';

const StyledImg = styled.img<{ disabled?: boolean }>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  object-fit: cover;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  border-radius: 8px;
`;

export const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled }) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} disabled={disabled} />;
};
