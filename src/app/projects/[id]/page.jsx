import DetailProjet from '@/components/detailProjet';

export default async function Projet({ params }) {
  const { id } = params;
  console.log('params qui arrive à app/projects/[id]', { id });
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/${id}`,
    {
      cache: 'no-cache',
    }
  );
  const project = await res.json();
  return (
    <>
      <DetailProjet project={project} />
    </>
  );
}
