import nx from '@jswork/next';

const defaults = {
  isEmpty: (v) => typeof v === 'undefined'
};

nx.get2get = function (inTarget, inPaths, inValue, inOptions) {
  var res;
  var len = inPaths.length;
  var opts = nx.mix(null, defaults, inOptions);

  for (var i = 0; i < len; i++) {
    var path = inPaths[i];
    res = nx.get(inTarget, path);
    if (!opts.isEmpty(res)) return res;
    if (i === len - 1) return inValue;
  }
  return res;
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.get2get;
}

export default nx.get2get;
