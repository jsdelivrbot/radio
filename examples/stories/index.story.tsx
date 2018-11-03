import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Radio, RadioGroup } from 'or-radio'
import { previewCode } from './util'

import Example from './example'

import './styles.scss'

const handleClick = action('basic-click')
storiesOf('or-radio', module)
  .addDecorator(
    withInfo({
      inline: true,
      propTables: [Radio, RadioGroup],
      propTablesExclude: [Example],
      styles: {
        jsxInfoContent: {
          borderTop: 'none',
          margin: 0
        }
      }
    })
  )
  .add('sample', () => <Example />, {
    info: {
      source: false,
      text: previewCode(require('!!raw-loader!./example.tsx'))
    }
  })
