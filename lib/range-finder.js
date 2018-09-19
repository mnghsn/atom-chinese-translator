'use babel'

import { Range } from 'atom'

export default class RangeFinder {
  constructor (editor) {
    this.editor = editor
  }

  ranges () {
    const selectionRanges = this.selectionRanges()
    return selectionRanges.length === 0
      ? [this.availableRangesFromEntireBuffer()]
      : selectionRanges
  }

  selectionRanges () {
    return this.editor.getSelectedBufferRanges().filter((range) => !range.isEmpty())
  }

  availableRangesFromEntireBuffer () {
    return this.editor.getBuffer().getRange()
  }

  static rangesFor (range) {
    return new RangeFinder(range).ranges()
  }
}
