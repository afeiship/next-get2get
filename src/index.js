import nx from '@jswork/next';

nx.get2get = function (inTarget, inPaths, inValue) {
  var res;
  var len = inPaths.length;
  for (var i = 0; i < len; i++) {
    var path = inPaths[i];
    res = nx.get(inTarget, path);
    if (typeof res !== 'undefined') return res;
    if (i === len - 1) return inValue;
  }
  return res;
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = nx.get2get;
}

export default nx.get2get;
