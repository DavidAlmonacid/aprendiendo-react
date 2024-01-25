import { FiltersContext } from "@/context/FiltersContext.tsx";
import { Product } from "@/types";
import { useContext } from "react";

export const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products: Product[]) => {
    return products.filter(
      (product) =>
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category),
    );
  };

  return { filterProducts, filters, setFilters };
};
