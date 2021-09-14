import s from "styled-components";
const Test = s.div.withConfig({
  displayName: "Test",
  componentId: "sc-y1yoj8-0"
})`width:100%;`;
const Test2 = true ? s.div.withConfig({
  displayName: "Test2",
  componentId: "sc-y1yoj8-1"
})`` : s.div.withConfig({
  displayName: "Test2",
  componentId: "sc-y1yoj8-2"
})``;
const styles = {
  One: s.div.withConfig({
    displayName: "One",
    componentId: "sc-y1yoj8-3"
  })``
};
let Component;
Component = s.div.withConfig({
  displayName: "Component",
  componentId: "sc-y1yoj8-4"
})``;
const WrappedComponent = s(Inner).withConfig({
  displayName: "WrappedComponent",
  componentId: "sc-y1yoj8-5"
})``;
