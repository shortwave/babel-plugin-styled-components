import styled from "styled-components";
const Test = styled.div.withConfig({
  displayName: "code__Test",
  componentId: "sc-17m954u-0"
})`color:red;`;
const before = styled.div.withConfig({
  displayName: "code__before",
  componentId: "sc-17m954u-1"
})`color:blue;`;
styled.div.withConfig({
  displayName: "code",
  componentId: "sc-17m954u-2"
})``;
export default styled.button.withConfig({
  displayName: "code",
  componentId: "sc-17m954u-3"
})``;
