import styled from 'styled-components';
const Test = styled.div.withConfig({
  componentId: "sc-nhmlv2-0"
})`width:100%;`;
const Test2 = true ? styled.div.withConfig({
  componentId: "sc-nhmlv2-1"
})`` : styled.div.withConfig({
  componentId: "sc-nhmlv2-2"
})``;
const styles = {
  One: styled.div.withConfig({
    componentId: "sc-nhmlv2-3"
  })``
};
let Component;
Component = styled.div.withConfig({
  componentId: "sc-nhmlv2-4"
})``;
const WrappedComponent = styled(Inner).withConfig({
  componentId: "sc-nhmlv2-5"
})``;
