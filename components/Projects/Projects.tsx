import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate, alias est porro quaerat sapiente velit eius quia doloremque cupiditate.",
      image:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate, alias est porro quaerat sapiente velit eius quia doloremque cupiditate.",
      image:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Project 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptate, alias est porro quaerat sapiente velit eius quia doloremque cupiditate.",
      image:
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section>
      <div id="projects" className="max-w-[1200px] mx-auto my-0">
        <div className="px-5 py-[150px]">
          <h2 className="text-center text-3xl mb-10">Projects</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
