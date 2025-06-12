import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'billing_data.yml'); 
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents); 

    res.status(200).json(data); // frontend expects JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to load billing data' });
  }
}

