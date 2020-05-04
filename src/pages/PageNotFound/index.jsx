import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Code = styled.h1`
  text-align: center;
  font-size: 6rem;
`;

const Message = styled.p`
  text-align: center;
`;

class PageNotFound extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col md={{ size: 6, offset: 3 }}>
            <div className="d-flex flex-column align-items-center">
              <Code>
                <FormattedMessage id="Pages.PageNotFound.404" />
              </Code>
              <Message>
                <FormattedMessage id="Pages.PageNotFound.Title" />
              </Message>
              <Link to="/" className="btn btn-primary btn-sm">
                <FormattedMessage id="Pages.PageNotFound.BackHomeLink" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PageNotFound;
