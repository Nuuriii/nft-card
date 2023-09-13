import ClockIcon from '../../assets/icon-clock.svg';
import EthereumIcon from '../../assets/icon-ethereum.svg';
import EquilibriumIcon from '../../assets/image-equilibrium.jpg';
import AvatarIcon from '../../assets/image-avatar.png';
import ViewIcon from '../../assets/icon-view.svg';
import {
  Container,
  Wrapper,
  HoverOverlay,
  EquilibriumImg,
  HoverEye,
  ImageWrapper,
  Information,
  Title,
  Description,
  ExtraInformation,
  EthereumWrapper,
  TimerWrapper,
  Hr,
  Creator,
} from './NftPreview.style';

export const NftPreview = () => {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <HoverOverlay />
          <EquilibriumImg src={EquilibriumIcon} alt='Equilibrium Icon' />
          <HoverEye src={ViewIcon} alt='view icon' />
        </ImageWrapper>
        <Information>
          <Title>
            <a href='/'>Equilibrium #3429</a>
          </Title>
          <Description>
            Our Euilibrium collection promotes balance and calm.
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
          <Hr />
          <Creator>
            <img src={AvatarIcon} alt='' />
            <p>
              Creation of <a href='/'>Jules Wyvern</a>
            </p>
          </Creator>
        </Information>
      </Wrapper>
    </Container>
  );
};
