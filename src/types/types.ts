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
    model: 'all';
    year: 'all';
};