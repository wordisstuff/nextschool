'use client';

import { fetchPost } from '@/lib/postsApi';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export default function PostClient() {
    const { id } = useParams<{ id: string }>();
    const { data } = useQuery({
        queryKey: ['post'],
        queryFn: () => fetchPost(Number(id)),
        refetchOnMount: false,
    });

    return (
        <div>
            <h1>{data?.title}</h1>
            <p>{data?.body}</p>
        </div>
    );
}
