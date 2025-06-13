////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICON_DIRECTORY: string = path.resolve(__dirname, "../src/assets/logos");
const OUTPUT_FILE: string = path.resolve(__dirname, `../src/data/LOGO_SVG_MAP.ts`);

const files: string[] = fs.readdirSync(ICON_DIRECTORY).filter(file => file.endsWith('.svg'));

const importLines: string[] = files.map(file => {
  const variable: string = file.replace(".svg", "").replace(/[^a-zA-Z0-9]/g, '_');
  return `import ${variable} from "@/assets/logos/${file}";`;
});

const enumEntries: string[] = files.map(file => {
  const key: string = file.replace(".svg", "");
  const value: string = key.replace(/[^a-zA-Z0-9]/g, '_');
  return `\t${key} = "${value}"`;
});

const mapEntries: string[] = files.map(file => {
  const key: string = file.replace(".svg", "");
  const variable: string = key.replace(/[^a-zA-Z0-9]/g, '_');
  return `\t${key}: ${variable}`;
});

const lineBreak: string = "/".repeat(120);

const content: string = `${lineBreak}

// AUTO-GENERATED FILE

${lineBreak}

${importLines.join("\n")}

${lineBreak}

enum LogoKeys {
${enumEntries.join(",\n")}
}

${lineBreak}

export const LOGO_SVG_MAP: Record<LogoKeys, string> = {
${mapEntries.join(",\n")}
};

${lineBreak}
`;

fs.writeFileSync(OUTPUT_FILE, content);
console.log("File Generated at", OUTPUT_FILE);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
