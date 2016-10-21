'use strict';

angular.
  module('notePad.Views').
  component('mainView', {
    template: `<note-list
                 order-by="-timestamp"
                 note-list="$ctrl.noteList"
                 on-remove="$ctrl.remove($note)"
                 on-edit="$ctrl.edit($note)"></note-list>`,
    controller: [
      '$localStorage',
      '$location',
      function($localStorage, $location) {
        this.noteList = $localStorage.noteList;
        this.remove = (note) => {
          if (confirm(`Remove "${note.title}"?`)) {
            const idx = this.noteList.indexOf(note);
            if (idx === -1)
              throw new Error('note to remove not in list');
            this.noteList.splice(idx, 1);
          }
        };
        this.edit = (note) => {
          const noteId = this.noteList.indexOf(note);
          $location.path(`/edit/${noteId}`);
        };
      }
    ]
  });
