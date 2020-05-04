import React, { Component } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

// You can remove the code below if you don'w want a "sticky" footer.
const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  min-height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
`;

class Footer extends Component {
  getYear = () => new Date().getFullYear();

  render() {
    return (
      <FooterContainer>
        <Container>
          <span className="text-muted">
            Copyright thedanielforum &nbsp;
            {this.getYear()}
            &nbsp;
          </span>
          <span className="text-muted float-sm-right">Place footer content here.</span>
        </Container>
      </FooterContainer>
    );
  }
}

export default Footer;
