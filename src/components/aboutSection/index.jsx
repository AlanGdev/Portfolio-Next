import { About } from '../about';

export async function AboutSection() {
  const respSkills = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/skill`,
    {
      next: { revalidate: 3600 },
    }
  );
  const skills = await respSkills.json();
  return (
    <>
      <About skills={skills} />
    </>
  );
}
