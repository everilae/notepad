(function() {
  'use strict';

  class NoteListController {
    isImportant(note) {
      return (/important/i).test(note.title);
    }

    // Workaround for Firefox - AngularJS incompatibility with ES6 classes
    static factory() {
      return new NoteListController(...arguments);
    }
  }

  angular.
    module('noteList').
    component('noteList', {
      templateUrl: 'components/note-list/note-list.template.html',
      bindings: {
        orderBy: '@',
        noteList: '<',
        onRemove: '&',
        onEdit: '&'
      },
      controller: NoteListController.factory
    });
}());
