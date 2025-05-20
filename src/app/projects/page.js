import ListeProjets from '@/components/listeProjets';
export default async function Projets() {
  const resProjects = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`,
    { cache: 'no-cache' }
  );
  const projects = await resProjects.json();
  console.log(projects);
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="mb-4 text-4xl font-bold">Mes Projets</h1>
      </div>
      <ListeProjets projects={projects} />
    </>
  );
}
