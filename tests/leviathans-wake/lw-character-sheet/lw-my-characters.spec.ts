import test, { expect } from "@playwright/test";
import { LwCharacterSheetPage } from "../../../pages/leviathans-wake/lw-character-sheet/lw-character-sheet-page";
import { loginUser } from "../../../utils/commands";

// test.beforeEach(async ({ page }) => {
//     loginUser(page, "drujeful@gmail.com", "EmberbrandTest1234");
// });

test("has title", async ({ page }) => {
  const lwCharacterSheetPage = new LwCharacterSheetPage(page);

  await lwCharacterSheetPage.goto();
  await expect(lwCharacterSheetPage.characterSheetTitle).toHaveText(
    "Leviathan's Wake"
  );
  await lwCharacterSheetPage.openMyCharacters();
  await expect(lwCharacterSheetPage.myCharactersModal).toBeVisible();
});
