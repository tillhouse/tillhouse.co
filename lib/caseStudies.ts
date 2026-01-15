import fs from "fs";
import path from "path";

// Map project slugs to their case study file names
const caseStudyFiles: Record<string, string> = {
  ghostery: "ghostery_browser_extension_case_study.md",
  "ghostery-dawn": "ghostery_dawn_case_study.md",
  "ghostery-glow": "ghostery_glow_case_study.md",
  "ghostery-insights": "ghostery_insights_case_study.md",
  "ghostery-lite": "ghostery_lite_case_study.md",
  "ghostery-rewards": "ghostery_rewards_case_study.md",
  pavilion: "pavilion_digital_case_study.md",
};

export function getCaseStudyContent(slug: string): string | null {
  const fileName = caseStudyFiles[slug];

  if (!fileName) {
    return null;
  }

  const filePath = path.join(
    process.cwd(),
    "content",
    "case-studies",
    fileName
  );

  try {
    const content = fs.readFileSync(filePath, "utf8");
    return content;
  } catch (error) {
    console.error(`Error reading case study for ${slug}:`, error);
    return null;
  }
}

export function hasCaseStudy(slug: string): boolean {
  return slug in caseStudyFiles;
}
