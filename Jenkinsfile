CODE_SIGN_PROFILE_ID = params?.BUILD_CREDENTIAL_ID?.trim()
BUILD_CONFIG = "Debug"

PROJECT_NAME = "HelloWorld"
INFO_PLIST = "HelloWorld/Info.plist"
VERSION = "1.0.0"
SHORT_VERSION = "1.0"
BUNDLE_ID = "org.jhellar.HelloWorld"
OUTPUT_FILE_NAME="${PROJECT_NAME}-${BUILD_CONFIG}.ipa"
SDK = "iphoneos"

XC_VERSION = ""

CLEAN = true

node('ios') {
  stage('Checkout') {
    checkout scm
  }

  stage('Build') {
    withEnv(["XC_VERSION=${XC_VERSION}"]) {
      xcodeBuild(
        cleanBeforeBuild: CLEAN,
        src: './',
        schema: "${PROJECT_NAME}",
        buildDir: "build",
        sdk: "${SDK}",
        version: "${VERSION}",
        shortVersion: "${SHORT_VERSION}",
        bundleId: "${BUNDLE_ID}",
        infoPlistPath: "${INFO_PLIST}",
        xcodeBuildArgs: 'ENABLE_BITCODE=NO OTHER_CFLAGS="-fstack-protector -fstack-protector-all"',
        autoSign: false,
        config: "${BUILD_CONFIG}"
      )
    }
  }

  stage('CodeSign') {
    codeSign(
      profileId: "${CODE_SIGN_PROFILE_ID}",
      clean: CLEAN,
      verify: true,
      ipaName: "${OUTPUT_FILE_NAME}",
      appPath: "build/${BUILD_CONFIG}-${SDK}/${PROJECT_NAME}.app"
    )
  }

  stage('Archive') {
    archiveArtifacts "build/${BUILD_CONFIG}-${SDK}/${OUTPUT_FILE_NAME}"
    stash name: 'ipa', includes: "build/${BUILD_CONFIG}-${SDK}/${OUTPUT_FILE_NAME}"
  }
}
