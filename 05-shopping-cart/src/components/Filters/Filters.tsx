import './Filters.css';

export type FiltersProps = {};

const Filters: React.FC<FiltersProps> = ({}) => {
  return (
    <div className='filters'>
      <label>
        <span>Min Price</span>
        <input type='range' min={0} max={1000} />
      </label>

      <label>
        <span>Category</span>

        <select>
          <option value='all'>All</option>
          <option value='fragrances'>Fragrances</option>
          <option value='groceries'>Groceries</option>
          <option value='home-decoration'>Home Decoration</option>
          <option value='laptops'>Laptops</option>
          <option value='skincare'>Skincare</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;
