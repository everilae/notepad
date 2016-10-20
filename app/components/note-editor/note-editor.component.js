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
      // FIXME: the editor should know nothing about lists
      this.noteList = $localStorage.noteList;

      if (this.noteId == null)
        this.note = createNote();
      else
        this.note = Object.assign({}, this.noteList[this.noteId]);

      this.action = this.noteId == null ? 'Add' : 'Edit';
      this.$scope = $scope;
      this.$location = $location;
    }

    submit() {
      if (this.noteId == null)
        this.noteList.push(this.note);
      else
        this.noteList[this.noteId] = this.note;

      this.$scope.$evalAsync(() => this.$location.path('/main'));
    }

    static factory() {
      return new NoteEditorController(...arguments);
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
        NoteEditorController.factory
      ]
    });
}());
