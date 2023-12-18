import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

//configuração global, tudo que for adicionado aqui vai ser herdado por ambas variações
export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
   src:'https://github.com/mercurio236.png',
   alt:'Arley Souto'
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args:{
        src:'undefined'
    }
}


