RangeFinder = require('./range-finder')
opencc = require('node-opencc')

module.exports =
  activate: ->
    @disposables = atom.commands.add 'atom-text-editor:not([mini])',
      'chinese-translator:traditional-chinese-to-simplified-chinese': ->
        editor = atom.workspace.getActiveTextEditor()
        translate(editor, 'traditionalToSimplified')
      'chinese-translator:traditional-chinese-to-taiwan-standard': ->
        editor = atom.workspace.getActiveTextEditor()
        translate(editor, 'traditionalToTaiwan')
      'chinese-translator:traditional-chinese-to-hong-kong-standard': ->
        editor = atom.workspace.getActiveTextEditor()
        translate(editor, 'traditionalToHongKong')
      'chinese-translator:simplified-chinese-to-traditional-chinese': ->
        editor = atom.workspace.getActiveTextEditor()
        translate(editor, 'simplifiedToTraditional')
      'chinese-translator:simplified-chinese-to-taiwan-standard': ->
        editor = atom.workspace.getActiveTextEditor()
        translate(editor, 'simplifiedToTaiwan')
      'chinese-translator:simplified-chinese-to-taiwan-standard-with-phrases': ->
        editor = atom.workspace.getActiveTextEditor()
        translate(editor, 'simplifiedToTaiwanWithPhrases')
      'chinese-translator:simplified-chinese-to-hong-kong-standard': ->
        editor = atom.workspace.getActiveTextEditor()
        translate(editor, 'simplifiedToHongKong')
      'chinese-translator:taiwan-standard-to-simplified-chinese': ->
        editor = atom.workspace.getActiveTextEditor()
        translate(editor, 'taiwanToSimplified')
      'chinese-translator:taiwan-standard-to-simplified-chinese-with-phrases': ->
        editor = atom.workspace.getActiveTextEditor()
        translate(editor, 'taiwanToSimplifiedWithPhrases')
      'chinese-translator:hong-kong-standard-to-simplified-chinese': ->
        editor = atom.workspace.getActiveTextEditor()
        translate(editor, 'hongKongToSimplified')

  deactivate: ->
    @disposables.dispose()

translate = (editor, translator) ->
  availableRanges = RangeFinder.rangesFor(editor)
  availableRanges.forEach (range) ->
    text = editor.getTextInBufferRange(range)
    result = opencc[translator](text)
    editor.setTextInBufferRange(range, result)
