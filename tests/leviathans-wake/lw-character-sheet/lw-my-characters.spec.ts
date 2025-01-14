import test, { expect } from "@playwright/test";
import { LwCharacterSheetPage } from "../../../pages/leviathans-wake/lw-character-sheet/lw-character-sheet-page";

test.beforeEach(async ({ page }) => {
  const lwCharacterSheetPage = new LwCharacterSheetPage(page);
  await lwCharacterSheetPage.goto();
});

test("open my characters modal", async ({ page }) => {
  const lwCharacterSheetPage = new LwCharacterSheetPage(page);
  await expect(lwCharacterSheetPage.characterSheetTitle).toHaveText(
    "Leviathan's Wake"
  );
  await lwCharacterSheetPage.openMyCharacters();
  await expect(lwCharacterSheetPage.myCharactersModal).toBeVisible();
});
