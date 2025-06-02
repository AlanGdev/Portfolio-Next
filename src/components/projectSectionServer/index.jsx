export async function RecupProjets() {
  const resProjects = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
    {
      cache: 'no-store',
    }
  );
  const projects = await resProjects.json();
  return projects;
}
