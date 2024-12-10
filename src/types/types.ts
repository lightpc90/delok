export type Car = {
    id: number;
    name: string;
    image: string;
    price: string;
    priceRange: string;
    make: string;
    model: string;
    usedType: string;
    location: string;
    year: string;
    transmission: string;
    fuel: string;
    body: string;
    color: string;
    engine: string;
    doors: string;
    seats: string;
    interior: string;
    exterior: string;
    interiorColor: string;
    mileage: string;
}

export type SearchPropsType = {
    usedType: 'all' | "Nigerian used" | "Foreign used" | "New";
    makes: string[]; // This allows an array of strings of any length, including an empty array.
    budget: string;
    searchQuery: string;
};

export type Filters = {
    searchQuery: string;
    used_mode: "Nigerian_used" | "Foreign_used" | "all" | "New";
    budget_range: { min: number; max: number } | null;
    car_make: string[];
    category: string | null;
};

export type Product = {
    id: number;
    name: string;
    price: number;
    used_mode: "Nigerian_used" | "Foreign_used";
    car_make: string;
    category: string;
};