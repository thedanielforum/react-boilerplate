import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class AppWrapper extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default withRouter(AppWrapper);
