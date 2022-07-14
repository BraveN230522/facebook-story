import React from 'react';
import { Provider } from 'react-redux';
import { AppNavigation } from '@navigation/navigator';
import { PersistGate } from 'redux-persist/integration/react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

import * as eva from '@eva-design/eva';
import { persistor, store } from '@redux/store';
import { setGlobalNavigation } from '@utils/helper';
import { ApplicationProvider } from '@ui-kitten/components';

// import { store } from '@redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer
            ref={(ref: NavigationContainerRef<ReactNavigation.RootParamList>) =>
              setGlobalNavigation(ref)
            }>
            <AppNavigation />
          </NavigationContainer>
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
