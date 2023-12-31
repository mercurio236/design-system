import type { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@ignite-ui/react'

//configuração global, tudo que for adicionado aqui vai ser herdado por ambas variações
export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size:4,
    currentStep: 1

  },
  decorators: [
    (Story) => {
      return (
        <Box>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4
  },
}
