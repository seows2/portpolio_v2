import styled from "styled-components";
import { Container, flexCenter } from "../../styles/theme";

const Intro = () => {
  return (
    <Wrapper>
      <div className="text">
        <div className="text-content">스크롤에 따라</div>
        <div className="text-content second">움직이는</div>
        <div className="text-content third">글자들</div>
      </div>
      <CircleWrapper>
        <Circle />
      </CircleWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  .text {
    width: 100%;
    position: absolute;
    font-size: 1.2rem;
    white-space: nowrap;
    top: 20vh;

    & .second {
      position: absolute;
      top: 20vh;
      right: 20%;
    }
    & .third {
      position: absolute;
      left: 10%;
      top: 55vh;
    }
    &-content {
    }
  }
`;

const CircleWrapper = styled.div`
  ${flexCenter}
  width: 100%;
  height: 100vh;
`;

const Circle = styled.div`
  position: absolute;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.white};
`;

export default Intro;
