import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

//configuração global, tudo que for adicionado aqui vai ser herdado por ambas variações
export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children:
      'Cutom title'
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args:{
        children:'Strong Heading',
        as:'h1'
    },
    parameters:{
        docs:{
            description:{
                story:'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade as.'
            }
        }
    }
}