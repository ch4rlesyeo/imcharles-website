import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';

const Footer: FC = () => {
  return (
    <div className="flex flex-row justify-between px-4 my-4">
      <div />
      <div />
      <div className="flex flex-row gap-4">
        <a href="https://www.instagram.com/charlesyeo92/" target="__blank">
          <IoLogoInstagram size={24} />
        </a>
        <a
          href="https://github.com/ch4rlesyeo/imcharles-website"
          target="__blank"
        >
          <IoLogoGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/charles-yeo-9125b6138/"
          target="__blank"
        >
          <IoLogoLinkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
