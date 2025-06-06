import { About } from '../about';

export async function AboutSection() {
  const respSkills = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/skill`,
    {
      next: { revalidate: 3600 },
    }
  );
  const skills = await respSkills.json();
  const respTechnos = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/techno`,
    {
      next: { revalidate: 3600 },
    }
  );
  const technos = await respTechnos.json();
  return (
    <>
      <About skills={skills} technos={technos} />
    </>
  );
}
