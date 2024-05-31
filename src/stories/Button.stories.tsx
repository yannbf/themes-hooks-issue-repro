import React from 'react'
import type { StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'

const meta = {
  title: 'Example/Button',
}

export default meta
type Story = StoryObj<typeof meta>

const useCustomHook = () => {
  const [value, setValue] = useState<number>()

  useEffect(() => {
    setValue(123)
  }, [])

  return value
}

const Component = () => {
  const value = useCustomHook()
  return <div>Hello world {value}</div>
}

export const Primary: Story = {
  render: () => {
    // if you uncomment the line below, the story will break with:
    // Error: Storybook preview hooks can only be called inside decorators and story functions.
    // useCustomHook()
    return <Component />
  },
}

