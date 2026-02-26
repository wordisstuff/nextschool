import { fetchCategories } from '@/lib/productsApi';
import Link from 'next/link';

export default async function Sidebar() {
    // await new Promise(r => setTimeout(r, 6000));
    const category = await fetchCategories();
    return (
        <ul>
            {category?.map(i => (
                <li key={i.slug}>
                    <Link href={`/products/${i.slug}`}>{i.name}</Link>
                </li>
            ))}
        </ul>
    );
}
