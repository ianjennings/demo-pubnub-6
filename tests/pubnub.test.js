import { describe, expect, it } from "vitest";
import { TestDriver } from "testdriverai/vitest/hooks";

describe("PubNub Website", () => {
  it("should load the homepage and verify key real-time solutions", async (context) => {
    const testdriver = TestDriver(context);

    // Launch Chrome and navigate to PubNub homepage
    await testdriver.provision.chrome({ url: "https://www.pubnub.com" });

    // Assert that the homepage loaded and the main headline is visible
    const headline = await testdriver.assert(
      "the PubNub homepage is visible with headlines about real-time or live interactivity"
    );
    expect(headline).toBeTruthy();

    // Verify navigation or call to action element is present
    const ctaButton = await testdriver.find("Start Building button");
    expect(ctaButton).toBeTruthy();
  });

  it("should navigate to documentation page", async (context) => {
    const testdriver = TestDriver(context);

    // Navigate to PubNub Docs
    await testdriver.provision.chrome({ url: "https://www.pubnub.com/docs" });

    // Assert docs page loaded
    const docsLoaded = await testdriver.assert(
      "the PubNub documentation page is visible"
    );
    expect(docsLoaded).toBeTruthy();
  });
});
