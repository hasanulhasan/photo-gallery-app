import { useQuery } from '@tanstack/react-query';
import SingleTiger from './SingleTiger';

const Tiger = () => {

  const { data: tigers = [] } = useQuery({
    // queryKey: ['tigers'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/animals');
      const data = await res.json();
      return data;
    }
  })

  return (
    <div>
      <div class="text-center text-gray-800 py-6 px-2">
        <h1 class="text-5xl font-bold mt-0 mb-6">Tigers</h1>
      </div>
      <div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {
            tigers.map(tiger => <SingleTiger key={tiger.id} tiger={tiger}></SingleTiger>)
          }
        </div>
      </div>
    </div>
  );
};

export default Tiger;