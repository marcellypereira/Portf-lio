import Link from "next/link";
import NavigationLink from "../../components/NavigationLink/NavigationLink";
import Footer from "@/components/Footer/Footer";

const ProjectsList = ({ projects }) => {
  return (
    <div>
      {Object.entries(projects).map(([category, projectsInCategory]) => (
        <div key={category}>
          <h2 className="font-medium text-xl mt-8 mb-8">{category}</h2>
          <div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            id={category.replace(/[^a-zA-Z]|\p{Emoji}/gu, "")}
          >
            {projectsInCategory.map((project) => (
              <div
                key={project.title}
                className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded w-full justify-between px-3 py-4"
              >
                <h5 className="font-medium text-base">{project.title}</h5>
                <p className="text-xs mt-4">{project.description}</p>
                <div className="flex space-x-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded mb-4"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <a target="_blank" href={project.link} className="text-xs">
                  Ver no github
                </a>
              </div>
            ))}
          </div>
          <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        </div>
      ))}
    </div>
  );
};

export default function WorkPage() {
  const projects = {
    "🌐 frontend": [
      {
        title: "Book Management",
        description: "Plataforma para gerenciamento de Livros",
        link: "https://github.com/marcellypereira/book-management",
        tags: ["react", "typescript", "json server"],
      },
      {
        title: "Soller",
        description:
          "Site de vendas especializado em soluções de energia solar",
        link: "https://github.com/marcellypereira/Buzzvel-Teste",
        tags: ["react.js", "tailwind-css", "framer-motion"],
      },
      {
        title: "Travel",
        description: "Plataforma de viagens",
        link: "https://github.com/marcellypereira/platform-travel",
        tags: ["react.js", "tailwind-css", "vite"],
      },
      {
        title: "RamenGoo",
        description: "Cardápio: plataforma desenvolvida para testes.",
        link: "https://github.com/marcellypereira/RamenGoo",
        tags: ["html", "css", "javascript", "vite"],
      },
      {
        title: "Animais fantásticos",
        description:
          "Site Animais Fantásticos para colocar em prática os conhecimentos aprendidos no curso de JavaScript ES6 da Origamid",
        link: "https://github.com/marcellypereira/animais-fantasticos",
        tags: ["html", "css", "javascript", "node.js"],
      },
      {
        title: "E-commerce",
        description: "Simulador de comércio eletrônico com React",
        link: "https://github.com/marcellypereira/e-commerce",
        tags: ["react.js", "node.js"],
      },
    ],
    "📱 mobile": [
      {
        title: "To Do List",
        description:
          "Aplicação é constituída por uma lista completa, onde o utilizador pode adicionar, editar, marcar como concluída, eliminar uma tarefa.",
        link: "https://github.com/marcellypereira/Todo-List",
        tags: ["react-native", "typescript"],
      },
      {
        title: "Marvel",
        description:
          "Aplicação que utiliza React Native para consumir dados da API da Marvel, proporcionando uma experiência no universo Marvel.",
        link: "https://github.com/marcellypereira/Marvel2",
        tags: ["react-native", "javascript", "node.js"],
      },
      {
        title: "Rocket",
        description:
          "Aplicação de um sistema de bilhetes, que fornece uma solução eficiente e intuitiva para gerir e acompanhar os pedidos.",
        link: "https://github.com/marcellypereira/Rocket",
        tags: ["react-native", "javascript", "node.js"],
      },
      {
        title: "iWeather",
        description:
          "Aplicação que utiliza o React Native para consumir dados da API Weather, fornecendo resultados meteorológico.",
        link: "https://github.com/marcellypereira/iWeather",
        tags: ["react-native", "javascript", "node.js"],
      },
    ],
  };

  return (
    <section>
      <header className="pt-10">
        <nav className="flex space-x-6">
          <NavigationLink to="/" className="no-underline">
            Home
          </NavigationLink>
          <NavigationLink to="/projects" className="no-underline">
            Projetos
          </NavigationLink>
          <NavigationLink to="/experiences" className="no-underline">
            Experiências
          </NavigationLink>
        </nav>
      </header>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter mt-20">
        meus projetos 🚀
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Aqui estão alguns dos meus projetos públicos. Você pode encontrar mais
          no meu perfil do{" "}
          <a
            href="https://github.com/marcellypereira"
            target="_blank"
            className="underline"
          >
            GitHub
          </a>
          . Eles são classificados por tipo, como{" "}
          <span className="font-bold">frontend</span>, e{" "}
          <span className="font-bold">mobile</span>. Muito desses projetos são
          feitos para estudo e aprendizado, mas alguns são feitos para testes.
        </p>

        <h3 className="font-medium text-xl mt-8">🔍 busque por categoria</h3>
        <div className="flex flex-wrap space-x-1 mt-4">
          {["🌐 frontend", "📱 mobile"].map((section) => (
            <Link
              key={section}
              href={`#${section.replace(/[^a-zA-Z]|\p{Emoji}/gu, "")}`}
              passHref
              id={`link-${section.replace(/[^a-zA-Z]|\p{Emoji}/gu, "")}`}
              className={`border border-neutral-200 dark:border-neutral-700 rounded-full px-2 md:px-4 py-1 md:py-2 project-button text-xs font-medium no-underline my-1`}
            >
              {section}
            </Link>
          ))}
        </div>

        <ProjectsList projects={projects} />
      </div>
      <Footer />
    </section>
  );
}
