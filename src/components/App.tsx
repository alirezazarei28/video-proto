import { Provider } from "react-redux";
import { store } from "../state";
import VideosDisplay from "./VideosDisplay";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  background-color: #f1f1f1;
  padding: 20px;
`;

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <h1>{"Saba Idea Interview Task"}</h1>
        <VideosDisplay />
      </Container>
    </Provider>
  );
};

export default App;
