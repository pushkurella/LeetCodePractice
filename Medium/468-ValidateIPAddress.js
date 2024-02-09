/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
  if (queryIP.length < 7 || queryIP.length > 38) {
    return "Neither";
  }
  function ValidateIPV4(ip) {
    const ipArray = ip.split(".");
    if (ipArray.length != 4) return false;
    for (let i = 0; i < ipArray.length; i++) {
      let strRegex = new RegExp(/^[0-9]+$/i);
      if (!strRegex.test(ipArray[i])) {
        return false;
      }
      //   if (ipArray[i].startsWith("0") && ipArray[i].length > 1) {
      //     return false;
      //   }
      let num = Number(ipArray[i]);
      if (num != ipArray[i]) {
        return false;
      }
      if (num < 0 || num > 255) {
        return false;
      }
    }
    return true;
  }
  function ValidateIPV6(ip) {
    const ipArray = ip.split(":");
    if (ipArray.length != 8) return false;
    for (let i = 0; i < ipArray.length; i++) {
      let strRegex = new RegExp(/^[a-fA-F0-9]+$/i);
      if (!strRegex.test(ipArray[i])) {
        return false;
      }
      if (ipArray[i].length < 1 || ipArray[i].length > 4) {
        return false;
      }
    }
    return true;
  }
  if (ValidateIPV4(queryIP) && queryIP.length < 16) {
    return "IPv4";
  } else if (ValidateIPV6(queryIP)) {
    return "IPv6";
  }
  return "Neither";
};
// let strRegex = new RegExp(/^[a-f0-9]+$/);
// console.log(strRegex.test("abcdAef3423"));
console.log("01", parseInt("01"), Number("01"), "01" !== Number("01"));
