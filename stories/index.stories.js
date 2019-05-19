/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';

import GithubRibbon from '../src/components/GithubRibbon';

storiesOf('Ribbon', module)
  .add('basic', () => ({
    components: { GithubRibbon },
    template: `
  <div>
    <github-ribbon href="https://github.com/howdy39" />
  </div> 
  `
  }))
  .add('title', () => ({
    components: { GithubRibbon },
    template: `
  <div>
    <github-ribbon href="https://github.com/howdy39" title="howdy!" />
  </div>
  `
  }))
  .add('position', () => ({
    components: { GithubRibbon },
    template: `
  <div>
    <github-ribbon href="https://github.com/howdy39" position="right-top" title="right-top" />
    <github-ribbon href="https://github.com/howdy39" position="left-top" title="left-top" />
    <github-ribbon href="https://github.com/howdy39" position="left-bottom" title="left-bottom" />
    <github-ribbon href="https://github.com/howdy39" position="right-bottom" title="right-bottom" />
  </div>
  `
  }))
  .add('color', () => ({
    components: { GithubRibbon },
    template: `
  <div>
    <github-ribbon href="https://github.com/howdy39" position="right-top" title="#000000" color="#000000"/>
    <github-ribbon href="https://github.com/howdy39" position="left-top" title="#ff0000" color="#ff0000" />
    <github-ribbon href="https://github.com/howdy39" position="left-bottom" title="#00ff00" color="#00ff00" />
    <github-ribbon href="https://github.com/howdy39" position="right-bottom" title="#0000ff" color="#0000ff" />
  </div>
  `
  }));


/* eslint-enable react/react-in-jsx-scope */
