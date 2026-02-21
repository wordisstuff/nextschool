import { fetchCategories } from '@/lib/productsApi';

export default async function Sidebar() {
    // await new Promise(r => setTimeout(r, 6000));
    const category = await fetchCategories();
    return (
        <ul>
            {category?.map(i => (
                <li key={i.slug}>{i.name}</li>
            ))}
        </ul>
    );
}
