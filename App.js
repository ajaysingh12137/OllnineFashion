import React, {useEffect} from 'react';
import Auth from './src/navigations/Routes/Auth';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  return <Auth />;
};

export default App;
