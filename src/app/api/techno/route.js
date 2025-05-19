import { getTechnos } from '@/controllers/technoController';
export async function GET() {
  try {
    const technos = await getTechnos();
    return Response.json(technos);
  } catch (error) {
    return Response.json({ error: error.message });
  }
}
