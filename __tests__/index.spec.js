(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.get2get should get v3', function () {
      var e1 = { target: { value: '121' } };
      var e2 = { detail: { value: '122' } };
      var e3 = 123;
      var paths = ['target.value', 'detail.value'];

      var res1 = nx.get2get(e1, paths, 'event-value');
      var res2 = nx.get2get(e2, paths, 'event-value');
      var res3 = nx.get2get(e3, paths, 'event-value');

      var formValue = function (e) {
        return nx.get2get(e, paths, e);
      };

      expect(res1).toBe('121');
      expect(res2).toBe('122');
      expect(res3).toBe('event-value');

      expect(formValue(e1)).toBe('121');
      expect(formValue(e2)).toBe('122');
      expect(formValue(e3)).toBe(123);
    });
  });
})();
