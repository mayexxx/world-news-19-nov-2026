import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repository = dirname(fileURLToPath(import.meta.url));
const output = process.env.MAKEFUN_OUTPUT_DIR || '/output';
await mkdir(output, { recursive: true });
await writeFile(join(output, 'entry.png'), await readFile(join(repository, 'entry.png')));
