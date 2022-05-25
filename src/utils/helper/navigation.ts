import {
  CommonActions,
  NavigationContainerRef,
} from '@react-navigation/native';

let _navigation: NavigationContainerRef<ReactNavigation.RootParamList>; // eslint-disable-line

export function setGlobalNavigation(
  navigationRef: NavigationContainerRef<ReactNavigation.RootParamList>,
) {
  _navigation = navigationRef;
}

export function navigate(routeName: string, params?: object) {
  _navigation.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}

export function goBack() {
  if (_navigation.canGoBack()) {
    _navigation.dispatch(CommonActions.goBack());
  }
}
