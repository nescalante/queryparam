module.exports = function queryparam(name, url) {
  if (!url) {
    url = window.location.href;
  }

  var results = [];

  name = name.replace(/[\[\]]/g, "\\$&");

  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'g');
  var result;

  while (result = regex.exec(url)) {
    if (result[2]) {
      results.push(decodeURIComponent(result[2].replace(/\+/g, " ")));
    }
  }

  return results;
};
