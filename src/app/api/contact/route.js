import { createMessage } from '@/controllers/contactController';

export async function POST(req) {
  return createMessage(req);
}
