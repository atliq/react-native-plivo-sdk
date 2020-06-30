//
//  PlivoSdk.swift
//  PlivoSdk
//
//  Created by Mahavir Vataliya on 29/06/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import PlivoVoiceKit


@objc(PlivoSdk)
class PlivoSdk: RCTEventEmitter {
    
    var hasListeners : Bool = false
    
    var endpoint: PlivoEndpoint = PlivoEndpoint(["debug": true])

    private var outCall: PlivoOutgoing?
        
    override init() {
        super.init()
        print("PlivoSdk ReactNativeEventEmitter init")
    }

    override static func requiresMainQueueSetup() -> Bool {
        return true
    }

    // we need to override this method and
    // return an array of event names that we can listen to
    override func supportedEvents() -> [String]! {
        return ["Plivo-onIncomingCall", "Plivo-onLogin", "Plivo-onLoginFailed", "Plivo-onLogout", "Plivo-onIncomingCallHangup", "Plivo-onIncomingCallRejected", "Plivo-onOutgoingCall", "Plivo-onOutgoingCallAnswered", "Plivo-onOutgoingCallRejected", "Plivo-onOutgoingCallHangup", "Plivo-onOutgoingCallInvalid" ]
    }
    
    override func startObserving() {
        print("PlivoSdk ReactNativeEventEmitter startObserving")
        
        hasListeners = true
        
        super.startObserving()
    }
    
    
    override func stopObserving() {
        print("PlivoSdk ReactNativeEventEmitter stopObserving")
        
        hasListeners = false
                
        super.stopObserving()
    }


    @objc(login:password:token:certificateId:)
    func login(
        withUserName userName: String,
        andPassword password: String,
        deviceToken token: String,
        certificateId certificateId: String
        )
        -> Void {
        let tokenData = Data(token.utf8)
        endpoint.login(userName, andPassword: password, deviceToken: tokenData, certificateId: certificateId)
    }

    @objc(call:headers:)
    func call(withDest dest: String, andHeaders headers: NSDictionary) -> PlivoOutgoing {

        let extraHeaders: [AnyHashable: Any] = [:]

        var error: NSError?

        // var error = NSError(domain: "com.cloint.app", code: 0, userInfo: [NSLocalizedDescriptionKey: "message"])

        /* construct SIP URI , where kENDPOINTURL is a contant contaning domain name details*/
        let sipUri: String = "sip:\(dest)\\phone.plivo.com"
        /* create PlivoOutgoing object */
        outCall = (endpoint.createOutgoingCall())!
        /* do the call */
        outCall?.call(sipUri, headers: extraHeaders, error: &error)
        return outCall!
    }
}
