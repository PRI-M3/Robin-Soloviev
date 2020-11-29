// @ts-check
'use strict';

process.chdir(__dirname);
require('ts-node').register({ transpileOnly: true });

// Utils
const { logError } = require('./utils/log');

const bot = require('./bot');

