import Footer from "@/components/Footer/Footer";
import NavigationLink from "../../components/NavigationLink/NavigationLink";

export default function WorkPage() {
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
      <h1 className="font-semibold text-2xl mb-8 mt-20">minhas experiências</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <h1 className="text-base font-normal">
          Na missão de criar produtos que os usuários amam e, ao longo do
          caminho, compartilhar conhecimento. Aqui está um resumo do meu
          trabalho até agora.
        </h1>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter mb-4">
          B4D Desenvolvimento de Sistemas
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-4">
          Desenvolvedora Web
        </p>
        <p className="my-4">
          Desde janeiro de 2022 a março de 2023 trabalhando remotamente.
        </p>
        <ul className="list-disc pl-5">
          <li>
            Desenvolvimento de sistema de fluxo de caixa e cadastro de membros
            para gestão eclesiástica.
          </li>
          <li className="mt-4">
            Criação de telas de autenticação com ReactJS e NodeJS, garantindo
            segurança e eficiência.
          </li>
          <li className="mt-4">
            Integrações com APIs para comunicação fluida entre front-end e
            back-end.
          </li>
          <li className="mt-4">
            Melhoria na usabilidade e acesso ao sistema, com entrega de uma
            solução pronta para implantação.
          </li>
        </ul>
        <div className="flex flex-wrap gap-2 my-4">
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            ReactJS
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            NodeJS
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Tailwind CSS
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            RESTful APIs
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Git
          </span>
        </div>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl mb-1 tracking-tighter mb-4">
          Clube Delivery
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm my-4">
          Desenvolvedora Web e Mobile
        </p>
        <ul className="list-disc pl-5">
          <li>
            Desenvolvimento de telas de vendas e atendimento usando React e
            TypeScript.
          </li>
          <li className="mt-4">
            Implementação de WebSocket para comunicação em tempo real.
          </li>
          <li className="mt-4">
            Criação de telas de autenticação e cadastro de empresas no
            aplicativo com React Native.
          </li>
          <li className="mt-4">
            Conclusão de uma plataforma com layout limpo, código organizado e
            preparada para escalar, proporcionando uma experiência de usuário
            aprimorada.
          </li>
        </ul>

        <div className="flex flex-wrap gap-2 my-4">
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            React
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            TypeScript
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Styled-components
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            RESTful APIs
          </span>
          <span className="text-xs bg-neutral-100 dark:bg-neutral-700 px-2 py-1 rounded">
            Git
          </span>
        </div>
      </div>
      <Footer />
    </section>
  );
}
