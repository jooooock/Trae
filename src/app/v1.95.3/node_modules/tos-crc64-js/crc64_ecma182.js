'use strict';

const fs = require('fs');

const binding = require('./dist/crc');

const raw = {
  crc64: binding._crc64,
  combineCrc64: binding._combine_crc64,
  strToUint64Ptr: binding._str_to_uint64,
  uint64PtrToStr: binding._uint64_to_str,
};

binding._crc64_init();

function strToUint64Ptr(str) {
  const strPtr = binding._malloc(str.length + 1);
  binding.stringToUTF8(str, strPtr, str.length + 1);

  const uint64Ptr = binding._malloc(8);
  raw.strToUint64Ptr(strPtr, uint64Ptr);
  binding._free(strPtr);

  return uint64Ptr;
}

function uint64PtrToStr(uint64Ptr) {
  const strPtr = binding._malloc(32);
  raw.uint64PtrToStr(strPtr, uint64Ptr);
  const str = binding.UTF8ToString(strPtr);
  binding._free(strPtr);
  return str;
}

function isBuffer(v) { return typeof Buffer !== 'undefined' && Buffer.isBuffer(v); }

function buffToPtr(buff) {
  if (!isBuffer(buff)) {
    throw new Error('Invalid buffer type.');
  }

  const buffPtr = binding._malloc(buff.length);
  binding.writeArrayToMemory(buff, buffPtr);

  return buffPtr;
}

module.exports.crc64 = function(buff, prev) {
  if (!prev) prev = '0';
  if (typeof prev !== 'string' || !/\d+/.test(prev)) {
    throw new Error('Invlid previous value.');
  }

  const prevPtr = strToUint64Ptr(prev);
  const buffPtr = buffToPtr(buff);

  raw.crc64(prevPtr, buffPtr, buff.length);
  const ret = uint64PtrToStr(prevPtr);

  binding._free(prevPtr);
  binding._free(buffPtr);

  return ret;
};

/**
 * Calculate the CRC-64 of two sequential blocks
 * @param {string} crc1 the CRC-64 of the first block
 * @param {string} crc2 crc2 is the CRC-64 of the second block
 * @param {number} crc2BytesLen the length of the second block
 * @returns {string} the CRC-64 of two sequential blocks
 */
module.exports.combineCrc64 = function(crc1, crc2, crc2BytesLen) {
  if (
    typeof crc1 !== 'string' || !/\d+/.test(crc1) ||
    typeof crc2 !== 'string' || !/\d+/.test(crc2)
  ) {
    throw new Error('Invlid crc1 or crc2 value.');
  }
  const crc1Ptr = strToUint64Ptr(crc1);
  const crc2Ptr = strToUint64Ptr(crc2);
  raw.combineCrc64(crc1Ptr, crc2Ptr, crc2BytesLen);
  const retCrc = uint64PtrToStr(crc1Ptr);

  binding._free(crc1Ptr);
  binding._free(crc2Ptr);

  return retCrc;
};

module.exports.crc64File = function(filename, callback) {
  let errored = false;
  const stream = fs.createReadStream(filename);
  const crcPtr = strToUint64Ptr('0');
  let crcPtrFreed = false;
  stream.on('error', function(err) {
    errored = true;
    stream.destroy();
    if (!crcPtrFreed) {
      binding._free(crcPtr);
      crcPtrFreed = true;
    }
    return callback(err);
  });

  stream.on('data', function(chunk) {
    const buffPtr = buffToPtr(chunk);
    raw.crc64(crcPtr, buffPtr, chunk.length);
    binding._free(buffPtr);
  });
  stream.on('end', function() {
    if (errored) return;

    const ret = uint64PtrToStr(crcPtr);
    if (!crcPtrFreed) {
      binding._free(crcPtr);
      crcPtrFreed = true;
    }

    return callback(undefined, ret);
  });
};
