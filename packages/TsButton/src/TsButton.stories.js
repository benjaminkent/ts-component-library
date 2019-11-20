import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import TsButton from './TsButton.vue'

storiesOf('TsButton', module).add('ts default', () => ({
  components: { TsButton },
  template: '<ts-button @clicked="handleClick">Click here</ts-button>',
  methods: { handleClick: action('button clicked') },
}))
