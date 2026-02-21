import Link from 'next/link';

export default function Header() {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/products">Products</Link>
            </li>
            <li>
                <Link href="/posts">Posts</Link>
            </li>
        </ul>
    );
}
