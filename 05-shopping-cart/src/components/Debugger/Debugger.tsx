import { useFilters } from '@/hooks/useFilters';
import './Debugger.css';

type DebuggerProps = {};

const Debugger: React.FC<DebuggerProps> = ({}) => {
  const { filters } = useFilters();

  return (
    <div className='debugger'>
      <p>{JSON.stringify(filters, null, 2)}</p>
    </div>
  );
};

export default Debugger;
