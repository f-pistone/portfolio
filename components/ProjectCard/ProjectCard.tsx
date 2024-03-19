interface Project {
  image: string;
  title: string;
  description: string;
  url: string;
  year: string;
  languages: {
    name: string;
    textColor: string;
    backgroundColor: string;
  }[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.url} target="_blank" className="block border h-full">
      <div>
        <div className="p-3 w-full aspect-square border-b overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-square object-cover hover:scale-125 transition"
          />
        </div>
      </div>
      <div className="p-5">
        <div className="mb-5">
          <h6 className="text-lg break-word mb-2">{project.title}</h6>
          <p className="text-sm text-gray-600 break-word">
            {project.description}
          </p>
        </div>
        <div>
          <ul className="flex flex-wrap items-center gap-2">
            {project.languages.map((language, index) => (
              <li
                key={index}
                className={`p-1 text-xs ${language.textColor} ${language.backgroundColor} rounded-md`}
              >
                {language.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-5 text-right text-xs text-gray-600">
        <span>{project.year}</span>
      </div>
    </a>
  );
}
