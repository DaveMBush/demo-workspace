Steps to reproduce storyshot error using Angular ~13.0.0 and storybook ~6.4.5

- Create new NX Workspace with Angular

``` shell
npx create-nx-workspace --preset=angular
```

Respond to the questions:

- workspace=demo-workspace
- application=demo
- CSS
- no Cloud

- Add Storybook plugin to NX

``` shell
npm i -D @nrwl/storybook
```

- Add Storybook nrwl schematic

``` shell
npm i -D @nrwl/storybook
```

- Add Storybook to demo app

``` shell
npx nx g @nrwl/angular:storybook-configuration demo
```

Answer the questions:
- cypress=n
- Auto generate stories=y
- Auto generate specs=n

- There is a known issue that requires us to rollback the angular version from ~13.1.0 to ~13.0.0.  Do so and run `npm install` again.

- At this point you should be able to run storybook

``` shell
npx nx run demo:storybook
```

- Add storyshots to the project

``` shell
npm install @storybook/addon-storyshots
```

- Add storyshots.spec.js to apps/demo/src and put the standard two lines in the file:

``` javascript
import initStoryShots from '@storybook/addon-storyshots';

initStoryShots();
```

- Add the following sections to jest.config.js file in /apps/demo

``` javascript
  moduleFileExtensions: ['ts', 'js', 'html', 'json', 'mjs'],
  moduleNameMapper: {
    'jest-preset-angular/build/setup-jest': 'jest-preset-angular/setup-jest',
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer':
      'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/AngularSnapshotSerializer':
      'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/HTMLCommentSerializer':
      'jest-preset-angular/build/serializers/html-comment'
  },
```

This solves the spdx* issue that you would otherwise see and maps functions that no longer exists to where they've been moved to.

- At this point, you should be able to run the tests and see the error

``` shell
npm run test
```

Errors on storyshots.spec.js with:
"Your test suite must contain at least one test."
