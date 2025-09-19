'use client';

import { CSSProperties } from 'react';

import {
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from '@/components/ui/drawer';
import { IProfileSelectorProps } from '@/types/data/experiences/profile';

interface ICustomStyles {
  content: CSSProperties;
  company: CSSProperties;
  description: CSSProperties;
}

const customStyles: ICustomStyles = {
  content: { minHeight: '40vh', maxHeight: '60vh', overflow: 'auto' },
  company: { marginTop: 2 },
  description: { lineHeight: 1.8, marginTop: '1rem' }
};

const ProfileContent: FC<IProfileSelectorProps> = (props) => {
  const { company, jobTitle, rangeDetail, descriptions } = props;

  return (
    <DrawerContent>
      <div className="px-4 py-4" style={customStyles.content}>
        <DrawerHeader className="hidden">
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col">
          <div className="text-base font-semibold">{jobTitle}</div>
          <div className="text-xs text-zinc-400" style={customStyles.company}>
            {company} ({rangeDetail})
          </div>
        </div>
        {descriptions.map(({ description, details }, index) => {
          return (
            <div
              key={index.toString()}
              className="text-xs"
              style={customStyles.description}
            >
              <div>{description}</div>
              <ul className="list-disc" style={{ paddingInlineStart: '2rem' }}>
                {details?.map((detail, detailIndex) => {
                  return (
                    <li key={detailIndex.toString()} className="mt-2">
                      {detail}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <DrawerFooter>
        <div>Footer here</div>
      </DrawerFooter>
    </DrawerContent>
  );
};

export default ProfileContent;
