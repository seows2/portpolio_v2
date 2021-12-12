import styled, { keyframes } from "styled-components";

const TextSlider = () => {
  return (
    <Wrapper>
      <div className="slider">
        <div className="slide">Frontend</div>
        <div className="slide">React</div>
        <div className="slide">MobX</div>
        <div className="slide">HTML / CSS</div>
        <div className="slide">Javascript</div>
        <div className="slide">Typescript</div>
      </div>
    </Wrapper>
  );
};

export default TextSlider;

const slide = keyframes`
    0% {
        margin-left: 0;
    }
    9% {
        margin-left: 0;
    }
    18% {
        margin-left: -100%;
    }
    27% {
        margin-left: -100%;
    }
    36% {
        margin-left: -200%;
    }
    45% {
        margin-left: -200%;
    }
    54% {
        margin-left: -300%;
    }
    63% {
        margin-left: -300%;
    }
    72% {
        margin-left: -400%;
    }
    81% {
        margin-left: -400%;
    }
    90% {
        margin-left: -500%;
    }
    100% {
        margin-left: -500%;
    }
`;

const Wrapper = styled.div`
  width: 100%;
  .slider {
    width: 600%;
    display: flex;
    animation: 10s ${slide} infinite;
    animation-direction: alternate;
    .slide {
      width: 100%;
      text-align: center;
    }
  }
`;
