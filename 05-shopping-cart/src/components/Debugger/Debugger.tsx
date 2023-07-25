import { useFilters } from '@/hooks/useFilters';
import './Debugger.css';

const Debugger: React.FC = () => {
  const { filters } = useFilters();

  return (
    <div className='debugger'>
      <p>{JSON.stringify(filters, null, 2)}</p>
    </div>
  );
};

export default Debugger;
