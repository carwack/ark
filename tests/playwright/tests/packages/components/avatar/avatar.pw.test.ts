import { expect, test } from "@playwright/test";
import { gotoStory } from "../../components/utils";

const packages: ["react", "vue"] = ["react", "vue"];

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
	});
}
