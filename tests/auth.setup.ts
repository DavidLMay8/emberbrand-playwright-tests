import { test as setup, expect } from "@playwright/test";
import path from "path";
import { LoginPage } from "../pages/login-page";

const authFile = path.join(__dirname, "../.auth/user.json");

setup("authenticate", async ({ page }) => {
  // Perform authentication steps with the login page object.
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login("drujeful@gmail.com", "EmberbrandTest1234");

  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL("https://emberbrandrpg.com/");

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});
