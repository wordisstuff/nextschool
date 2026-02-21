import { fetchProducts } from '@/lib/productsApi';
import Link from 'next/link';

export default async function Products() {
    // await new Promise(r => setTimeout(r, 4000));

    const products = await fetchProducts();
    console.log(products);

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
