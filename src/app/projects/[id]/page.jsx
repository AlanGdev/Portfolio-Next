import DetailProjet from '@/components/detailProjet';
export default async function Projet({ params }) {
  const { id } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${id}`,
    {
      cache: 'no-cache',
    }
  );
  const project = await res.json();
  console.log(project);
  return (
    <>
      <DetailProjet project={project} />
    </>
  );
}
