interface Project {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border h-full">
      <div>
        <div className="w-full aspect-square border-b overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-square object-cover hover:scale-125 transition"
          />
        </div>
      </div>
      <div className="p-5">
        <h6 className="text-lg break-all mb-2">{project.title}</h6>
        <p className="text-sm break-all">{project.description}</p>
      </div>
    </div>
  );
}
