export function TitleContenu() {
  return (
    <>
      <h1>Alan Grolleau - Développeur web</h1>
    </>
  );
}

export function ParagContenu() {
  return (
    <p className="text-base-content mx-auto mb-8 max-w-xl text-lg sm:text-xl">
      Développeur web freelance, je conçois des sites et applications modernes,
      performants et évolutifs. Que ce soit pour un site vitrine, une
      application métier ou une optimisation SEO, je vous accompagne avec des
      solutions adaptées à vos besoins.
    </p>
  );
}

export function ProjectButton() {
  return (
    <a href="#projets" className="btn btn-soft btn-success hover:scale-105">
      Voir mes projets
    </a>
  );
}
