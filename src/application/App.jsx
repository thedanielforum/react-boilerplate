import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import { isEmpty, toLower } from 'lodash';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSpinner,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import detectBrowserLanguage from 'detect-browser-language';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from '../services/store';
import Router from '../routes';
import config from '../config';
import translations from '../intl/translations.json';
import Loading from '../components/Loading';
import './App.scss';

const CloseButton = ({ closeToast }) => (
  <FontAwesomeIcon
    icon="times"
    onClick={closeToast}
  />
);

class App extends Component {
  constructor(props) {
    super(props);
    // Setup local state
    this.state = {
      initialized: false,
      locale: '',
    };

    // Setup redux store
    this.store = store();

    // Setup google analytics
    if (config.GOOGLE_ANALYTICS) {
      ReactGA.initialize(config.GOOGLE_ANALYTICS, {
        debug: process.env.NODE_ENV !== 'production',
      });

      // eslint-disable-next-line no-undef
      ReactGA.pageview(window.location.pathname + window.location.search);
    }

    // Setup internationalization
    addLocaleData([
      ...en,
    ]);

    // Add fontawesome icons
    library.add(faSpinner);
    library.add(faTimes);
  }

  componentDidMount() {
    this.setState({ initialized: true });
  }

  getLang = () => {
    const browserLang = detectBrowserLanguage().slice(0, 2);
    const { locale } = this.state;
    if (!isEmpty(locale)) {
      return toLower(locale);
    }
    // Check if browers lang is avalible
    // other wise fall back to en.
    if (isEmpty(config.AVAILABLE_LANGUAGES.filter(l => l === toLower(browserLang)))) {
      return config.AVAILABLE_LANGUAGES[0];
    }
    return toLower(browserLang);
  }

  render() {
    const lang = this.getLang();
    if (config.STAGE !== 'production') {
      console.log('current lang:', lang);
    }

    const { initialized } = this.state;

    return (
      <Provider store={this.store}>
        <IntlProvider
          locale={lang}
          messages={translations[lang] || {}}
        >
          <Fragment>
            {initialized ? (
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            ) : (
              <div style={{ width: '100%', height: '100vh' }}>
                <Loading size="5rem" />
              </div>
            )}
            <ToastContainer
              position={toast.POSITION.BOTTOM_LEFT}
              autoClose={3000}
              pauseOnFocusLoss={false}
              closeButton={<CloseButton />}
            />
          </Fragment>
        </IntlProvider>
      </Provider>
    );
  }
}

export default App;
