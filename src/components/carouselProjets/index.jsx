import Image from 'next/image';
export default function CarouselProjects({ projects }) {
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="carousel rounded-box mx-auto flex w-96">
          {projects.map((project) => (
            <div
              key={project._id}
              className="carousel-item flex h-96 w-96 items-center justify-center"
            >
              <Image
                src={project.image}
                width={500}
                height={500}
                alt={`Image projet ${project.nom}`}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
