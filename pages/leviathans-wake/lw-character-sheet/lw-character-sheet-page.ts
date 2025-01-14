import { Locator, Page } from "@playwright/test";

export class LwCharacterSheetPage {
  readonly page: Page;
  readonly characterSheetTitle: Locator;
  readonly myCharactersButton: Locator;
  readonly myCharactersModal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.characterSheetTitle = page.getByRole("heading", {
      name: "Leviathan's Wake",
    });
    this.myCharactersButton = page
      .getByRole("heading", { name: "Leviathan's Wake" })
      .getByRole("button");
    this.myCharactersModal = page.locator(
      ".mantine-Modal-inner", {hasText: "My Characters"}
    );
  }

  async goto() {
    await this.page.goto(
      "https://emberbrandrpg.com/leviathanswake/lwcharactersheet"
    );
  }

  async openMyCharacters() {
    await this.myCharactersButton.click();
  }
}
