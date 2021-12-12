import styled from "styled-components";
import { flexCenter } from "../../styles/theme";

const Slider = () => {
  return <Wrapper>대충 텍스트 날라다니는 페이지</Wrapper>;
};

const Wrapper = styled.div`
  ${flexCenter};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
`;

export default Slider;
