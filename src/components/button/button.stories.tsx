import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

export default {
  args: {

  },
  argTypes: {

  },
  component: Button,
  title: "Components/Button",
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const StoryDefault: Story = {
  name: "Default",
  //@ts-ignore
  render: ({ children, ...props }) => <Button {...props}>{children}</Button>,
};
