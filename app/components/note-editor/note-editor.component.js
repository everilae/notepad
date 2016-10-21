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
    $onInit() {
      if (this.note == null)
        this.note = createNote();
      else
        // Shallow copy, or else the 1-way binding is actually
        // 2-way...
        this.note = Object.assign({}, this.note);
    }

    static factory() {
      return new NoteEditorController(...arguments);
    }
  }

  angular.
    module('noteEditor').
    component('noteEditor', {
      bindings: {
        'note': '<',
        'action': '<',
        'onSubmit': '&',
        'onCancel': '&'
      },
      templateUrl: 'components/note-editor/note-editor.template.html',
      controller: NoteEditorController.factory
    });
}());
