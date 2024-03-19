export default function Skills() {
  const frontendLanguages = [
    {
      name: "HTML",
      image: "./images/html-logo.svg",
    },
    {
      name: "CSS",
      image: "./images/css-logo.svg",
    },
    {
      name: "Bootstrap",
      image: "./images/bootstrap-logo.svg",
    },
    {
      name: "Tailwind CSS",
      image: "./images/tailwindcss-logo.svg",
    },
    {
      name: "JavaScript",
      image: "./images/js-logo.svg",
    },
    {
      name: "jQuery",
      image: "./images/jquery-logo.svg",
    },
    {
      name: "Vue.js",
      image: "./images/vue-logo.svg",
    },
  ];

  const backendLanguages = [
    {
      name: "PHP",
      image: "./images/php-logo.svg",
    },
    {
      name: "Laravel",
      image: "./images/laravel-logo.svg",
    },
    {
      name: "MySQL",
      image: "./images/mysql-logo.svg",
    },
  ];

  const inProgressLanguages = [
    {
      name: "TypeScript",
      image: "./images/typescript-logo.svg",
    },
    {
      name: "Next.js",
      image: "./images/nextjs-logo.svg",
    },
    {
      name: "Prisma",
      image: "./images/prisma-logo.svg",
    },
  ];

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="max-w-[1200px] mx-auto my-0">
        <div className="px-5 py-[150px]">
          <h2 className="text-center text-3xl mb-10">Skills</h2>
          {/* Frontend */}
          <div className="mb-10">
            <h3 className="text-xl mb-5">Front-end</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-5">
              {frontendLanguages.map((language, index) => (
                <li key={index}>
                  <div>
                    <div className="w-full aspect-square">
                      <img
                        src={language.image}
                        alt={language.name}
                        className="w-full aspect-square object-contain"
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
            <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-5">
              {backendLanguages.map((language, index) => (
                <li key={index}>
                  <div>
                    <div className="w-full aspect-square">
                      <img
                        src={language.image}
                        alt={language.name}
                        className="w-full aspect-square object-contain"
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
            <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-5">
              {inProgressLanguages.map((language, index) => (
                <li key={index}>
                  <div>
                    <div className="w-full aspect-square">
                      <img
                        src={language.image}
                        alt={language.name}
                        className="w-full aspect-square object-contain"
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
