import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

//configuração global, tudo que for adicionado aqui vai ser herdado por ambas variações
export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum ad nobis doloribus. Unde, officiis aut. Temporibus, consectetur! Ut voluptate fugiat quasi quae veniam et aliquam cupiditate consequuntur tempora obcaecati.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
