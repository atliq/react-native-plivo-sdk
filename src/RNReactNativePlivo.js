
import { NativeModules } from 'react-native';

const { PlivoSdk } = NativeModules;

const RNReactNativePlivo = PlivoSdk;

if (!RNReactNativePlivo && __DEV__) {
    console.warn("react-native-plivo module is not correctly linked")
}

export default RNReactNativePlivo;
