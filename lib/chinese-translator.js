'use babel'

import * as opencc from 'node-opencc'
import RangeFinder from './range-finder'

export default {
  disposables: null,

  activate (state) {
    this.disposables = atom.commands.add('atom-text-editor:not([mini])', {
      'chinese-translator:traditional-chinese-to-simplified-chinese' () {
        translate(atom.workspace.getActiveTextEditor(), 'traditionalToSimplified')
      },
      'chinese-translator:traditional-chinese-to-taiwan-standard' () {
        translate(atom.workspace.getActiveTextEditor(), 'traditionalToTaiwan')
      },
      'chinese-translator:traditional-chinese-to-hong-kong-standard' () {
        translate(atom.workspace.getActiveTextEditor(), 'traditionalToHongKong')
      },
      'chinese-translator:simplified-chinese-to-traditional-chinese' () {
        translate(atom.workspace.getActiveTextEditor(), 'simplifiedToTraditional')
      },
      'chinese-translator:simplified-chinese-to-taiwan-standard' () {
        translate(atom.workspace.getActiveTextEditor(), 'simplifiedToTaiwan')
      },
      'chinese-translator:simplified-chinese-to-taiwan-standard-with-phrases' () {
        translate(atom.workspace.getActiveTextEditor(), 'simplifiedToTaiwanWithPhrases')
      },
      'chinese-translator:simplified-chinese-to-hong-kong-standard' () {
        translate(atom.workspace.getActiveTextEditor(), 'simplifiedToHongKong')
      },
      'chinese-translator:taiwan-standard-to-simplified-chinese' () {
        translate(atom.workspace.getActiveTextEditor(), 'taiwanToSimplified')
      },
      'chinese-translator:taiwan-standard-to-simplified-chinese-with-phrases' () {
        translate(atom.workspace.getActiveTextEditor(), 'taiwanToSimplifiedWithPhrases')
      },
      'chinese-translator:hong-kong-standard-to-simplified-chinese' () {
        translate(atom.workspace.getActiveTextEditor(), 'hongKongToSimplified')
      }
    })
  },

  deactivate (state) {
    this.disposables.dispose()
  }
}

function translate (editor, translator) {
  RangeFinder.rangesFor(editor).forEach((range) => {
    const text = editor.getTextInBufferRange(range)
    const result = opencc[translator](text)
    editor.setTextInBufferRange(range, result)
  })
}
