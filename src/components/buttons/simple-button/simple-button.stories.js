import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('Components', module)
  .add('Simple button', () => {
    return `<simple-button text="Basic button"/>`
  }, {notes})
