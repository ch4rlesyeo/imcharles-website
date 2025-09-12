import Experiences from './experiences';
import TitleWithDescriptions from './title-with-descriptions';

const HomePage: FC = () => {
  return (
    <div className="px-4">
      <TitleWithDescriptions />
      <div className="py-6">
        <Experiences />
      </div>
    </div>
  );
};

export default HomePage;
