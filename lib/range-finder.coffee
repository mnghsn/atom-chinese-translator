{Range} = require('atom')

module.exports =

  class RangeFinder
    @rangesFor: (editor) ->
      new RangeFinder(editor).ranges()

    constructor: (@editor) ->

    ranges: ->
      selectionRanges = @selectionRanges()
      if selectionRanges.length is 0
        [@availableRangesFromEntireBuffer()]
      else
        selectionRanges

    selectionRanges: ->
      @editor.getSelectedBufferRanges().filter (range) ->
        not range.isEmpty()

    availableRangesFromEntireBuffer: ->
      @editor.getBuffer().getRange()
