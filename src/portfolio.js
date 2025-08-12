/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Portfolio | Caio Monteiro",
};

//Home Page
const greeting = {
  title: "Caio Monteiro",
  logo_name: "CaioMonteiro",
  nickname: "CaioMonteir0",
  subTitle:
    "A jornada de um desenvolvedor é sempre uma jornada de aprendizagem, onde o conhecimento é a chave para o sucesso.",

  portfolio_repository: "https://github.com/CaioMonteir0",
  githubProfile: "https://github.com/CaioMonteir0",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/CaioMonteir0",
  // linkedin: "https://www.linkedin.com/in/caio-araujo-4ab4591b8/",
  // gmail: "caiomonteirooeng@gmail.com",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/CaioMonteir0",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/caio-araujo-4ab4591b8/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:caiomonteirooeng@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Desenvolvimento Full Stack",
      fileName: "FullStackImg",
      skills: [
        "⚡ Construindo front-end de site responsivo usando React-Redux",
        "⚡ Manutenções e desenvolvimento de funcionalidades em sistemas legados baseados em JSF e Java",
        "⚡ Integração de bancos de dados com Java (JPA/Hibernate, JDBC) e Oracle",
        "⚡ Gerenciamento de containers (Docker) com Docker Compose",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "Java",
          imageSrc: "java.png",
          style: { width: "48px", height: "48px" },
        },
        {
          skillName: "JSF",
          imageSrc: "jsf.png",
          style: { width: "48px", height: "48px" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "Centro Universitário Maurício de Nassau",
      subtitle: "Análise e Desenvolvimento de sistemas",
      logo_path: "uninassau.png",
      alt_name: "Centro Universitário Maurício de Nassau",
      duration: "2024 - 2026",
      descriptions: [
        "⚡ Estudo de fundamentos de programação, engenharia de software, banco de dados, redes de computadores e arquitetura de sistemas.",
        "⚡ Desenvolvimento de aplicações web e desktop utilizando linguagens e frameworks modernos.",
        "⚡ Prática em análise, modelagem e otimização de sistemas, visando soluções eficientes e escaláveis.",
      ],
      website_link: "https://www.uninassau.edu.br/",
    },
    {
      title: "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
      subtitle: "Engenharia de Controle e Automação",
      logo_path: "ifce.png",
      alt_name: "Instituto Federal de Educação, Ciência e Tecnologia do Ceará",
      duration: "2021 - 2026",
      descriptions: [
        "⚡ Estudo de sistemas de controle, automação industrial, robótica, eletrônica, instrumentação e programação aplicada.",
        "⚡ Desenvolvimento e implementação de projetos envolvendo microcontroladores, sensores, atuadores e integração de sistemas.",
        "⚡ Experiência em modelagem, simulação e otimização de processos industriais utilizando ferramentas de engenharia.",
      ],
      website_link: "https://ifce.edu.br/maracanau",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experiência",
  description:
    "Trabalhei na Empresa de Tecnologia e Informações da Previdência (Dataprev), onde desenvolvi soluções de tecnologia para o INSS utilizando linguagens como Java, TypeScript, React.JS,  entre outras.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Trabalho",
      work: true,
      experiences: [
        {
          title: "Desenvolvedor Full Stack",
          company: "Dataprev",
          company_url: "https://dataprev.gov.br/",
          logo_path: "Logo_dataprev.png",
          duration: "Setembro de 2023 - Setembro de 2025",
          location: "Fortaleza, CE",
          description:
            "Fui responsável por correções e novas implementações no Portal de Atendimento do INSS, promovendo melhorias contínuas na experiência do usuário e na performance da aplicação. Também realizei manutenções e desenvolvimento de funcionalidades em sistemas legados baseados em JSF e Java, garantindo a continuidade e estabilidade desses serviços.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projetos",
  description:
    "Estes são alguns projetos pessoais e de estudo que eu desenvolvi para melhorar minhas habilidades e conhecimentos. ",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
