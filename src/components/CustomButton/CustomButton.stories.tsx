import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';
import CustomButton from './CustomButton';

const meta = {
    title: 'Atoms/CustomButton',
    component: CustomButton,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: "Konfigurowany przycisk ogólnego przeznaczenia."
            }
        }
    },
    tags: ['autodocs'],
    args: {
        children: 'Button',
        size: 'medium',
        mode: 'normal',
        fullLine: false,
        disabled: false,
        bold: false,
        radius: false,
        onClick: fn()
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Rozmiar przycisku'
        },
        mode: {
            control: 'select',
            options: ['normal', 'info', 'warning', 'error'],
            description: 'Tryb przycisku'
        },
        fullLine: {
            control: 'boolean',
            description: 'Pełna szerokość ekranu'
        },
        disabled: {
            control: 'boolean',
            description: 'Stan wyłączony',
        },
        bold: {
            control: 'boolean',
            description: 'Etykieta pogrubiona',
        },
        radius: {
            control: 'boolean',
            description: 'Zaokrąglone rogi przycisku',
        },
    }
} satisfies Meta<typeof CustomButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StandardButtonStory: Story = {
    name: 'Standard Button',
    args: {
        children: 'Standard',
        size: 'medium'
    },
    parameters: {
        docs: {
            description: {
                story: 'Standard button.'
            }
        }
    }
};

export const FullLineButtonStory: Story = {
    name: 'Full Line Button',
    args: {
        children: 'Full Line',
        fullLine: true
    },
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                story: 'Full line button.'
            }
        }
    }
};

export const FullLineButtonStory2: Story = {
    name: 'Full Line Button (2)',
    args: {
        children: 'Full Line (2)',
        fullLine: true
    },
    parameters: {
        layout: "padded",
        docs: {
            description: {
                story: 'Full line button (2).'
            }
        }
    }
};

export const FullLineButtonStory3: Story = {
    name: 'Full Line Button (3)',
    args: {
        children: 'Full Line (3)',
        fullLine: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Full line button (3).'
            }
        }
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    minWidth: '500px'
                }}
            >
                <Story />
            </div>
        )
    ]
};

export const ErrorButtonStory: Story = {
    name: 'Error Button',
    args: {
        children: 'Error',
        mode: 'error'
    },
    parameters: {
        docs: {
            description: {
                story: 'Error button.'
            }
        }
    }
};

export const WarningButtonStory: Story = {
    name: 'Warning Button',
    args: {
        children: 'Warning',
        mode: 'warning'
    },
    parameters: {
        docs: {
            description: {
                story: 'Warning button.'
            }
        }
    }
};

export const InfoButtonStory: Story = {
    name: 'Info Button',
    args: {
        children: 'Info',
        mode: 'info'
    },
    parameters: {
        docs: {
            description: {
                story: 'Info button.'
            }
        }
    }
};

export const BoldButtonStory: Story = {
    name: 'Bold Button',
    args: {
        children: 'Bold',
        bold: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Bold button.'
            }
        }
    }
};

export const DisabledButtonStory: Story = {
    name: 'Disable Button',
    args: {
        children: 'Disabled',
        disabled: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Disabled button.'
            }
        }
    }
};

export const ReactIconButtonStory: Story = {
    name: 'React Icon Button',
    args: {
        children: 'React Icon',
        icon: 'react'
    },
    parameters: {
        docs: {
            description: {
                story: 'Button with custom icon.'
            }
        }
    }
};

export const RadiusIconButtonStory: Story = {
    name: 'Radius Icon Button',
    args: {
        children: 'Radius',
        radius: true
    },
    parameters: {
        docs: {
            description: {
                story: 'Button with rounded (10px) corners.'
            }
        }
    }
};

export const SmallButtonStory: Story = {
    name: 'Small Button Button',
    args: {
        children: 'Small',
        size: 'small'
    },
    parameters: {
        docs: {
            description: {
                story: 'Small size button.'
            }
        }
    }
};

export const MediumButtonStory: Story = {
    name: 'Medium Button',
    args: {
        children: 'Medium',
        size: 'medium'
    },
    parameters: {
        docs: {
            description: {
                story: 'Medium size button.'
            }
        }
    }
};

export const LargeButtonStory: Story = {
    name: 'Large Button',
    args: {
        children: 'Large',
        size: 'large'
    },
    parameters: {
        docs: {
            description: {
                story: 'Large size button.'
            }
        }
    }
};

export const ClickableButtonStory: Story = {
    name: "Button with action",
    args: {
        children: 'Clickable'
    },
    parameters: {
        docs: {
            description: {
                story: 'Button with action onClick.'
            }
        }
    }
};

export const AllSizeButtonsStory: Story = {
    name: "All sizes",
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                story: 'All sizes.'
            }
        }
    },
    render: (args) => (
        <>
            <CustomButton {...args} size={'small'}>Small</CustomButton>
            <CustomButton {...args} size={'medium'}>Medium</CustomButton>
            <CustomButton {...args} size={'large'}>Large</CustomButton>
        </>
    ),
};

export const AllModeButtonsStory: Story = {
    name: "All modes",
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                story: 'All modes.'
            }
        }
    },
    render: (args) => (
        <>
            <CustomButton {...args} mode={"normal"}>Normal</CustomButton>
            <CustomButton {...args} mode={"info"}>Info</CustomButton>
            <CustomButton {...args} mode={"warning"}>Warning</CustomButton>
            <CustomButton {...args} mode={"error"}>Error</CustomButton>
        </>
    ),
};
