import { ProjectAnime } from '../projectAnime';

export function ProjectSection({ projects }) {
  return (
    <>
      <section id="projets" className="bg-base-200 min-h-screen px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-base-content mb-12 text-center text-3xl font-bold">
            Mes projets
          </h2>
          <ProjectAnime projects={projects} />
        </div>
      </section>
    </>
  );
}
