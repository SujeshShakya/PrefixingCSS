// import "./test1.css";
import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const theme = {
  main: "mediumseagreen",
};

const Div = styled.div`
  height: 100px;
  background: pink;
`;
export default function Root(props) {
  return (
    <section>
      {/* <StyleProvider scope="microfe-1" theme={theme}> */}
      {/* <Wrapper>
        <Title>{props.name} is mounted!</Title>
      </Wrapper> */}
      <Div>This is a Style Component page</Div>
      {/* </StyleProvider> */}
    </section>
  );
}
