export function TitleProjectSection() {
  return (
    <h2 className="text-base-content mb-12 text-center text-3xl font-bold">
      Mes projets
    </h2>
  );
}
export async function RecupProjects() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
    { cache: 'no-store' }
  );
  const projects = await response.json();
  return projects;
  /*<ul>
      {projects.map((project) => {
        return <li key={project._id}>{project.nom}</li>;
      })}
    </ul> */
}
