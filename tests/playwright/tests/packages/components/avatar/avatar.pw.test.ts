import { expect, test } from "@playwright/test";
import {
	type PackageName,
	gotoStory,
	testA11yWithAttachedResults,
} from "../../components/utils";

const packages: PackageName[] = ["react", "vue", "solid"];

for (const packageName of packages) {
	test.describe(`${packageName}: basic variant`, () => {
		test.beforeEach(async ({ page }) => {
			await gotoStory("avatar", "basic", page, packageName);
			await page.getByAltText("avatar").waitFor();
		});
		test("has avatar image", async ({ page }) => {
			await expect(page.getByAltText("avatar")).toHaveAttribute(
				"src",
				"https://avatars.githubusercontent.com/u/1846056?v=4",
			);
			await expect(page).toHaveScreenshot();
		});
		test("has no a11y violations", async ({ page }, testInfo) => {
			const accessibilityScanResults = await testA11yWithAttachedResults(
				page,
				testInfo,
				"avatar",
			);
			await expect(accessibilityScanResults.violations).toEqual([]);
		});
	});
}
