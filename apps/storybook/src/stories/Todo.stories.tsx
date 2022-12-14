import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Todo } from "ui/components";

export default {
  title: "Components/Todo",
  component: Todo,
  argTypes: {
    checked: { control: "boolean" },
  },
};

const Template: ComponentStory<typeof Todo> = (args) => <Todo {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  title: "Do simple Todo component",
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  title: "Do simple Todo component",
};
