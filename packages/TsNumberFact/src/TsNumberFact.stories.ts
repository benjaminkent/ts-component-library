import { storiesOf } from '@storybook/vue'
import TsNumberFact from './TsNumberFact.vue'

storiesOf('TsNumberFact', module)
  .add('math', () => ({
    components: { TsNumberFact },
    template: '<ts-number-fact :factType="type" />',
    data: () => ({
      type: 'math',
    }),
  }))
  .add('trivia', () => ({
    components: { TsNumberFact },
    template: '<ts-number-fact :factType="type" />',
    data: () => ({
      type: 'trivia',
    }),
  }))
