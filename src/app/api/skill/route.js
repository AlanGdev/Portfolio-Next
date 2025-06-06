import { getSkills } from '@/controllers/skillController';

export async function GET() {
  try {
    const skills = await getSkills();
    return Response.json(skills);
  } catch (error) {
    console.error('Erreur API /api/skill', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
