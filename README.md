<p align="center">
  <!-- badges start -->
  <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L2ML7F8DTMAT2&currency_code=USD&source=ur" target="_blank">
    <img src="https://img.shields.io/badge/Donate-PayPal-green.svg" alt="PayPal">
  </a>
  <!-- badges end -->

  <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=L2ML7F8DTMAT2&currency_code=USD&source=ur" target="_blank">
    <img src="assets/MagicMirrorPackageManager.svg" alt="MagicMirror Package Manager">
  </a>
</p>

| Author          | Contact                           |
| --------------- | --------------------------------- |
| Brandon Marlowe | bpmarlowe-software@protonmail.com |

`MMM-mmpm`, is the companion MagicMirror module of the MMPM CLI/UI to enable toggling visibility of
MagicMirror modules. This module requires `mmpm` and MagicMirror to be installed. For instructions to install `mmpm`, see [https://github.com/Bee-Mar/mmpm](https://github.com/Bee-Mar/mmpm).

## Installation

```sh
mmpm install MMM-mmpm
```

Then append `{ module: "MMM-mmpm" }` to the `modules` array in your MagicMirror `config.js`.


See the related [MMPM Wiki](https://github.com/Bee-Mar/mmpm/wiki/Status,-Hide,-Show-MagicMirror-Modules) page for additional instructions.

## Removal

```sh
mmpm remove MMM-mmpm
```

Remove `{ module: "MMM-mmpm" }` from the `modules` array in your MagicMirror `config.js`.

