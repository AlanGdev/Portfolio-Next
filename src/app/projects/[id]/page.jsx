import { DetailProjet } from '@/components/detailProjet';

export const metadata = {
  title: 'Projets',
  description: 'Découvrez les projets web réalisés par Alan Grolleau.',
  keywords: 'projets web, React, Next.js, Tailwind, freelance',
};

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
