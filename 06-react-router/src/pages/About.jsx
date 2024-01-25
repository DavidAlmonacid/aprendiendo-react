import { Link } from "../components";

const i18n = {
  es: {
    title: "Acerca de",
    content: "Esta es la página acerca de nosotros",
    buttonText: "Ir a la página de inicio",
  },
  en: {
    title: "About",
    content: "This is the about page",
    buttonText: "Go to home page",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

const About = ({ routeParams }) => {
  const { title, content, buttonText } = useI18n(routeParams.lang);

  return (
    <>
      <h1>{title}</h1>

      <p>{content}.</p>

      <Link to="/">{buttonText}</Link>
    </>
  );
};

export default About;
