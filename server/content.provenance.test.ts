import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("public content provenance safeguards", () => {
  const home = readFileSync(resolve(process.cwd(), "client/src/pages/Home.tsx"), "utf8");
  const faq = readFileSync(resolve(process.cwd(), "client/src/pages/FAQ.tsx"), "utf8");
  const about = readFileSync(resolve(process.cwd(), "client/src/pages/About.tsx"), "utf8");
  const leadership = readFileSync(resolve(process.cwd(), "client/src/pages/Leadership.tsx"), "utf8");
  const platform = readFileSync(resolve(process.cwd(), "client/src/pages/Platform.tsx"), "utf8");
  const projects = readFileSync(resolve(process.cwd(), "client/src/pages/Projects.tsx"), "utf8");

  it("does not publish fabricated investor identities, quotes, portraits, or return claims", () => {
    const prohibitedContent = [
      "Michael Chen",
      "Sarah Martinez",
      "James Richardson",
      "Patricia Nguyen",
      "David Rothstein",
      "Arthur Fayne Sr.",
      "John-Ross Moyler",
      "hero-team-photo",
      "Guardian Development Group Team",
      "testimonial-1-",
      "testimonial-2-",
      "testimonial-3-",
      "testimonial-4-",
      "testimonial-5-",
      "Trusted by Institutional Investors",
      "What Investors Say",
      "19.2% IRR",
      "22% IRR",
      "$2.4B+",
      "140+",
    ];

    for (const phrase of prohibitedContent) {
      expect(home).not.toContain(phrase);
      expect(faq).not.toContain(phrase);
      expect(about).not.toContain(phrase);
      expect(leadership).not.toContain(phrase);
      expect(platform).not.toContain(phrase);
    }
  });

  it("identifies BDC portfolio content as sourced work rather than investor social proof", () => {
    expect(home).toContain("Verified Project Portfolio");
    expect(home).toContain("Business Development Concepts (BDC) Portfolio");
    expect(home).toContain("The New Eastside Market, LLC");
    expect(home).toContain("Inter-Global Health &amp; Research Center");
    expect(home).toContain("Veterans Housing Development");
    expect(home).toContain("Verified BDC Project");
  });

  it("does not imply every legacy or BDC-referenced initiative was completed by GDG", () => {
    expect(projects).toContain("Public descriptions are not a representation that every initiative was completed by GDG");
    expect(projects).toContain("verify project documentation during diligence");
    expect(projects).not.toContain("500+ homes delivered, neighborhood stabilization");
    expect(projects).not.toContain("60+ rehabilitated homes, market-rate returns");
  });

  it("uses diligence-based language for return and track-record questions", () => {
    expect(faq).toContain("Return expectations are opportunity-specific");
    expect(faq).toContain("Past performance is not indicative of future results");
    expect(faq).toContain("approved offering materials");
    expect(faq).toContain("does not publish a generalized return figure");
  });
});
