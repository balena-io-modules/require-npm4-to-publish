#!/usr/bin/env node
'use strict'
var inPublish = require('in-publish').inPublish

if (!inPublish()) {
	process.exit(0)
}

var semver = require('semver')
var execSync = require('child_process').execSync
var npmVersion = execSync('npm --version').toString()

if (semver.gte(npmVersion, '4.0.0')) {
	process.exit(0)
}
process.exit(1)
