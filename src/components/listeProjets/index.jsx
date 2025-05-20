import Image from 'next/image';
import Link from 'next/link';
export default function ListeProjets({ projects }) {
  return (
    <>
      <div className="container mx-auto">
        {projects.map((projet, index) => (
          <Link key={index} href={`/projects/${projet._id}`}>
            <div className="card card-border bg-base-100 mb-4 w-full p-4 shadow-lg transition duration-300 hover:scale-105">
              <figure>
                <Image
                  src={projet.image}
                  width={250}
                  height={200}
                  alt={projet.nom}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title mx-auto">{projet.nom}</h2>
                <p>{projet.categorie}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
