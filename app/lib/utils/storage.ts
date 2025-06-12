import { promises as fs } from 'fs';
import { StorageEntry } from './definitions';

export async function calculateTotalStorage(): Promise<number> {
  const file = await fs.readFile(process.cwd() + '/data/billing_data.json', 'utf8');
  const data = JSON.parse(file);
  const entries: StorageEntry[] = data.billing.storage;
  return entries.reduce((sum, entry) => sum + entry.size_tb, 0);
}

