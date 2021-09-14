import { styled } from '@example/example';
const Test = styled.div.withConfig({
  displayName: "Test",
  componentId: "sc-5o3oel-0"
})`width:100%;`;
const Test2 = true ? styled.div.withConfig({
  displayName: "Test2",
  componentId: "sc-5o3oel-1"
})`` : styled.div.withConfig({
  displayName: "Test2",
  componentId: "sc-5o3oel-2"
})``;
const styles = {
  One: styled.div.withConfig({
    displayName: "One",
    componentId: "sc-5o3oel-3"
  })``
};
let Component;
Component = styled.div.withConfig({
  displayName: "Component",
  componentId: "sc-5o3oel-4"
})``;
const WrappedComponent = styled(Inner).withConfig({
  displayName: "WrappedComponent",
  componentId: "sc-5o3oel-5"
})``;
