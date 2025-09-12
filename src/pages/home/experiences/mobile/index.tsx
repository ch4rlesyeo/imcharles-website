import { profiles } from '../data';

import MobileProfileSelector from './profile-selector';

const MobileExperiences: FC = () => {
  return (
    <div>
      {profiles.map((profile) => {
        return <MobileProfileSelector key={profile.company} {...profile} />;
      })}
    </div>
  );
};

export default MobileExperiences;
