import axios from 'axios';
import { Product } from './types';

interface ProductResponse {
    products: Product[];
}

interface Category {
    name: string;
    slug: string;
}

export const fetchProducts = async (category: string): Promise<Product[]> => {
    const { data } = await axios.get<ProductResponse>(
        `https://dummyjson.com/products/category/${category}`,
    );
    return data.products;
};

export const fetchProduct = async (id: Product['id']) => {
    const { data } = await axios.get<Product>(
        `https://dummyjson.com/products/${id}`,
    );
    return data;
};

export const fetchCategories = async () => {
    const { data } = await axios.get<Category[]>(
        `https://dummyjson.com/products/categories`,
    );
    return data;
};
