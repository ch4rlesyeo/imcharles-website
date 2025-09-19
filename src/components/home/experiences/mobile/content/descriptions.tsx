import { CSSProperties } from 'react';

import { IProfileDescription } from '@/types/data/experiences/profile';

const customStyles: CSSProperties = { lineHeight: 1.8, marginTop: '1rem' };

const MobileContentDescriptions: FC<IProfileDescription> = (props) => {
  const { description, details } = props;

  return (
    <div className="text-xs" style={customStyles}>
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
};

export default MobileContentDescriptions;
