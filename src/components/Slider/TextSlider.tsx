import styled, { keyframes } from "styled-components";

const TextSlider = () => {
  return (
    <Wrapper>
      <div className="slider">
        <div className="slide">설명 1</div>
        <div className="slide">설명 2</div>
        <div className="slide">설명 3</div>
      </div>
    </Wrapper>
  );
};

export default TextSlider;

const slide = keyframes`
    0% {
        margin-left: 0;
    }
    20% {
        margin-left: 0;
    }
    35% {
        margin-left: -100%;
    }
    60% {
        margin-left: -100%;
    }
    75% {
        margin-left: -200%;
    }
    90% {
        margin-left: -200%;
    }
    100% {
        margin-left: 0;
    }
`;

const Wrapper = styled.div`
  width: 100%;
  .slider {
    width: 300%;
    display: flex;
    animation: 3s ${slide};
    .slide {
      width: 100%;
      text-align: center;
    }
  }
`;
