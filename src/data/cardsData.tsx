import { Card } from "../components/Card";

export const cardsData: Card[] = [
  {
    id: 1,
    imagem: "/images/let.jpg",
    titulo: "Em breve...",
    ferramentas: "",
    textoCard: "",
    linkGithub: "http://localhost:3000/projetos",
    altText: "API Gateway",
  },
  {
    id: 2,
    imagem: "/images/jarvis2.jpg",
    titulo: "Gestor de Tarefas 2.0 (remake)",
    ferramentas: "Nest.js, JWT, bcrypt, Swagger, Jest",
    textoCard:
      "Novas funcionalidades: 1º Sistema completo de cadastro e login com permissões únicas para usuários; 2º Estatísticas de produtividade individuais; 3º Adoção do Knex...",
    linkGithub: "https://github.com/joaoespdev/Task-Management-2.0",
    altText: "Gestor Tarefas 2.0",
  },
  {
    id: 3,
    imagem: "/images/loja.png",
    titulo: "Loja Full Stack",
    ferramentas: "React, TypeScript, Vite, CSS3, Jest",
    textoCard:
      "Uma loja moderna e responsiva, desenvolvida com React e TypeScript. O projeto apresenta um design minimalista e uma experiência de usuário fluida em todos os dispositivos.",
    linkGithub: "https://github.com/joaoespdev/Loja-Fullstack",
    altText: "Loja-Fullstack",
  },
  {
    id: 4,
    imagem: "/images/biblioteca.png",
    titulo: "Biblioteca API",
    ferramentas: "NestJS, TypeORM, PostgreSQL, JWT",
    textoCard:
      "API REST desenvolvida para gerenciar o sistema de aluguel de livros de uma biblioteca. Esta API permite o gerenciamento de livros, autores, locatários e aluguéis com regras de negócio e relacionamentos apropriados.",
    linkGithub: "https://github.com/joaoespdev/biblioteca-nest",
    altText: "Biblioteca Nest",
  },
  {
    id: 5,
    imagem: "/images/jarvis.png",
    titulo: "Gestor de Tarefas",
    ferramentas: "NestJS, TypeScript, JWT, bcrypt",
    textoCard:
      "API RESTful desenvolvida com NestJS para gerenciamento de tarefas com autenticação JWT. O sistema permite criar, listar, atualizar e deletar tarefas, além de contar com um sistema de autenticação de usuários.",
    linkGithub: "https://github.com/joaoespdev/Task-Management-NestJS",
    altText: "Gestor Tarefas",
  },
  {
    id: 6,
    imagem: "/images/veiculos.png",
    titulo: "Crud Veículos",
    ferramentas: "Spring Boot, H2, JPA, Lombok, Swagger",
    textoCard:
      "API RESTful desenvolvida em Spring para gerenciamento de diferentes tipos de veículos. A API permite criação, leitura, atualização e exclusão.",
    linkGithub: "https://github.com/joaoespdev/Veiculo-CRUD-DB",
    altText: "Crud Veículos",
  },
  {
    id: 7,
    imagem: "/images/naruto.jpeg",
    titulo: "Desafio Ninja",
    ferramentas: "Spring, H2, JUnit, Mockito, Swagger",
    textoCard:
      "Este projeto simula batalhas entre ninjas, com funcionalidades baseadas em Programação Orientada a Objetos (POO), inspiradas no anime Naruto.",
    linkGithub: "https://github.com/joaoespdev/DESAFIO-NINJA-DB2",
    altText: "Desafio Ninja",
  },
  {
    id: 8,
    imagem: "/images/pessoaCrud.jpg",
    titulo: "Pessoa Endereço",
    ferramentas: "Spring Boot, H2, JPA, Lombok",
    textoCard:
      "Aplicação em Java com CRUD no Spring Boot que fornece uma API REST para gerenciar Pessoa e Endereços num relacionamento de um-para-muitos.",
    linkGithub: "https://github.com/joaoespdev/Desafio-CRUD-DB",
    altText: "Pessoa Endereço",
  },
  {
    id: 9,
    imagem: "/images/dbportfolio.png",
    titulo: "Meu Portfólio",
    ferramentas: "HTML5, CSS3, React & Typescript",
    textoCard:
      "Este projeto destaca minhas principais competências como desenvolvedor, aliando um design minimalista e responsivo.",
    linkGithub: "https://github.com/joaoespdev/DB-Portfolio",
    altText: "Meu Portfólio",
  },
];
