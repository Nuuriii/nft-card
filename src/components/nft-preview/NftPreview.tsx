import ClockIcon from '../../assets/icon-clock.svg';
import EthereumIcon from '../../assets/icon-ethereum.svg';
import EquilibriumIcon from '../../assets/image-equilibrium.jpg';
import AvatarIcon from '../../assets/image-avatar.png';
import {
  Container,
  Wrapper,
  ImageWrapper,
  Information,
  Title,
  Description,
  ExtraInformation,
  EthereumWrapper,
  TimerWrapper,
  Creator,
} from './NftPreview.style';

export const NftPreview = () => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <img src={EquilibriumIcon} alt='Equilibrium Icon' />
        </ImageWrapper>
        <Information>
          <Title>Equilibrium #3429</Title>
          <Description>
            Our Equilibrium collection promotes balance and calm.
          </Description>
          <ExtraInformation>
            <EthereumWrapper>
              <img src={EthereumIcon} alt='' />
              <span>0.041 ETH</span>
            </EthereumWrapper>

            <TimerWrapper>
              <img src={ClockIcon} alt='' />
              <span>3 days left</span>
            </TimerWrapper>
          </ExtraInformation>
          <hr />
          <Creator>
            <img src={AvatarIcon} alt='' />
            <p>Creation of Jules Wyvern</p>
          </Creator>
        </Information>
      </Wrapper>
    </Container>
  );
};
