import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly emberbrandTitle: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.emberbrandTitle = page.locator("h1", { hasText: "Emberbrand" });
    }
}