import * as styled from 'styled-components';
const css = styled.css`
  background: black;
`;
const GlobalStyle = styled.createGlobalStyle`
  html {
    background: black;
  }
`;
const Test = styled.default.div.withConfig({
  displayName: "code__Test",
  componentId: "test-namespace__sc-1u8bh2n-0"
})(["color:red;"]);
const before = styled.default.div.withConfig({
  displayName: "code__before",
  componentId: "test-namespace__sc-1u8bh2n-1"
})(["color:blue;"]);
styled.default.div.withConfig({
  displayName: "code",
  componentId: "test-namespace__sc-1u8bh2n-2"
})([""]);
export default styled.default.button.withConfig({
  displayName: "code",
  componentId: "test-namespace__sc-1u8bh2n-3"
})([""]);
