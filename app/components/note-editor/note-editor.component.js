(function() {
  'use strict';

  function createNote() {
    const ts = new Date();
    ts.setSeconds(0);
    ts.setMilliseconds(0);

    return {
      title: '',
      timestamp: ts.toJSON(),
      text: ''
    };
  }

  class NoteEditorController {
    constructor($scope, $location, $localStorage, $routeParams) {
      this.noteId = $routeParams.noteId;

      if ($localStorage.noteList == null)
        $localStorage.noteList = [];

      this.noteList = $localStorage.noteList;

      if (this.noteId != null)
        this.note = this.noteList[this.noteId];
      else
        this.note = createNote();

      this.action = this.noteId != null ? 'Edit' : 'Add';
      this.$scope = $scope;
      this.$location = $location;
    }

    submit() {
      if (this.noteId == null)
        this.noteList.push(this.note);
      this.$scope.$evalAsync(() => this.$location.path('/main'));
    }
  }

  angular.
    module('noteEditor').
    component('noteEditor', {
      templateUrl: 'components/note-editor/note-editor.template.html',
      controller: [
        '$scope',
        '$location',
        '$localStorage',
        '$routeParams',
        NoteEditorController
      ]
    });
}());
