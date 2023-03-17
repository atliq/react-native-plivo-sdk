import RNReactNativePlivo from "./RNReactNativePlivo";
import { SharedEventEmitter } from './events';
import Incoming from "react-native-plivo-sdk/src/Incoming";
import Outgoing from "react-native-plivo-sdk/src/Outgoing";

class EndPoint {
  _isLoggedIn = false;
  constructor() {
    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onIncomingCall',
      (event) => {
        SharedEventEmitter.emit(
          'onIncomingCall',
          new Incoming(event.callUUID)
        );
      }
    );

   //

    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onIncomingCallHangup',
      (event) => {
        SharedEventEmitter.emit(
          'onIncomingCallHangup',
          new Incoming(event.callUUID)
        );
      }
    );
    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onIncomingCallRejected',
      (event) => {
        SharedEventEmitter.emit(
          'onIncomingCallRejected',
          new Incoming(event.callUUID)
        );
      }
    );
    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onOutgoingCall',
      (event) => {
        SharedEventEmitter.emit(
          'onOutgoingCall',
          new Outgoing(event.callUUID)
        );
      }
    );
    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onOutgoingCallAnswered',
      (event) => {
        SharedEventEmitter.emit(
          'onOutgoingCallAnswered',
          new Outgoing(event.callUUID)
        );
      }
    );
    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onOutgoingCallRejected',
      (event) => {
        SharedEventEmitter.emit(
          'onOutgoingCallRejected',
          new Outgoing(event.callUUID)
        );
      }
    );
    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onOutgoingCallHangup',
      (event) => {
        SharedEventEmitter.emit(
          'onOutgoingCallHangup',
          new Outgoing(event.callUUID)
        );
      }
    );
    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onOutgoingCallInvalid',
      (event) => {
        SharedEventEmitter.emit(
          'onOutgoingCallInvalid',
          new Outgoing(event.callUUID)
        );
      }
    );


    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onLogin',
      (event) => {
        SharedEventEmitter.emit(
          'onLogin'
        );
      }
    );
    SharedEventEmitter.addListener(
      // sub to internal native event - this fans out to
      // public event name: onNotificationDisplayed
      'Plivo-onLoginFailed',
      (event) => {
        SharedEventEmitter.emit(
          'onLoginFailed'
        );
      }
    );
  }

  call(phoneNumber) {
    RNReactNativePlivo.call(phoneNumber);
  }

  callH(phoneNumber, headers) {
    RNReactNativePlivo.callH(phoneNumber, headers);
  }

  login(username, password, fcmToken, certificateId) {
    // fcmToken will be device token in case of iOS
    RNReactNativePlivo.login(username, password, fcmToken, certificateId);

  }
  logout() {
    RNReactNativePlivo.logout();
    this._isLoggedIn = false;
  }


  get getCallUUID() {

  }

  get getLastCallUUID() {
    return 'kwehfiweh'
  }

  setLoggedIn() {
    this._isLoggedIn = true;
  }

  isLoggedIn() {
    return this._isLoggedIn;
  }

  onIncomingCall(listener) {
    if (typeof listener !== "function") {
      throw new Error("onIncomingCall require a function");
    }
   const onIncomingCallListener = SharedEventEmitter.addListener('onIncomingCall', listener);
    return () => onIncomingCallListener.remove();
  }

  onLogin(listener) {
    if (typeof listener !== "function") {
      throw new Error("onLogin require a function");
    }
    const onLoginListener = SharedEventEmitter.addListener('onLogin', listener);
    return () => onLoginListener.remove();
  }

  onLoginFailed(listener) {
    if (typeof listener !== "function") {
      throw new Error("onLoginFailed require a function");
    }
    const onLoginFailedListener = SharedEventEmitter.addListener('onLoginFailed', listener);
    return () => onLoginFailedListener.remove();
  }
  onIncomingCallHangup(listener) {
    if (typeof listener !== "function") {
      throw new Error("onIncomingCallHangup require a function");
    }
    SharedEventEmitter.addListener('onIncomingCallHangup', listener);
    return () => SharedEventEmitter.remove('onIncomingCallHangup', listener);
  }
  onIncomingCallRejected(listener) {
    if (typeof listener !== "function") {
      throw new Error("onIncomingCallRejected require a function");
    }
    const onIncomingCallRejectedListener = SharedEventEmitter.addListener('onIncomingCallRejected', listener);
    return () => onIncomingCallRejectedListener.remove();
  }
  onOutgoingCall(listener) {
    if (typeof listener !== "function") {
      throw new Error("onOutgoingCall require a function");
    }
    const onOutgoingCallListener = SharedEventEmitter.addListener('onOutgoingCall', listener);
    return () => onOutgoingCallListener.remove();
  }
  onOutgoingCallAnswered(listener) {
    if (typeof listener !== "function") {
      throw new Error("onOutgoingCallAnswered require a function");
    }
    const onOutgoingCallAnsweredListener = SharedEventEmitter.addListener('onOutgoingCallAnswered', listener);
    return () => onOutgoingCallAnsweredListener.remove();
  }
  onOutgoingCallRejected(listener) {
    if (typeof listener !== "function") {
      throw new Error("onOutgoingCallRejected require a function");
    }
    const onOutgoingCallRejectedListener = SharedEventEmitter.addListener('onOutgoingCallRejected', listener);
    return () => onOutgoingCallRejectedListener.remove();
  }
  onOutgoingCallHangup(listener) {
    if (typeof listener !== "function") {
      throw new Error("onOutgoingCallHangup require a function");
    }
    const onOutgoingCallHangupListener = SharedEventEmitter.addListener('onOutgoingCallHangup', listener);
    return () => onOutgoingCallHangupListener.remove();
  }
  onOutgoingCallInvalid(listener) {
    if (typeof listener !== "function") {
      throw new Error("onOutgoingCallInvalid require a function");
    }
   const onOutgoingCallInvalidListener = SharedEventEmitter.addListener('onOutgoingCallInvalid', listener);
    return () => onOutgoingCallInvalidListener.remove();
  }

}

export default EndPoint;
