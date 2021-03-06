// Export Swift code to ReactNative Objective-C land
// As documented in https://facebook.github.io/react-native/docs/native-modules-ios#exporting-swift
#import <React/RCTBridgeModule.h>
#import "React/RCTEventEmitter.h"


@interface RCT_EXTERN_MODULE(PlivoSdk, RCTEventEmitter)

RCT_EXTERN_METHOD(login:(nonnull NSString *)userName
                  password:(nonnull NSString *)password
                  token:(nonnull NSString *)token
                  certificateId:(nonnull NSString *)certificateId
                  )

RCT_EXTERN_METHOD(call:(nonnull NSString *)dest
                    headers:(NSDictionary *)headers
                  )

@end
