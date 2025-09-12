import { Skeleton } from '@/components/ui/skeleton';

const Component: FC = () => {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-[80%]" />
      <Skeleton className="h-4 w-[80%]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  );
};

export default Component;
