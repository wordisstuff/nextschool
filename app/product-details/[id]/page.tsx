import { fetchProduct } from '@/lib/productsApi';

interface Props {
    params: Promise<{ id: string }>;
}
export default async function Product({ params }: Props) {
    const { id } = await params;
    const product = await fetchProduct(Number(id));
    return (
        <div>
            <h1>{product.title}</h1>
            <p>price: ${product.price}</p>
        </div>
    );
}
