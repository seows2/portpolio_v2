import styled from "styled-components";
import { Container } from "../../styles/theme";
import Info from "./Info";
import TextSlider from "./TextSlider";

const Main = () => {
  return (
    <Wrapper>
      <TextSlider />
      <Info />
    </Wrapper>
  );
};

const Wrapper = styled(Container)``;

export default Main;
