import store from 'app/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header';
import MobileHeader from 'components/MobileHeader';
import useWindowSize from 'hooks/useWindowSize';
import { Provider } from 'react-redux';
import '../styles/globals.css';
const MyApp = ({ Component, pageProps }) => {
  const { width } = useWindowSize();
  return (
    <Provider store={store}>
      {width > 768 ? <Header /> : <MobileHeader />}
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
};

export default MyApp;
