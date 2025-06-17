////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOGO_DIRECTORY: string = path.resolve(__dirname, "../src/assets/logos");
const LOGO_KEY_OUTPUT_FILE: string = path.resolve(__dirname, "../src/app/data/enums/LogoKey.ts");
const LOGO_MAP_OUTPUT_FILE: string = path.resolve(__dirname, `../src/app/data/maps/LOGO_MAP.ts`);

const files: string[] = fs.readdirSync(LOGO_DIRECTORY).filter(file => file.endsWith('.svg'));

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const LOGO_KEY_FILE_CONTENT: string = `${lineBreak}

// AUTO-GENERATED FILE

${lineBreak}

export enum LogoKey {
${enumEntries.join(",\n")}
}

${lineBreak}
`

fs.writeFileSync(LOGO_KEY_OUTPUT_FILE, LOGO_KEY_FILE_CONTENT);
console.log("File Generated at", LOGO_KEY_OUTPUT_FILE);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const LOGO_MAP_FILE_CONTENT: string = `${lineBreak}

// AUTO-GENERATED FILE

${lineBreak}

import { LogoKey } from "@/app/data/enums/LogoKey";

${lineBreak}

${importLines.join("\n")}

${lineBreak}

export const LOGO_MAP: Record<LogoKey, string> = {
${mapEntries.join(",\n")}
};

${lineBreak}
`;

fs.writeFileSync(LOGO_MAP_OUTPUT_FILE, LOGO_MAP_FILE_CONTENT);
console.log("File Generated at", LOGO_MAP_OUTPUT_FILE);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
