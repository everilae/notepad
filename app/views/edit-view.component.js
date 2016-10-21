'use strict';

angular.
  module('notePad.Views').
  component('editView', {
    template: `<note-editor
                 action="{{$ctrl.action}}"
                 note="$ctrl.note"
                 on-submit="$ctrl.save($note)"
                 on-cancel="$ctrl.cancel()" />`,
    controller: [
      '$scope',
      '$localStorage',
      '$location',
      '$routeParams',
      function($scope, $localStorage, $location, $routeParams) {
        const noteId = $routeParams.noteId;
        this.noteList = $localStorage.noteList;

        if (noteId == null)
          this.action = 'Add';
        else {
          this.action = 'Save';
          this.note = this.noteList[noteId];
        }

        this.cancel = () => { $location.path('/main'); };
        this.save = (note) => {
          if (noteId == null)
            this.noteList.push(note);
          else
            this.noteList[noteId] = note;
          $scope.$evalAsync(() => $location.path('/main'));
        };
      }
    ]
  });

