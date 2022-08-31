#!/usr/bin/env node
const assert = require('assert');
const Ajv = require('ajv');
const ajv = new Ajv(); 
const validate = ajv.compile({
    type: 'string',
    maxLength: 24,
});

const testStr = "מענה אנושי👨🏼‍🦰 👱🏽‍♀️";

// String have length == 25
assert.equal(testStr.length, 25);

const valid = validate(testStr);
if(valid){
    console.log('VALID');
} else {
    console.log('INVALID');
}

