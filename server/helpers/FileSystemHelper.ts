import { promises as fs } from "fs";

export const fileExists = async (path: string): Promise<boolean> => !!(await fs.stat(path).catch(e => false));
