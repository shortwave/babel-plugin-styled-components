import styled from 'styled-components';
const Test = styled.div.withConfig({
  displayName: "Test",
  componentId: "sc-1ew6wx8-0"
})`width:100%;`;
const Test2 = true ? styled.div.withConfig({
  displayName: "Test2",
  componentId: "sc-1ew6wx8-1"
})`` : styled.div.withConfig({
  displayName: "Test2",
  componentId: "sc-1ew6wx8-2"
})``;
const styles = {
  One: styled.div.withConfig({
    displayName: "One",
    componentId: "sc-1ew6wx8-3"
  })``
};
let Component;
Component = styled.div.withConfig({
  displayName: "Component",
  componentId: "sc-1ew6wx8-4"
})``;
const WrappedComponent = styled(Inner).withConfig({
  displayName: "WrappedComponent",
  componentId: "sc-1ew6wx8-5"
})``;
const WrappedComponent2 = styled.div.withConfig({
  displayName: "WrappedComponent2",
  componentId: "sc-1ew6wx8-6"
})({});
const WrappedComponent3 = styled(Inner).withConfig({
  displayName: "WrappedComponent3",
  componentId: "sc-1ew6wx8-7"
})({});
const WrappedComponent4 = styled(Inner).attrs(() => ({
  something: 'else'
})).withConfig({
  displayName: "WrappedComponent4",
  componentId: "sc-1ew6wx8-8"
})({});
const WrappedComponent5 = styled.div.attrs(() => ({
  something: 'else'
})).withConfig({
  displayName: "WrappedComponent5",
  componentId: "sc-1ew6wx8-9"
})({});
const WrappedComponent6 = styled.div.attrs(() => ({
  something: 'else'
})).withConfig({
  displayName: "WrappedComponent6",
  componentId: "sc-1ew6wx8-10"
})``;
const WrappedComponent7 = styled.div.withConfig({
  shouldForwardProp: () => {},
  displayName: "WrappedComponent7",
  componentId: "sc-1ew6wx8-11"
})({});
const WrappedComponent8 = styled.div.withConfig({
  shouldForwardProp: () => {},
  displayName: "WrappedComponent8",
  componentId: "sc-1ew6wx8-12"
}).attrs(() => ({
  something: 'else'
}))({});
const WrappedComponent9 = styled.div.attrs(() => ({
  something: 'else'
})).withConfig({
  shouldForwardProp: () => {},
  displayName: "WrappedComponent9",
  componentId: "sc-1ew6wx8-13"
})({});
