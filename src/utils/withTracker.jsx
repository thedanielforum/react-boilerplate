import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleAnalytics from 'react-ga';
import CONFIG from '../config';

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = (page) => {
    if (CONFIG.GOOGLE_ANALYTICS) {
      GoogleAnalytics.set({
        page,
        ...options,
      });
      GoogleAnalytics.pageview(page);
    }
  };

  const HOC = class extends Component {
    static propTypes = {
      location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
      }).isRequired,
    }

    componentDidMount() {
      const { location: { pathname } } = this.props;
      const page = pathname;
      trackPage(page);
    }

    componentWillReceiveProps(nextProps) {
      const { location: { pathname } } = this.props;
      const currentPage = pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

export default withTracker;
