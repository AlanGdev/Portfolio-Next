import { getSkills } from '@/controllers/skillController';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const skills = await getSkills();
    return NextResponse.json(skills);
  } catch (error) {
    console.error('Erreur API /api/skill', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
