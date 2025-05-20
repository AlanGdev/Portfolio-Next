import Image from 'next/image';
import Link from 'next/link';
export default function DetailProjet({ project }) {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-semibold">{project.nom}</h1>
        <figure>
          <Image
            src={project.image}
            width={400}
            height={200}
            alt={`Présentation ${project.nom}`}
            className="mx-auto"
          />
        </figure>
        <p className="p-4">{project.description}</p>
        {project.categorie && (
          <div className="flex-column">
            <p>
              <span className="font-bold">Catégorie: </span> {project.categorie}
            </p>
            <p className="mb-4 flex items-center">
              <span className="font-bold">Technologies: </span>
              {project.technologies.map((tech) => (
                <Image
                  key={tech._id}
                  src={tech.image}
                  width={50}
                  height={50}
                  alt={tech.nom}
                  className="mx-2"
                />
              ))}
            </p>
          </div>
        )}
        <div
          tabIndex={0}
          className="bg-base-200 border-base-300 collapse-arrow collapse border"
        >
          <div className="collapse-title cursor-pointer font-semibold">
            Problématiques développées:
          </div>
          <div className="collapse-content text-sm">
            {project.problematics.map((prob, index) => (
              <p key={index}>{prob}</p>
            ))}
          </div>
        </div>
        {project.lien_github && (
          <Link href={project.lien_github}>
            <button className="btn btn-neutral btn-outline my-4">
              lien GitHub
            </button>
          </Link>
        )}
        {project.lien_demo && (
          <Link href={project.lien_demo}>
            <button className="btn btn-neutral my-4">Demo</button>
          </Link>
        )}
        <div className="carousel w-full">
          {project.images_detail.map((image, index) => (
            <div
              key={index}
              id={index}
              className="carousel-item relative w-full"
            >
              <Image
                src={image}
                width={400}
                height={400}
                alt="print-écran projet"
                className="mx-auto"
              />
              <div className="-translate-Y-1/2 absolute top-1/2 right-50 left-50 flex transform justify-between">
                <a
                  href={`#${index - 1}`}
                  className="text-2xl font-semibold"
                >{`<`}</a>
                <a
                  href={`#${index + 1}`}
                  className="text-2xl font-semibold"
                >{`>`}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
