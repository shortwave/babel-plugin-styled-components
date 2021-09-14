import styled from '@xstyled/styled-components';
const Test = styled.div.withConfig({
  componentId: "sc-1ln3xji-0"
})`width:100%;`;
const Test2 = true ? styled.div.withConfig({
  componentId: "sc-1ln3xji-1"
})`` : styled.div.withConfig({
  componentId: "sc-1ln3xji-2"
})``;
const styles = {
  One: styled.div.withConfig({
    componentId: "sc-1ln3xji-3"
  })``
};
let Component;
Component = styled.div.withConfig({
  componentId: "sc-1ln3xji-4"
})``;
const WrappedComponent = styled(Inner).withConfig({
  componentId: "sc-1ln3xji-5"
})``;
