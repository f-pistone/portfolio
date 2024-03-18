import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: "./images/google-forms-clone-logo.svg",
      title: "Google Forms Clone",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate, alias est porro quaerat sapiente velit eius quia doloremque cupiditate.",
      url: "http://localhost/google-forms-clone/",
      year: "2024",
      languages: [
        {
          name: "HTML",
          textColor: "text-gray-100",
          backgroundColor: "bg-orange-600",
        },
        {
          name: "CSS",
          textColor: "text-gray-100",
          backgroundColor: "bg-blue-600",
        },
        {
          name: "Tailwind CSS",
          textColor: "text-gray-100",
          backgroundColor: "bg-sky-500",
        },
        {
          name: "JavaScript",
          textColor: "text-gray-100",
          backgroundColor: "bg-yellow-400",
        },
        {
          name: "jQuery",
          textColor: "text-gray-100",
          backgroundColor: "bg-sky-700",
        },
        {
          name: "PHP",
          textColor: "text-gray-100",
          backgroundColor: "bg-indigo-500",
        },
        {
          name: "MySQL",
          textColor: "text-gray-100",
          backgroundColor: "bg-sky-600",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="max-w-[1200px] mx-auto my-0">
        <div className="px-5 py-[150px]">
          <h2 className="text-center text-3xl mb-10">Projects</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {projects.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project}></ProjectCard>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
