import React from 'react'
import 'assets/scss/App.scss'
import { Stack } from '@fluentui/react'
import { DefaultButton } from '@fluentui/react/lib/Button'

const LandingPage = () => {
  const stackTokens = { childrenGap: 40 }
  const _alertClicked = () => {
    alert('Started')
  }

  return (
    <Stack horizontal horizontalAlign="center" tokens={stackTokens}>
      <DefaultButton
        text="Standard Button 1"
        onClick={_alertClicked}
        allowDisabledFocus
      />
      <DefaultButton
        text="Standard Button 2"
        onClick={_alertClicked}
        allowDisabledFocus
      />
      <DefaultButton
        text="Standard Button 3"
        onClick={_alertClicked}
        allowDisabledFocus
      />
    </Stack>
  )
}

export default LandingPage
