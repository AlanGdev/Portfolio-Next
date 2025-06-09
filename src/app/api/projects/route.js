import { getProjects } from '@/controllers/projectController';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
