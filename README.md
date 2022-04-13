# zerozip
Make your zip zero.

[![numbaht](https://img.shields.io/npm/v/zerozip.svg)](https://www.npmjs.com/package/zerozip)
[![license-svg](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

## Usage
- Install with npm or yarn

  ```shell
  npm install zerozip
  # or
  yarn add zerozip
  ```
- Example
  ```javascript
  import { zerozip } from 'zerozip'
  import { readFileSync,writeFileSync } from 'fs'

  writeFileSync("zero.zip",  zerozip(readFileSync("your_file.zip")))
  ```

## License
MIT
