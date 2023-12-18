import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

//configuração global, tudo que for adicionado aqui vai ser herdado por ambas variações
export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size:'md',
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste nostrum ad nobis doloribus. Unde, officiis aut. Temporibus, consectetur! Ut voluptate fugiat quasi quae veniam et aliquam cupiditate consequuntur tempora obcaecati.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
