import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react/src/components/Text'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Reprehenderit aute in et consectetur esse sunt laboris elit do. Nostrud irure proident sit laborum officia anim veniam cillum incididunt velit incididunt officia. Anim nulla proident adipisicing eu. Sint nulla amet eiusmod ea fugiat minim et ea ipsum aute sint eu officia. Reprehenderit Lorem non dolore Lorem non ea eu ad aute irure et. Laboris elit id Lorem consectetur. Commodo in laborum laboris enim.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
