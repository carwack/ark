import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.ts"],
	addons: [
		{
			name: "@storybook/addon-essentials",
			options: { backgrounds: false, controls: false, actions: false },
		},
		getAbsolutePath("@storybook/addon-a11y"),
		"@chromatic-com/storybook",
	],
	framework: {
		name: getAbsolutePath("@storybook/vue3-vite"),
		options: {},
	},
	core: {
		disableTelemetry: true,
	},
	docs: {},
	viteFinal(config) {
		const vueDocgenIndex = config.plugins?.findIndex(
			(plugin) =>
				(plugin as { name: string }).name === "storybook:vue-docgen-plugin",
		);
		if (
			vueDocgenIndex !== undefined &&
			vueDocgenIndex !== -1 &&
			config.plugins
		) {
			config.plugins.splice(vueDocgenIndex, 1);
		}
		return config;
	},
};

export default config;

function getAbsolutePath(value: string): string {
	return dirname(require.resolve(join(value, "package.json")));
}
