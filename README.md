# ngx-feather-icons
[![Build Status](https://travis-ci.org/phillipcurl/ngx-feather-icons.svg?branch=master)](https://travis-ci.org/phillipcurl/ngx-feather-icons)
[![codecov](https://codecov.io/gh/phillipcurl/ngx-feather-icons/branch/master/graph/badge.svg)](https://codecov.io/gh/phillipcurl/ngx-feather-icons)
[![npm version](https://badge.fury.io/js/ngx-feather-icons.svg)](http://badge.fury.io/js/ngx-feather-icons)
[![devDependency Status](https://david-dm.org/phillipcurl/ngx-feather-icons/dev-status.svg)](https://david-dm.org/phillipcurl/ngx-feather-icons?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/phillipcurl/ngx-feather-icons.svg)](https://github.com/phillipcurl/ngx-feather-icons/issues)
[![GitHub stars](https://img.shields.io/github/stars/phillipcurl/ngx-feather-icons.svg)](https://github.com/phillipcurl/ngx-feather-icons/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/phillipcurl/ngx-feather-icons/master/LICENSE)

## Demo
https://phillipcurl.github.io/ngx-feather-icons/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About



## Installation

Install through npm:
```
npm install --save ngx-feather-icons
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { NgxFeatherIconsModule } from 'ngx-feather-icons';

@NgModule({
  imports: [
    NgxFeatherIconsModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/phillipcurl/ngx-feather-icons/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ngx-feather-icons/bundles/ngx-feather-icons.umd.js"></script>
<script>
    // everything is exported ngxFeatherIcons namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://phillipcurl.github.io/ngx-feather-icons/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and [yarn](https://yarnpkg.com/en/docs/install)
* Install local dev dependencies: `yarn` while current directory is this repo

### Development server
Run `yarn start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `yarn test` to run tests once or `yarn run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
yarn run release
```

## License

MIT
