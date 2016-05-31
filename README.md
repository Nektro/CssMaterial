# CssMaterial
[![MIT License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

CssMaterial is a project with the aim of producing a working implementation of Material Design by Google
all while using as little Javascript as possible in a library format so only the styles you use get applied.

This is a WIP project so all features outlined in the spec may not be available.

## Usage
To start using CssMaterial today, you import the html page in the root of this project.

```html
<link rel="import" href="https://rawgit.com/Nektro/CssMaterial/master/import.html">
```

## Examples
For examples on how to use the different components, see the [example page](examples/example.html).

## Contributing
Any help would be graciously appreciated. Layout errors in the CSS or pull requests for new components are always
welcome! See this list below for the current roadmap.

 - [x] Both HTTP/2 optimized and minified version of output source.
 - [x] Material Icons with the `.material-icons` class courtesy of https://design.google.com/icons/
 - [x] [Extra] Css normalization via https://github.com/necolas/normalize.css (MIT)
 - [ ] Bottom Sheets
 - [x] Buttons
 - [x] [Extra] Button waves effect via https://github.com/fians/Waves (MIT)
 - [x] Floating Action Buttons __WIP__
 - [x] Cards
 - [ ] Chips
 - [x] Data Tables __WIP__
 - [ ] Dialogs
 - [ ] Dividers
 - [ ] Grid Lists
 - [x] Header for main navigation
 - [ ] Lists
 - [ ] Lists w/ Controls
 - [x] Menus (dropdown)
 - [ ] Pickers
 - [ ] Progress bar
 - [ ] Selection controls: Checkbox
 - [x] Selection controls: Radio button
 - [x] Selection controls: Switch
 - [x] [Extra] Side navbar (full height)
 - [ ] Sliders
 - [ ] Snackbars
 - [ ] Toast
 - [x] Subheadings
 - [x] Steppers
 - [ ] Tabs
 - [x] Text fields __Done, needs work__
 - [ ] Toolbars
 - [ ] Tooltips _(May use https://github.com/kazzkiq/balloon.css (MIT))_

## Material Design
Material Design is a layout and design philosophy made by Google originally for the Android project. Since
then millions of apps and websites have adapted that philosophy. This is an attempt to recreate some of those
components and features with as little Javascript as possible. See the whole spec [here](https://www.google.com/design/spec/).

## License
CssMaterial is licensed under the MIT license. See [LICENSE](LICENSE).

## Contact
Feel free to follow me on Twitter [@Nektro](https://twitter.com/Nektro), email me hello@nektro.net, or visit my website
that uses this very library https://dev.nektro.net
