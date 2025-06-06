export async function RecupProjects() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
    {
      next: { revalidate: 3600 },
    }
  );
  const projects = await response.json();
  return projects;
}
