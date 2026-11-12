import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

describe("PubNub Website", () => {
  it("should load the homepage and navigate to pricing", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: "https://www.pubnub.com" });

    const assertHomepage = await testdriver.assert(
      "The PubNub homepage headline 'Global infrastructure for real-time, interactive applications' is visible"
    );
    expect(assertHomepage).toBeTruthy();

    await testdriver.find("Accept Cookies button").click();

    await testdriver.find("Pricing link in the top navigation bar").click();

    const assertPricing = await testdriver.assert(
      "The headline 'Simple, Transparent Pricing' is visible on the Pricing page"
    );
    expect(assertPricing).toBeTruthy();

    await testdriver.find("PubNub logo in the top navigation").click();

    const assertReturnedHome = await testdriver.assert(
      "The PubNub homepage is displayed after clicking the logo"
    );
    expect(assertReturnedHome).toBeTruthy();
  });

  it("should navigate to Contact Sales and fill in contact form fields", async (context) => {
    const testdriver = TestDriver(context);

    await testdriver.provision.chrome({ url: "https://www.pubnub.com" });

    await testdriver.find("Accept Cookies button").click();

    await testdriver.find("Contact Sales button in the navigation header").click();

    const assertContactSales = await testdriver.assert(
      "The Contact Sales page is visible with the headline 'Find out how PubNub can help your business' and the contact form"
    );
    expect(assertContactSales).toBeTruthy();

    await testdriver.find("First Name input field").click();
    await testdriver.type("Test");

    await testdriver.find("Last Name input field").click();
    await testdriver.type("Driver");

    const assertInputs = await testdriver.assert(
      "The First Name and Last Name inputs contain 'Test' and 'Driver'"
    );
    expect(assertInputs).toBeTruthy();
  });
});
