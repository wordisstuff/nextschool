'use client';

import { fetchPosts } from '@/lib/postsApi';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function PostsClient() {
    const { data } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        refetchOnMount: false,
    });

    console.log(data);

    return (
        <ul>
            {data?.map(item => (
                <li key={item.id}>
                    <Link href={`/posts/${item.id}`}>{item.title}</Link>
                </li>
            ))}
        </ul>
    );
}
