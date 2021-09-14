import { styled } from '@example/styled-components/native';
const Test = styled.div.withConfig({
  displayName: "Test",
  componentId: "sc-ocd537-0"
})`width:100%;`;
const Test2 = true ? styled.div.withConfig({
  displayName: "Test2",
  componentId: "sc-ocd537-1"
})`` : styled.div.withConfig({
  displayName: "Test2",
  componentId: "sc-ocd537-2"
})``;
const styles = {
  One: styled.div.withConfig({
    displayName: "One",
    componentId: "sc-ocd537-3"
  })``
};
let Component;
Component = styled.div.withConfig({
  displayName: "Component",
  componentId: "sc-ocd537-4"
})``;
const WrappedComponent = styled(Inner).withConfig({
  displayName: "WrappedComponent",
  componentId: "sc-ocd537-5"
})``;
