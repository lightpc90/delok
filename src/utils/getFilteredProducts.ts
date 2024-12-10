// utils/filterProducts.ts
import { Car, SearchPropsType } from "@/types/types";

export const getFilteredProducts = (products: Car[], filters: SearchPropsType): Car[] => {
    return products.filter((product) => {
        // Filter by search query
        if (filters.searchQuery && !product.name.toLowerCase().includes(filters.searchQuery.toLowerCase())) {
            return false;
        }

        // Filter by used_mode
        if (filters.usedType !== "all" && product.usedType !== filters.usedType) {
            return false;
        }

        // Filter by budget_range
        if (filters.budget && product.priceRange !== filters.budget) {
            return false;
        }

        // Filter by car_make
        if (filters.makes.length > 0 && !filters.makes.includes(product.make)) {
            return false;
        }

        return true;
    });
};
