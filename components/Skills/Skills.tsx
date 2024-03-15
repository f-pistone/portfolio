export default function Skills() {
  const frontendLanguages = [
    {
      name: "HTML",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "CSS",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Bootstrap",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Tailwind",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "JavaScript",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "jQuery",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Vue.js",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const backendLanguages = [
    {
      name: "PHP",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Laravel",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "MySQL",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const inProgressLanguages = [
    {
      name: "TypeScript",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Next.js",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Prisma",
      image:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="max-w-[1200px] mx-auto my-0">
        <div className="px-5 py-[70px]">
          <h2 className="text-center text-3xl mb-10">Skills</h2>
          {/* Frontend */}
          <div className="mb-10">
            <h3 className="text-xl mb-5">Front-end</h3>
            <ul className="grid grid-cols-1 md:grid-cols-7 gap-5">
              {frontendLanguages.map((language, index) => (
                <li key={index}>
                  <div>
                    <div className="w-full aspect-square border">
                      <img
                        src={language.image}
                        alt={language.name}
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                    <div className="mt-2">
                      <h6 className="text-sm text-center">{language.name}</h6>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Frontend End */}

          {/* Backend */}
          <div className="mb-10">
            <h3 className="text-xl mb-5">Back-end</h3>
            <ul className="grid grid-cols-1 md:grid-cols-7 gap-5">
              {backendLanguages.map((language, index) => (
                <li key={index}>
                  <div>
                    <div className="w-full aspect-square border">
                      <img
                        src={language.image}
                        alt={language.name}
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                    <div className="mt-2">
                      <h6 className="text-sm text-center">{language.name}</h6>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Backend End */}

          {/* In Progress */}
          <div>
            <h3 className="text-xl mb-5">In progress</h3>
            <ul className="grid grid-cols-1 md:grid-cols-7 gap-5">
              {inProgressLanguages.map((language, index) => (
                <li key={index}>
                  <div>
                    <div className="w-full aspect-square border">
                      <img
                        src={language.image}
                        alt={language.name}
                        className="w-full aspect-square object-cover"
                      />
                    </div>
                    <div className="mt-2">
                      <h6 className="text-sm text-center">{language.name}</h6>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* In Progress End */}
        </div>
      </div>
    </section>
  );
}