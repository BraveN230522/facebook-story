import React from 'react';
import { Provider } from 'react-redux';
import { AppNavigation } from '@navigation/navigator';
import { PersistGate } from 'redux-persist/integration/react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import { persistor, store } from '@redux/store';
import { setGlobalNavigation } from '@utils/helper';

// import { store } from '@redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer
          ref={(ref: NavigationContainerRef<ReactNavigation.RootParamList>) =>
            setGlobalNavigation(ref)
          }>
          <AppNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
