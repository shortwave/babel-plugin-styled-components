const styled_default = require("styled-components");

const TestNormal = styled.div.withConfig({
  displayName: "code__TestNormal",
  componentId: "sc-15i0xp0-0"
})(["width:100%;"]);
const Test = styled_default.default.div.withConfig({
  displayName: "code__Test",
  componentId: "sc-15i0xp0-1"
})(["width:100%;"]);
const TestCallExpression = styled_default.default(Test).withConfig({
  displayName: "code__TestCallExpression",
  componentId: "sc-15i0xp0-2"
})(["height:20px;"]);
