import slug from 'slug';
import { customAlphabet } from 'nanoid';

const DEFAULT_CHAR_LIMIT = 12;

const generateId = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', DEFAULT_CHAR_LIMIT);

export function generateSlug(text: string): string | null {
  if (!text) return null;
  
  const slugifiedText = slug(text, { lower: true, trim: true, replacement: '-' });
  return `${slugifiedText}-${generateId()}`;
}
