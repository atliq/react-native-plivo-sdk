require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "react-native-plivo-sdk"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  react-native-plivo-sdk
                   DESC
  s.homepage     = "https://github.com/atliq/react-native-plivo-sdk"
  # brief license entry:
  s.license      = "MIT"
  # optional - use expanded license entry instead:
  # s.license    = { :type => "MIT", :file => "LICENSE" }
  s.authors      = { "Mahavir" => "mahavir.vataliya110@gmail.com" }
  s.platforms    = { :ios => "10.0" }
  s.swift_version = '5.0'
  s.source       = { :git => "https://github.com/atliq/react-native-plivo-sdk.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,c,m,swift}"
  s.requires_arc = true

  s.dependency "React"
  s.dependency "PlivoVoiceKit", '~> 2.1'
  # ...
  # s.dependency "..."
end

