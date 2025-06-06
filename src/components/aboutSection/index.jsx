import { About } from '../about';

export async function AboutSection() {
  const respSkills = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/skill`,
    {
      cache: 'no-store',
    }
  );
  const skills = await respSkills.json();
  console.log('skills: ', skills);
  return (
    <>
      <About skills={skills} />
    </>
  );
}
