import Modal from '@/components/Modal/Modal';
import { fetchProduct } from '@/lib/productsApi';

interface Props {
    params: Promise<{ id: string }>;
}
export default async function ProdactDetailsModal({ params }: Props) {
    const { id } = await params;
    const product = await fetchProduct(Number(id));
    console.log(product);
    return (
        <div>
            <Modal>
                <h1>{product.title}</h1>
                <p>price: ${product.price}</p>
            </Modal>
        </div>
    );
}
