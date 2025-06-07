import { About } from '../about';

export async function AboutSection() {
  try {
    const respSkills = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/skill`,
      { cache: 'no-store' }
    );

    if (!respSkills.ok) throw new Error('Erreur lors du fetch');

    const skills = await respSkills.json();
    return <About skills={skills} />;
  } catch (error) {
    console.error('Erreur fetch skills:', error);
    return (
      <div className="text-error p-4 text-center">
        Impossible de charger les compétences.
      </div>
    );
  }
}
