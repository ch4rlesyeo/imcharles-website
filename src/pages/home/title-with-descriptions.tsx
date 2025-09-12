import Text from '@/components/text';

const TitleWithDescriptions: FC = () => {
  return (
    <>
      <Text className="text-2xl font-medium">Charles Yeo</Text>
      <div className="py-1">
        <Text className="text-sm text-zinc-400 dark:text-zinc-400">
          {`Software engineer specializing in creating web and mobile
          apps using React.js and React Native.`}
        </Text>
      </div>
    </>
  );
};

export default TitleWithDescriptions;
