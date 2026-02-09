#!/usr/bin/env bash
set -euo pipefail

COLLECTION=${1:-collections/users.postman_collection.json}
ENVIRONMENT=${2:-environments/dev.postman_environment.json}
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

mkdir -p newman/reports

newman run "$COLLECTION"   -e "$ENVIRONMENT"   --reporters cli,htmlextra,junit   --reporter-htmlextra-export "newman/reports/report_$TIMESTAMP.html"   --reporter-junit-export "newman/reports/junit_$TIMESTAMP.xml"   --timeout-request 10000