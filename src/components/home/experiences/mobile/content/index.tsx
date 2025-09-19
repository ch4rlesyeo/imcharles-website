'use client';

import { CSSProperties } from 'react';

import {
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle
} from '@/components/ui/drawer';
import { IProfileSelectorProps } from '@/types/data/experiences/profile';

import MobileContentDescriptions from './descriptions';

const companyStyles: CSSProperties = { marginTop: 2 };
const contentStyles: CSSProperties = {
  minHeight: '50vh',
  maxHeight: '70vh',
  overflow: 'auto'
};

const ProfileContent: FC<IProfileSelectorProps> = (props) => {
  const { company, jobTitle, rangeDetail, descriptions } = props;

  return (
    <DrawerContent>
      <div className="px-4 py-4" style={contentStyles}>
        <DrawerHeader className="hidden">
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col">
          <div className="text-base font-semibold">{jobTitle}</div>
          <div className="text-xs text-zinc-400 mt-2" style={companyStyles}>
            {company} ({rangeDetail})
          </div>
        </div>
        {descriptions.map((description, index) => {
          return (
            <MobileContentDescriptions
              key={index.toString()}
              {...description}
            />
          );
        })}
      </div>
    </DrawerContent>
  );
};

export default ProfileContent;
