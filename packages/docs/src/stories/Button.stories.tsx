import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonPros } from '@ignite-ui/react'

//configuração global, tudo que for adicionado aqui vai ser herdado por ambas variações
export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonPros>

export const Primary: StoryObj<ButtonPros> = {}

export const Secundaruy: StoryObj<ButtonPros> = {
  args: {
    size: 'big',
  },
}
