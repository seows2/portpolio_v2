import { useEffect, useState } from "react";
import styled from "styled-components";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Slider from "./components/Slider";
import { flexCenter } from "./styles/theme";

function App() {
  const [slider, setSlider] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSlider(false);
    }, 2500);
  }, []);

  return (
    <AppContainer>
      {slider ? (
        <Slider />
      ) : (
        <div className="App">
          <Main />
          <Intro />
        </div>
      )}
    </AppContainer>
  );
}

const AppContainer = styled.div`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  .wrapper {
    ${flexCenter};
    flex-direction: column;
  }
`;

export default App;
