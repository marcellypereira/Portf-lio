/* eslint-disable @next/next/no-img-element */
import React from "react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import GithubIcon from "@/components/Svg/GithubIcon/GithubIcon";
import Instagram from "@/components/Svg/Instagram/Instagram";
import X from "@/components/Svg/X/X";
import SocialLink from "../../components/SocialLink/SocialLink";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import ProjectBlock from "../../components/ProjectBlock/ProjectBlock";
import NavigationLink from "../../components/NavigationLink/NavigationLink";
import Badge from "../../components/Badge/Badge";
import LinkedInIcon from "../../components/Svg/LinkedIn/LinkedIn";
import ReactIcon from "../../components/Svg/React/React";
import TypeScriptIcon from "../../components/Svg/TypeScript/TypeScrtipt";
import NodeIcon from "../../components/Svg/Node/Node";
import ReduxIcon from "../../components/Svg/Redux/Redux";
import ViteIcon from "../../components/Svg/Vite/Vite";
import TailwindIcon from "../../components/Svg/Tailwindcss/Tailwindcss";
import MaterialUiIcon from "../../components/Svg/MaterialUi/MaterialUi";
import BootsTrapIcon from "..//..//components/Svg/BootsTrap/BootsTrap";
import ScssIcon from "../../components/Svg/Scss/Scss";
import CssIcon from "../../components/Svg/Css/Css";
import HtmlIcon from "../../components/Svg/Html/Html";
import Jquery from "../../components/Svg/Jquery/Jquery"

const Home = () => {
  const socialMediaLinks = [
    {
      url: "https://www.linkedin.com/in/marcelly-pereira/",
      icon: <LinkedInIcon />,
      text: "LinkedIn",
    },
    {
      url: "https://github.com/marcellypereira",
      icon: <GithubIcon />,
      text: "Github",
    },
    {
      url: "https://www.instagram.com/marcelly.pereira_",
      icon: <Instagram />,
      text: "Instagram",
    },
    {
      url: "https://x.com/marcellyAp_",
      icon: <X />,
      text: "Twitter",
    },
  ];

  const renderSocialLinks = () => {
    return socialMediaLinks.map((link, index) => (
      <SocialLink key={index} {...link} />
    ));
  };

  return (
    <div>
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
      <div className="font-medium text-2xl mb-2 tracking-tighter text-gray-900 dark:text-gray-400">
        <div className="mt-20">
          <h1 className="font-medium text-2xl mb-2 tracking-tighter text-gray-900 dark:text-gray-400">
            <b className="font-bold dark:text-gray-100 text-gray-900">
              Olá, sou Marcelly Pereira 👋 .
            </b>{" "}
            <br></br>Engenheira de software.
          </h1>
          <div className="flex flex-wrap gap-2 mt-4 mb-10 text-sm">
            {renderSocialLinks()}
          </div>
          <p className="prose prose-neutral dark:prose-invert">
            {"Sou desenvolvedora Front-end com 2 anos de experiência, tendo"}
            <br></br>
            <NavigationLink to="/experiences">trabalhado</NavigationLink>
            {
              " em projetos desafiadores tanto para o desenvolvimento web quanto mobile, atuando em empresas de diferentes portes e setores."
            }
            <br></br>
            <br></br>
            <div className="w-full">
              {"Minhas principais stacks são "}
              <Badge href="https://react.dev/">
                <ReactIcon />
                React
              </Badge>
              {", "}
              <Badge href="https://reactnative.dev/">
                <ReactIcon />
                React Native
              </Badge>
              {", "}
              <Badge href="https://www.typescriptlang.org/">
                <TypeScriptIcon />
                TypeScript
              </Badge>
              {", "}
              <Badge href="https://nodejs.org/en">
                <NodeIcon />
                NodeJs
              </Badge>
              <Badge href="https://redux.js.org/">
                <ReduxIcon />
                Redux
              </Badge>
              {", "}
              <Badge href="https://vite.dev/">
                <ViteIcon />
                Vite
              </Badge>
              {", "}
              <Badge href="https://tailwindcss.com/">
                <TailwindIcon />
                Tailwind CSS
              </Badge>
              {", "}
              <Badge href="https://mui.com/material-ui/">
                <MaterialUiIcon />
                Material Ui
              </Badge>
              {", "}
              <Badge href="https://getbootstrap.com/">
                <BootsTrapIcon />
                BootsTrap
              </Badge>
              {", "}
              <Badge href="https://sass-lang.com/">
                <ScssIcon />
                SCSS
              </Badge>
              {", "}
              <Badge href="https://www.w3schools.com/css/">
                <CssIcon />
                Css
              </Badge>
              <Badge href="https://www.w3schools.com/html/">
                <HtmlIcon />
                HTML
              </Badge>
              {", "}
              <Badge href="https://jquery.com/">
                <Jquery />
                JQuery
              </Badge>
              .
            </div>
          </p>

          <div className="mt-10">
            <h3 className="font-semibold mb-6">📌 Posts recentes</h3>
            <div className="flex gap-10 mb-3">
              <ContentBlock
                title=" ChatGPT: O Melhor Amigo (ou Vilão?) do Desenvolvedor?"
                description="Aprendendo a utilizar o ChatGPT da forma certa."
                url="https://www.tabnews.com.br/Marcellyavelino/chatgpt-o-melhor-amigo-ou-vilao-do-desenvolvedor"
              />
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-medium text-xl mb-4 tracking-tighter">
              💼 Alguns dos meus projetos
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ProjectBlock
                title="Buzzvel Soller"
                description="Projeto desenvolvido para um Teste"
                url="https://github.com/marcellypereira/Buzzvel-Teste"
              />
              <ProjectBlock
                title="Book Management"
                description="Plataforma para Gerenciamento de livros"
                url="https://github.com/marcellypereira/book-management"
              />
            </div>
            <Link
              to="/projects"
              className="underline text-sm flex justify-end mt-4"
            >
              Ver mais
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
