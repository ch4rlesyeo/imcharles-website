import { IProfileSelectorProps } from '../types';

const MobileProfileSelector: FC<IProfileSelectorProps> = (props) => {
  const { company, jobTitle, range } = props;

  return (
    <div className="cursor-pointer">
      <div className="flex justify-start items-center py-3 border-b border-zinc-200 dark:border-zinc-800">
        <div className="w-full text-xs">
          <div>{jobTitle}</div>
          <div className="pt-[2px] text-zinc-400">{company}</div>
        </div>
        <div className="w-[120px] text-xs text-right">{range}</div>
      </div>
    </div>
  );
};

export default MobileProfileSelector;
