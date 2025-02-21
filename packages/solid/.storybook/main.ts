import type { StorybookConfig } from "storybook-solidjs-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.tsx"],
	addons: [
		{
			name: "@storybook/addon-essentials",
			options: { backgrounds: false, actions: false },
		},
		"@storybook/addon-a11y",
	],
	framework: {
		name: "storybook-solidjs-vite",
		options: {},
	},
	core: {
		disableTelemetry: true,
	},
	docs: {
		autodocs: false,
	},
};

export default config;
