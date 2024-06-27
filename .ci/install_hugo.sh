#!/bin/bash
#
# Install Hugo and dependencies on Ubuntu in GH Actions CI

WZ_HUGO_VERSION="0.128.0"
WZ_HUGO_SHA256="a39cd72eff188f8596f09f3a7db9195477c4ce21072d286832f9fde15ba5d336"

DEBIAN_FRONTEND=noninteractive sudo apt-get -u update \
  && sudo apt-get -y install git golang-go

sudo snap install dart-sass

# Prepare folders
mkdir -p "${GITHUB_WORKSPACE}/_working/dl"
mkdir -p "${GITHUB_WORKSPACE}/_working/bin"

# Download binary from release
HUGO_DL_OUTPUT_FILE="${GITHUB_WORKSPACE}/_working/dl/hugo_extended.tar.gz"
HUGO_RELEASE_DL_URL="https://github.com/gohugoio/hugo/releases/download/v${WZ_HUGO_VERSION}/hugo_extended_${WZ_HUGO_VERSION}_Linux-64bit.tar.gz"
curl -L --retry 3 -o "${HUGO_DL_OUTPUT_FILE}" "${HUGO_RELEASE_DL_URL}"

# Verify checksum
echo "${WZ_HUGO_SHA256} ${HUGO_DL_OUTPUT_FILE}" | sha256sum -c

# Unpack downloaded hugo
tar -zxf "${HUGO_DL_OUTPUT_FILE}" -C "${GITHUB_WORKSPACE}/_working/bin"

# Verify executable
"${GITHUB_WORKSPACE}/_working/bin/hugo" version

# Add path to system PATH env
echo "${GITHUB_WORKSPACE}/_working/bin" >> $GITHUB_PATH
