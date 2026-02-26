import { fetchCategories } from '@/lib/productsApi';
import Link from 'next/link';

export default async function Header() {
    const categories = await fetchCategories();

    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href={`/products/${categories[0].slug}`}>Products</Link>
            </li>
            <li>
                <Link href="/posts">Posts</Link>
            </li>
            <li>
                <Link href="/tasks">Tasks</Link>
            </li>
        </ul>
    );
}
