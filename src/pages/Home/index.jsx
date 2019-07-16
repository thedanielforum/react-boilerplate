import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  margin-top: 3rem;
`;

const By = styled.a`
  text-align: center;
  margin-top: 1rem;
`;

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <div className="d-flex flex-column justify-content-center align-items mt-5">
              <Title>
                <FormattedMessage id="Pages.Home.Title" />
              </Title>
              <By
                href="https://github.com/thedanielforum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage
                  id="Pages.Home.By"
                  values={{
                    who: 'thedanielforum',
                  }}
                />
              </By>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
