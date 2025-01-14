import test, { expect } from "@playwright/test";
import { LwCharacterCreatorPage } from "../../pages/leviathans-wake/lw-character-creator-page";

test.beforeEach(async ({ page }) => {
  const lwCharacterCreatorPage = new LwCharacterCreatorPage(page);
  await lwCharacterCreatorPage.goto();
});

test("create character", async ({ page }) => {
  const lwCharacterCreatorPage = new LwCharacterCreatorPage(page);

    await expect(lwCharacterCreatorPage.characterCreatorTitle).toHaveText(
        "Leviathan's Wake Character Creator"
    );
    await lwCharacterCreatorPage.fillCharacterName("Test Character");
    await lwCharacterCreatorPage.fillCharacterOccupation("Software Test Engineer");
    await lwCharacterCreatorPage.fillCharacterNotableGear("Laptop, Headphones, Coffee");
    await lwCharacterCreatorPage.selectCharacterAttribute("Might", "1");
    await lwCharacterCreatorPage.selectCharacterAttribute("Grace", "2");
    await lwCharacterCreatorPage.selectCharacterAttribute("Allure", "3");
    await lwCharacterCreatorPage.selectCharacterAttribute("Guile", "3");
    await lwCharacterCreatorPage.selectCharacterAttribute("Wits", "2");
    await lwCharacterCreatorPage.selectCharacterAttribute("Fathom", "1");
});
