'use strict';

describe('noteList', function() {

  beforeEach(module('noteList'));

  describe('NoteListController', function () {
    let ctrl;

    beforeEach(inject(function($componentController) {
      ctrl = $componentController('noteList');
    }));

    it(`should use the existing \`$localStorage.noteList\``,
      inject(function($localStorage) {
        expect(ctrl.noteList).toEqual($localStorage.noteList);
      })
    );

});
