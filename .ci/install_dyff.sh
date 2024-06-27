#!/bin/bash
#
# Install Dyff on Ubuntu in GH Actions CI

DYFF_VERSION="1.8.0"
DYFF_SHA256="8d487f28177f44ae84a531057c1eded77b8074b0d0591c077e0ec5570b8bc7b7"

# Prepare folders
mkdir -p "${GITHUB_WORKSPACE}/_working/dl"
mkdir -p "${GITHUB_WORKSPACE}/_working/bin-dyff"

# Download binary from release
DYFF_DL_OUTPUT_FILE="${GITHUB_WORKSPACE}/_working/dl/dyff.tar.gz"
DYFF_RELEASE_DL_URL="https://github.com/homeport/dyff/releases/download/v${DYFF_VERSION}/dyff_${DYFF_VERSION}_linux_amd64.tar.gz"
curl -L --retry 3 -o "${DYFF_DL_OUTPUT_FILE}" "${DYFF_RELEASE_DL_URL}"

# Verify checksum
echo "${DYFF_SHA256} ${DYFF_DL_OUTPUT_FILE}" | sha256sum -c

# Unpack downloaded dyff
tar -zxf "${DYFF_DL_OUTPUT_FILE}" -C "${GITHUB_WORKSPACE}/_working/bin-dyff"

# Add path to system PATH env
echo "${GITHUB_WORKSPACE}/_working/bin-dyff" >> $GITHUB_PATH
