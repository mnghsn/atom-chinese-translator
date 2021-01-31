# Chinese Translator for Atom Editor

[![APMVersion](https://img.shields.io/apm/v/chinese-translator.svg)](https://atom.io/packages/chinese-translator)

**chinese-translator** translates between Traditional Chinese and Simplified Chinese in Atom editor, with the dictionary of localized phrases and verbs. Powered by [node-opencc](https://github.com/compulim/node-opencc).

![A screenshot of chinese-translator](https://raw.githubusercontent.com/jmlntw/atom-chinese-translator/master/screenshot.gif)

## Installation

Search for `chinese-translator` in the Atom settings view or run `apm install chinese-translator` from the command line.

## Commands

All of the following commands are under the `atom-text-editor` selector.

If any text are selected in the active buffer, the commands operate on the selected text. Otherwise, the commands operate on all text in the active buffer.

| Commands                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `chinese-translator:traditional-chinese-to-simplified-chinese`          | Translates Traditional Chinese to Simplified Chinese                    |
| `chinese-translator:traditional-chinese-to-taiwan-standard`             | Translates Traditional Chinese to Taiwan Standard                       |
| `chinese-translator:traditional-chinese-to-hong-kong-standard`          | Translates Traditional Chinese to Hong Kong Standard                    |
| `chinese-translator:simplified-chinese-to-traditional-chinese`          | Translates Simplified Chinese to Traditional Chinese                    |
| `chinese-translator:simplified-chinese-to-taiwan-standard`              | Translates Simplified Chinese to Taiwan Standard                        |
| `chinese-translator:simplified-chinese-to-taiwan-standard-with-phrases` | Translates Simplified Chinese to Taiwan Standard with Taiwanese phrases |
| `chinese-translator:simplified-chinese-to-hong-kong-standard`           | Translates Simplified Chinese to Hong Kong Standard                     |
| `chinese-translator:taiwan-standard-to-simplified-chinese`              | Translates Taiwan Standard to Simplified Chinese                        |
| `chinese-translator:taiwan-standard-to-simplified-chinese-with-phrases` | Translates Taiwan Standard to Simplified Chinese with Chinese phrases   |
| `chinese-translator:hong-kong-standard-to-simplified-chinese`           | Translates Hong Kong Standard to Simplified Chinese                     |

You may want to use keyboard shortcuts for triggering the above commands. This package does not provide keyboard shortcuts by default, but you can easily [define your own](https://flight-manual.atom.io/using-atom/sections/basic-customization/#_customizing_keybindings). To learn more, visit the [Using Atom: Basic Customization](https://flight-manual.atom.io/using-atom/sections/basic-customization/) or [Behind Atom: Keymaps In-Depth](https://flight-manual.atom.io/behind-atom/sections/keymaps-in-depth/) sections in the [Atom Flight Manual](https://flight-manual.atom.io/).

## License

Licensed under the [MIT License](LICENSE.md).
