'use client';

import { useDeviceProvider } from '@/providers/device-provider';

import ExperiencesDesktop from './desktop';
import ExperiencesMobile from './mobile';

const Experiences: FC = () => {
  const { isMobile } = useDeviceProvider();

  return isMobile ? <ExperiencesMobile /> : <ExperiencesDesktop />;
};

export default Experiences;
