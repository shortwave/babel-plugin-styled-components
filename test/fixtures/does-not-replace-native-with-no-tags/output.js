const styled_default = require('styled-components/native');

const TestNormal = styled.div.withConfig({
  displayName: "code__TestNormal",
  componentId: "sc-okba6c-0"
})(["width:100%;"]);
const Test = styled_default.default.div.withConfig({
  displayName: "code__Test",
  componentId: "sc-okba6c-1"
})(["width:100%;"]);
const TestCallExpression = styled_default.default(Test).withConfig({
  displayName: "code__TestCallExpression",
  componentId: "sc-okba6c-2"
})(["height:20px;"]);
