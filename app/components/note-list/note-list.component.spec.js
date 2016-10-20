'use strict';

describe('noteList', function() {

  beforeEach(module('noteList'));

  describe('NoteListController', function () {
    let ctrl;

    beforeEach(inject(function($componentController) {
      ctrl = $componentController('noteList');
    }));

    it('should create a `notes` array property', function() {
      expect(ctrl.notes).toEqual([]);
    });

});
