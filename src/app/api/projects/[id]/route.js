import { getOneProject } from '@/controllers/projectController';
import { NextResponse } from 'next/server';

export async function GET(req, context) {
  const id = context.params.id;
  try {
    const project = await getOneProject(id);
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
