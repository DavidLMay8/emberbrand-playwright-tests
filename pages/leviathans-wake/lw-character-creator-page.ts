import { Locator, Page } from "@playwright/test";

export class LwCharacterCreatorPage {
  readonly page: Page;
  readonly characterCreatorTitle: Locator;
  readonly characterNameInput: Locator;
  readonly characterOccupationInput: Locator;
  readonly characterNotableGearInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.characterCreatorTitle = page.getByRole("heading", {
      name: "Leviathan's Wake Character Creator",
    });
    this.characterNameInput = page.getByLabel("Name");
    this.characterOccupationInput = page.getByLabel("Occupation");
    this.characterNotableGearInput = page.getByLabel("Notable Gear");
  }

  async goto() {
    await this.page.goto(
      "https://emberbrandrpg.com/leviathanswake/lwcharactercreator"
    );
  }

  async fillCharacterName(name: string) {
    await this.characterNameInput.fill(name);
  }

  async fillCharacterOccupation(occupation: string) {
    await this.characterOccupationInput.fill(occupation);
  }

  async fillCharacterNotableGear(notableGear: string) {
    await this.characterNotableGearInput.fill(notableGear);
  }

  async selectCharacterAttribute(attribute: string, value: string) {
    await this.page.getByRole("textbox", { name: attribute }).click();
    await this.page.getByRole("option", { name: value }).click();
  }
}
