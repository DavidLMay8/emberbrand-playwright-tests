import test, { expect } from "@playwright/test";
import { LoginPage } from "../../pages/login-page";
import { HomePage } from "../../pages/home-page";

test("login form", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.goto();
    await loginPage.login("drujeful@gmail.com", "EmberbrandTest1234");
    await expect(homePage.emberbrandTitle).toHaveText("Emberbrand Roleplaying Game");
});