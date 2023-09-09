import styled from 'styled-components';
import Outfit from '../../assets/fonts/Outfit-VariableFont_wght.ttf';

export const Container = styled.div`
  height: 100vh;
  background-color: hsl(217, 54%, 11%);
  display: flex;
  align-items: center;
  justify-content: center;

  @font-face {
    font-family: Outfit;
    src: url(${Outfit});
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 20rem;
  padding: 1rem;
  border-radius: 0.5rem;
  height: auto;
  background-color: hsl(216, 50%, 16%);
  flex-direction: column;
  box-shadow:
    5px 5px 10px #000a1b,
    -5px -5px 10px #000a1b;
`;

export const HoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: cyan; /* Add cyan background color */
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease;
  border-radius: inherit;
`;

export const EquilibriumImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const HoverEye = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 5rem;
  height: 5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  justify-content: center;

  &:hover ${HoverOverlay} {
    opacity: 0.503;
  }
  &:hover ${HoverEye} {
    opacity: 1;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 1rem 0;
  a {
    color: #fff;
    text-decoration: none;
    font-family: Outfit, sans-serif;
    font-size: 1.2rem;
  }
  a:hover {
    color: hsl(178, 100%, 50%);
  }
  a:active {
    color: hsl(178, 100%, 50%);
  }
`;

export const Description = styled.p`
  color: hsl(215, 51%, 70%);
  margin: 0 0 1rem 0;
  font-family: Outfit, sans-serif;
`;

export const ExtraInformation = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 1rem 0;
`;

export const EthereumWrapper = styled.div`
  display: flex;
  width: 8rem;
  span {
    font-family: Outfit, sans-serif;
    font-weight: 700;
    margin: 0 0 0 0.5rem;
    color: hsl(178, 100%, 50%);
  }
`;

export const TimerWrapper = styled.div`
  display: flex;
  width: 8rem;
  span {
    font-family: Outfit, sans-serif;
    font-weight: 700;
    margin: 0 0 0 0.5rem;
    color: hsl(215, 51%, 70%);
  }
`;

export const Hr = styled.hr`
  color: hsl(215, 32%, 27%);
  margin: 0 0 1rem 0;
`;

export const Creator = styled.div`
  display: flex;
  align-items: center;
  img {
    margin: 0 0.9rem 0 0;
    outline: 1px solid #fff;
    border-radius: 100%;
    height: 2rem;
  }
  p {
    color: hsl(215, 51%, 70%);
  }
  a {
    font-family: Outfit, sans-serif;
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    color: hsl(178, 100%, 50%);
  }
  a:active {
    color: hsl(178, 100%, 50%);
  }
`;
