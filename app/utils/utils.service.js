'use strict';

angular.
  module('Utils').
  constant('utils', {
    URL(strings, ...params) {
      const result = [strings[0]];
      params.forEach((p, i) => {
        result.push(encodeURIComponent(p), strings[i + 1]);
      });
      return result.join('');
    }
  });
