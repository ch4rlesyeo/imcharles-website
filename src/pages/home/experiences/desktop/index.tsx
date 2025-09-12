import { profiles } from '../data';

import DesktopProfileSelector from './profile-selector';

const DesktopExperiences: FC = () => {
  return (
    <div>
      {profiles.map((profile) => {
        return <DesktopProfileSelector key={profile.company} {...profile} />;
      })}
    </div>
  );
};

export default DesktopExperiences;
