(function() {
  'use strict';

  class NoteListController {
    constructor($localStorage) {
      this.orderBy = '-timestamp';
      this.noteList = $localStorage.noteList;
    }

    remove(note) {
      if (confirm('Remove?')) {
        const idx = this.noteList.indexOf(note);
        if (idx === -1)
          throw new Error('note to remove not in list');
        this.noteList.splice(idx, 1);
      }
    }

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
      controller: ['$localStorage', NoteListController.factory]
    });
}());
