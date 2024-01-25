import { useFilters } from "@/hooks/useFilters";
import "./Filters.css";

const Filters: React.FC = () => {
  const { filters, setFilters } = useFilters();

  const handleChangeMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      minPrice: parseInt(event.target.value)
    }));
  };

  const handleChangeCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilters((prev) => ({
      ...prev,
      category: event.target.value
    }));
  };

  return (
    <div className="filters">
      <label>
        <span>Min Price:</span>
        <input
          type="range"
          min={0}
          max={1000}
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </label>

      <label>
        <span>Category</span>

        <select onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="fragrances">Fragrances</option>
          <option value="groceries">Groceries</option>
          <option value="home-decoration">Home Decoration</option>
          <option value="laptops">Laptops</option>
          <option value="skincare">Skincare</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;
