export default async function Apropos() {
  const resSkills = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/skill`,
    { cache: 'no-store' }
  );
  const skills = await resSkills.json();
  console.log(skills);
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="mb-4 text-4xl font-bold">Mes compétences</h1>
        <p className="px-4 text-lg">
          {' '}
          Après une riche expérience dans la gestion d’équipes et le suivi
          d’activités techniques dans les secteurs de l’énergie et de l’eau,
          j’ai choisi d’orienter mon parcours vers une voie qui allie rigueur
          analytique et créativité : le développement web. Passionné par
          l’optimisation des processus et la création d’outils numériques, je
          mets aujourd’hui mes compétences en programmation au service de
          solutions performantes et intuitives. Mon expertise en reporting et en
          gestion de données, combinée à mes compétences en développement
          full-stack, me permet de concevoir des applications adaptées aux
          besoins des entreprises et des utilisateurs.
          <br />
          Curieux de nature et toujours en quête d’amélioration, j’aime relever
          de nouveaux défis techniques et apprendre de chaque projet. En dehors
          du code, vous me croiserez peut-être en train de naviguer sur l’eau ou
          de pédaler sur les sentiers bretons ! À travers ce portfolio, je vous
          invite à découvrir mes projets et mon approche du développement web.
        </p>
        {skills.map((skill) => (
          <div
            tabIndex={0}
            key={skill.categorie}
            className="collapse-arrow bg-base-100 bg-base-100 border-base-300 collapse mt-4 border"
          >
            <div className="collapse-title font-semibold">
              {skill.categorie}
            </div>
            <div key={skill} className="collapse-content text-sm">
              <ul>
                {skill.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
              <h4 className="px-4 pt-4 font-semibold">Projets associés:</h4>
              <ul className="px-4">
                {skill.projets.map((projet, index) => (
                  <li key={index}>{projet.nom}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
