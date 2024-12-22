const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'rrRmVTrS#jyJx0L7IojIX-n0ZoA_y48v8djZqJCVItnTNGLj8Dwg',
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? 'pat_11BEXMDNA0vAVKYQXfREPc_6fNxfCUcfAwJAbNaqy5lrSPwhzGnGw1y1YmNsKVAFsrRASWDASYnndxegvS' : process.env.GITHUB_AUTH_TOKEN,
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'charukajalanidu-ofc' : process.env.GITHUB_USER_NAME,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94775228949' : process.env.OWNER_NUMBER
};
