const url = require('url');
const address = 'https://leetcode.com/problems/avoid-flood-in-the-city/description/?envType=daily-question&envId=2025-10-07';
const parsedUrl = url.parse(address, true);
console.log('Host Name:', parsedUrl.host);
console.log('Path Name:', parsedUrl.pathname);
console.log('Query Parameters:', parsedUrl.query);


