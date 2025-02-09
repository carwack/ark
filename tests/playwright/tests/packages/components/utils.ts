import type { Page } from "@playwright/test";

export const gotoStory = async (
	storyId: string,
	variantId: string,
	page: Page,
	packageName: "react" | "vue",
) => {
	if (!storyId || !variantId || !packageName) await page.goto("/");

	// Using the sandbox to isolate the story from the rest of Histoire.

	// example urls:
	// Vue: http://localhost:6007/iframe.html?globals=&id=components-avatar--basic&viewMode=story
	// React: http://localhost:6007/iframe.html?args=&globals=&id=components-avatar--basic&viewMode=story
	switch (packageName) {
		case "react":
			await page.goto(
				`http://localhost:6006/iframe.html?id=components-${storyId}--${variantId}&viewMode=story`,
			);
			break;
		case "vue":
			await page.goto(
				`http://localhost:6007/iframe.html?id=components-${storyId}--${variantId}&viewMode=story`,
			);
			break;
	}
};
