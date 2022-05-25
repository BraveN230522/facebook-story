import { useState, useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';

const APP_STATE_STATUS = {
    ACTIVE: 'active',
    BACKGROUND: 'background',
    INACTIVE: 'inactive',
};

type SettingsProps = {
    onChange?: (appState: AppStateStatus) => void;
    onForeground?: () => void;
    onBackground?: () => void;
};

export default function useAppState(settings: SettingsProps = {}) {
    const { onChange, onForeground, onBackground } = settings || {};
    const [appState, setAppState] = useState<AppStateStatus>(
        AppState.currentState,
    );

    useEffect(() => {
        function handleAppStateChange(nextAppState: AppStateStatus) {
            if (
                nextAppState === APP_STATE_STATUS.ACTIVE &&
                appState !== APP_STATE_STATUS.ACTIVE
            ) {
                isValidFunction(onForeground) && onForeground();
            } else if (
                appState === APP_STATE_STATUS.ACTIVE &&
                nextAppState.match(/inactive|background/)
            ) {
                isValidFunction(onBackground) && onBackground();
            }
            setAppState(nextAppState);
            isValidFunction(onChange) && onChange(nextAppState);
        }
        const appStateEvent: any = AppState.addEventListener(
            'change',
            handleAppStateChange,
        );

        return () => appStateEvent?.remove();
    }, [onChange, onForeground, onBackground, appState]);

    // settings validation
    function isValidFunction(func: any) {
        return func && typeof func === 'function';
    }
    return { appState };
}
