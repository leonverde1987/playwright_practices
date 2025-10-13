import {expect, type Locator, type Page} from "@playwright/test";

export class DashboardPage{
    readonly page: Page;
    readonly nameSession: Locator;
    readonly titleDashboard: Locator;

    constructor(page: Page){
        this.page=page;
        this.nameSession=page.locator('[data-test="nav-menu"]');
        this.titleDashboard=page.locator('[data-test="page-title"]');
    }

    async validateSesion(name: any, title: any){
        await expect(this.nameSession).toContainText(name);
        await expect(this.titleDashboard).toContainText(title);
    }
}