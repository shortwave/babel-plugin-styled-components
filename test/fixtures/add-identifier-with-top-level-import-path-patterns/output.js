import styled from '../../forked/qux-bar/styled';
const Test = styled.div.withConfig({
  componentId: "sc-1ruwady-0"
})`width:100%;`;
const Test2 = true ? styled.div.withConfig({
  componentId: "sc-1ruwady-1"
})`` : styled.div.withConfig({
  componentId: "sc-1ruwady-2"
})``;
const styles = {
  One: styled.div.withConfig({
    componentId: "sc-1ruwady-3"
  })``
};
let Component;
Component = styled.div.withConfig({
  componentId: "sc-1ruwady-4"
})``;
const WrappedComponent = styled(Inner).withConfig({
  componentId: "sc-1ruwady-5"
})``;
