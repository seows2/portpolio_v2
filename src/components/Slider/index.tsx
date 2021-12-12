import styled from "styled-components";
import { flexCenter } from "../../styles/theme";
import TextSlider from "./TextSlider";

const Slider = () => {
  return (
    <Wrapper>
      <TextSlider />
    </Wrapper>
  );
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
