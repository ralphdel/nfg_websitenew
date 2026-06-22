import { expect, test } from "@playwright/test";

const hero2Headline = "Let Us Plan Together. Respond Fast. Protect your Production.";
const schemaErrorText = 'Found unknown properties for block declaration';

test("homepage returns 200 and key hero/trust content renders", async ({ page, request }) => {
  const response = await request.get("/");
  expect(response.status()).toBe(200);

  await page.goto("/");
  await expect(page.locator("body")).toContainText("Nigerian Foundries Group");
  await expect(page.locator(".hero")).toContainText("We Are The Manufacturing Backbone");

  await expect(page.getByRole("tab")).toHaveCount(7);
  await expect(page.getByRole("tab", { name: `Show slide 2: ${hero2Headline}` })).toBeVisible();

  await expect(page.locator("[aria-label='Trust signals']")).toContainText("Since 1969");
  await expect(page.locator("[aria-label='Trust signals']")).toContainText(/SSAB-certified Hardox/i);
});

test("hero slide 2 copy renders in paragraphs and image fallback stays safe", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("tab", { name: `Show slide 2: ${hero2Headline}` }).click();

  await expect(page.getByRole("heading", { name: hero2Headline })).toBeVisible();
  await expect(page.locator(".hero-copy .hero-subcopy .hero-sub")).toHaveCount(4);
  await expect(page.locator(".hero-media-frame img")).toBeVisible();
  await expect(page.locator(".hero-media-frame mux-player, .hero-media-frame video")).toHaveCount(0);
});

test("homepage hero does not introduce blocked content and retains visible mux video support", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator(".hero-media-frame mux-player")).toHaveCount(1);
  await expect(page.locator(".hero iframe")).toHaveCount(0);
  await expect(page.locator(".hero")).not.toContainText(/terrorist/i);

  await page.getByRole("tab", { name: /Show slide 3:/ }).click();
  await expect(page.locator(".hero-media-frame mux-player")).toHaveCount(1);
});

test("/rtq redirects to /rfq", async ({ request }) => {
  const response = await request.get("/rtq", { maxRedirects: 0 });
  expect(response.status()).toBeGreaterThanOrEqual(300);
  expect(response.status()).toBeLessThan(400);
  expect(response.headers().location).toBe("/rfq");
});

test("/studio loads without schema compile error text", async ({ page }) => {
  await page.goto("/studio");
  await expect(page).toHaveURL(/\/studio/);
  await expect(page.locator("body")).not.toContainText(schemaErrorText);
  await expect(page.locator("body")).not.toContainText('Object type "heroSlide"');
});
