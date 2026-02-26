import { fetchProducts } from '@/lib/productsApi';
import Link from 'next/link';

interface ProductsProps {
    params: Promise<{ slug: string[] }>;
}

export default async function Products({ params }: ProductsProps) {
    // await new Promise(r => setTimeout(r, 4000));
    const { slug } = await params;
    const category = slug[0];
    const products = await fetchProducts(category);

    return (
        <ul>
            {products.map(item => (
                <li key={item.id}>
                    <Link href={`/product-details/${item.id}`}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
