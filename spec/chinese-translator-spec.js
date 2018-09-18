'use babel'

describe('translate chinese', () => {
  let activationPromise
  let editor
  let editorView
  let onDidChangeSpy

  const hasCommand = (target, name) => {
    const commands = atom.commands.findCommands({ target })
    return commands.some((command) => command.name === `chinese-translator:${name}`)
  }

  const translate = (command, callback) => {
    atom.commands.dispatch(editorView, `chinese-translator:${command}`)
    waitsForPromise(() => activationPromise)
    runs(() => {
      waitsFor(() => onDidChangeSpy.callCount > 1)
      runs(callback)
    })
  }

  beforeEach(() => {
    waitsForPromise(() => atom.workspace.open())
    runs(() => {
      editor = atom.workspace.getActiveTextEditor()
      editorView = atom.views.getView(editor)
      activationPromise = atom.packages.activatePackage('chinese-translator')

      onDidChangeSpy = jasmine.createSpy('onDidChange')
      editor.onDidChange(onDidChangeSpy)
    })
  })

  describe('when the package activates', () => {
    it('creates all commands', () => {
      expect(hasCommand(editorView, 'traditional-chinese-to-simplified-chinese')).toBeTruthy()
      expect(hasCommand(editorView, 'traditional-chinese-to-taiwan-standard')).toBeTruthy()
      expect(hasCommand(editorView, 'traditional-chinese-to-hong-kong-standard')).toBeTruthy()
      expect(hasCommand(editorView, 'simplified-chinese-to-traditional-chinese')).toBeTruthy()
      expect(hasCommand(editorView, 'simplified-chinese-to-taiwan-standard')).toBeTruthy()
      expect(hasCommand(editorView, 'simplified-chinese-to-taiwan-standard-with-phrases')).toBeTruthy()
      expect(hasCommand(editorView, 'simplified-chinese-to-hong-kong-standard')).toBeTruthy()
      expect(hasCommand(editorView, 'taiwan-standard-to-simplified-chinese')).toBeTruthy()
      expect(hasCommand(editorView, 'taiwan-standard-to-simplified-chinese-with-phrases')).toBeTruthy()
      expect(hasCommand(editorView, 'hong-kong-standard-to-simplified-chinese')).toBeTruthy()
    })
  })

  describe('when the package deactivates', () => {
    beforeEach(() => atom.packages.deactivatePackage('chinese-translator'))
    it('removes all commands', () => {
      expect(hasCommand(editorView, 'traditional-chinese-to-simplified-chinese')).toBeFalsy()
      expect(hasCommand(editorView, 'traditional-chinese-to-taiwan-standard')).toBeFalsy()
      expect(hasCommand(editorView, 'traditional-chinese-to-hong-kong-standard')).toBeFalsy()
      expect(hasCommand(editorView, 'simplified-chinese-to-traditional-chinese')).toBeFalsy()
      expect(hasCommand(editorView, 'simplified-chinese-to-taiwan-standard')).toBeFalsy()
      expect(hasCommand(editorView, 'simplified-chinese-to-taiwan-standard-with-phrases')).toBeFalsy()
      expect(hasCommand(editorView, 'simplified-chinese-to-hong-kong-standard')).toBeFalsy()
      expect(hasCommand(editorView, 'taiwan-standard-to-simplified-chinese')).toBeFalsy()
      expect(hasCommand(editorView, 'taiwan-standard-to-simplified-chinese-with-phrases')).toBeFalsy()
      expect(hasCommand(editorView, 'hong-kong-standard-to-simplified-chinese')).toBeFalsy()
    })
  })

  describe('when no text is selected', () => {
    it('translates all text in the editor', () => {
      editor.setText('這段文字會翻譯為簡體中文。')
      editor.setCursorBufferPosition([0, 0])
      translate('traditional-chinese-to-simplified-chinese', () => {
        expect(editor.getText()).toBe('这段文字会翻译为简体中文。')
      })
    })
    it('translates all text with line-break in the editor', () => {
      editor.setText('這段文字會翻譯為簡體中文。\n換行之後也是一樣。')
      editor.setCursorBufferPosition([0, 0])
      translate('traditional-chinese-to-simplified-chinese', () => {
        expect(editor.getText()).toBe('这段文字会翻译为简体中文。\n换行之后也是一样。')
      })
    })
  })

  describe('when some text are selected', () => {
    it('translates the selected text', () => {
      editor.setText('這段文字「引號裡面的文字」會翻譯為簡體中文。')
      editor.setSelectedBufferRange([[0, 5], [0, 12]])
      translate('traditional-chinese-to-simplified-chinese', () => {
        expect(editor.getText()).toBe('這段文字「引号里面的文字」會翻譯為簡體中文。')
      })
    })
  })

  describe('when there are multiple selection ranges', () => {
    it('translates the text in each selection range', () => {
      editor.setText('這段文字「這個引號裡面的文字」和「這個引號裡面的文字」會翻譯為簡體中文。')
      editor.addSelectionForBufferRange([[0, 5], [0, 14]])
      editor.addSelectionForBufferRange([[0, 17], [0, 26]])
      translate('traditional-chinese-to-simplified-chinese', () => {
        expect(editor.getText()).toBe('這段文字「这个引号里面的文字」和「这个引号里面的文字」會翻譯為簡體中文。')
      })
    })
  })

  describe('when translating from traditional chinese', () => {
    it('translates to simplified chinese', () => {
      editor.setText('曾經有一份真誠的愛情放在我面前，我沒有珍惜，等我失去的時候我才後悔莫及。')
      editor.setCursorBufferPosition([0, 0])
      translate('traditional-chinese-to-simplified-chinese', () => {
        expect(editor.getText()).toBe('曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及。')
      })
    })
    it('translates to taiwan standard', () => {
      editor.setText('着裝污染虛偽發泄稜柱羣眾裏面')
      editor.setCursorBufferPosition([0, 0])
      translate('traditional-chinese-to-taiwan-standard', () => {
        expect(editor.getText()).toBe('著裝汙染虛偽發洩稜柱群眾裡面')
      })
    })
    it('translates to hong kong standard', () => {
      editor.setText('虛偽嘆息 潮溼灶臺')
      editor.setCursorBufferPosition([0, 0])
      translate('traditional-chinese-to-hong-kong-standard', () => {
        expect(editor.getText()).toBe('虛偽歎息 潮濕灶台')
      })
    })
  })

  describe('when translating from simplified chinese', () => {
    it('translates to traditional chinese', () => {
      editor.setText('燕燕于飞，差池其羽。之子于归，远送于野。')
      editor.setCursorBufferPosition([0, 0])
      translate('simplified-chinese-to-traditional-chinese', () => {
        expect(editor.getText()).toBe('燕燕于飛，差池其羽。之子于歸，遠送於野。')
      })
    })
    it('translates to taiwan standard', () => {
      editor.setText('鲶鱼和鲇鱼是一种生物。')
      editor.setCursorBufferPosition([0, 0])
      translate('simplified-chinese-to-taiwan-standard', () => {
        expect(editor.getText()).toBe('鯰魚和鯰魚是一種生物。')
      })
    })
    it('translates to taiwan standard with phrases', () => {
      editor.setText('我们在老挝的服务器的硬盘需要使用互联网算法软件解决异步的问题。')
      editor.setCursorBufferPosition([0, 0])
      translate('simplified-chinese-to-taiwan-standard-with-phrases', () => {
        expect(editor.getText()).toBe('我們在寮國的伺服器的硬碟需要使用網際網路演算法軟體解決非同步的問題。')
      })
    })
    it('translates to hong kong standard', () => {
      editor.setText('虚伪叹息 潮湿灶台 沙河涌汹涌的波浪')
      editor.setCursorBufferPosition([0, 0])
      translate('simplified-chinese-to-hong-kong-standard', () => {
        expect(editor.getText()).toBe('虛偽歎息 潮濕灶台 沙河涌洶湧的波浪')
      })
    })
  })

  describe('when translating from taiwan standard', () => {
    it('translates to simplified chinese', () => {
      editor.setText('著裝著作汙染虛偽發洩稜柱群眾裡面')
      editor.setCursorBufferPosition([0, 0])
      translate('taiwan-standard-to-simplified-chinese', () => {
        expect(editor.getText()).toBe('着装著作污染虚伪发泄棱柱群众里面')
      })
    })
    it('translates to simplified chinese with phrases', () => {
      editor.setText('滑鼠裡面的矽二極體壞了，導致游標解析度降低。')
      editor.setCursorBufferPosition([0, 0])
      translate('taiwan-standard-to-simplified-chinese-with-phrases', () => {
        expect(editor.getText()).toBe('鼠标里面的硅二极管坏了，导致光标分辨率降低。')
      })
    })
  })

  describe('when translating from hong kong standard', () => {
    it('translates to simplified chinese', () => {
      editor.setText('虛偽歎息 潮濕灶台 沙河涌洶湧的波浪')
      editor.setCursorBufferPosition([0, 0])
      translate('taiwan-standard-to-simplified-chinese', () => {
        expect(editor.getText()).toBe('虚伪叹息 潮湿灶台 沙河涌汹涌的波浪')
      })
    })
  })
})
