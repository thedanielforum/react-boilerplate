import React, { useEffect } from "react";
import GoogleAnalytics from "react-ga";
import CONFIG from "../config";

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

  const HOC = (props) => {
    const {
      location: { pathname },
    } = props;

    useEffect(() => {
      trackPage(pathname);
    }, [pathname]);

    return <WrappedComponent {...props} />;
  };

  return HOC;
};

export default withTracker;
