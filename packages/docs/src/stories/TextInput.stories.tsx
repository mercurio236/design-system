import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

//configuração global, tudo que for adicionado aqui vai ser herdado por ambas variações
export default {
  title: 'Form/TextInput Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box>
          <Text>Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
