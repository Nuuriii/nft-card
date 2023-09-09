import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: hsl(217, 54%, 11%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 20rem;
  padding: 1rem;
  border-radius: 0.5rem;
  height: auto;
  background-color: hsl(216, 50%, 16%);
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  justify-content: center;
  img {
    height: 100%;
    width: 100%;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #fff;
  margin: 1rem 0;
  font-size: 1.2rem;
`;

export const Description = styled.p`
  color: hsl(215, 51%, 70%);
  margin: 0 0 1rem 0;
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
    font-weight: 700;
    margin: 0 0 0 0.5rem;
    color: hsl(178, 100%, 50%);
  }
`;

export const TimerWrapper = styled.div`
  display: flex;
  width: 8rem;
  span {
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
  span {
    color: #fff;
  }
`;
