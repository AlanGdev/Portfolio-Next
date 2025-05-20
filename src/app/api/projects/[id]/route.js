import { getOneProject } from '@/controllers/projectController';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  try {
    const project = await getOneProject({ params });
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
