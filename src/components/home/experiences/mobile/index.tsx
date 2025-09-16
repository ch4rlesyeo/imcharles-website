import { profiles } from '@/data/experiences/profile';

import MobileProfileSelector from './profile-selector';

const MobileExperiences: FC = () => {
  return (
    <div>
      <div className="pt-1 hidden" />
      {profiles.map((profile) => {
        return <MobileProfileSelector key={profile.company} {...profile} />;
      })}
    </div>
  );
};

export default MobileExperiences;
