import { IProfileSelectorProps } from '../types';

const ProfileContent: FC<IProfileSelectorProps> = (props) => {
  const { company, jobTitle, range } = props;

  return (
    <div className="flex flex-col items-center">
      <div className="text-lg">{company}</div>
      <div className="pt-2 text-sm text-zinc-400">{jobTitle}</div>
      <div className="pt-2 text-sm text-zinc-400">{range}</div>
    </div>
  );
};

export default ProfileContent;
