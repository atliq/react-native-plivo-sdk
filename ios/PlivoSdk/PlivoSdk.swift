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
class PlivoSdk: NSObject {

    var endpoint: PlivoEndpoint = PlivoEndpoint(["debug": true])
    private var outCall: PlivoOutgoing?

    @objc static func requiresMainQueueSetup() -> Bool {
        return false
    }


    // To register with SIP Server using device token
    @objc(login:userName:password:token:certificateId:resolver:rejecter:)
    func login(withUserName userName: String,
                andPassword password: String,
                deviceToken token: Data) {
        endpoint.login(userName, andPassword: password, deviceToken: token)
    }

    @objc(login:userName:password:token:certificateId:)
    func login(
        withUserName userName: String,
        andPassword password: String,
        deviceToken token: String,
        certificateId certificateId: String
        )
        -> Void {
        if let endpoint = endpoint {
            let tokenData = Data(token.utf8)
            endpoint.login(userName, andPassword: password, deviceToken: tokenData, certificateId: certificateId)
        }
    }
}
