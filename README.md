# Chinese Translator for Atom Editor

[![Travis CI Build Status](https://img.shields.io/travis/jmlntw/atom-chinese-translator.svg?maxAge=86400)](https://travis-ci.org/jmlntw/atom-chinese-translator)
[![AppVeyor CI Build Status](https://img.shields.io/appveyor/ci/jmlntw/atom-chinese-translator.svg?maxAge=86400)](https://ci.appveyor.com/project/jmlntw/atom-chinese-translator)
[![Dependency Status](https://img.shields.io/david/jmlntw/atom-chinese-translator.svg?maxAge=86400)](https://david-dm.org/jmlntw/atom-chinese-translator)

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

You may want to use keyboard shortcuts for triggering the above commands. This package does not provide keyboard shortcuts by default, but you can easily [define your own](http://flight-manual.atom.io/using-atom/sections/basic-customization/#_customizing_keybindings). To learn more, visit the [Using Atom: Basic Customization](http://flight-manual.atom.io/using-atom/sections/basic-customization/) or [Behind Atom: Keymaps In-Depth](http://flight-manual.atom.io/behind-atom/sections/keymaps-in-depth/) sections in the [Atom Flight Manual](http://flight-manual.atom.io/).

## License

Licensed under the [MIT License](LICENSE.md).
