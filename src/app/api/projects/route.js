import { getProjects } from '@/controllers/projectController';
export async function GET() {
  try {
    const projects = await getProjects();
    return Response.json(projects);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
