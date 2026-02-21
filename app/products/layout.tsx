import { Suspense } from 'react';

export default function ProductsLayout({
    children,
    sidebar,
    modal,
}: Readonly<{
    children: React.ReactNode;
    sidebar: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <div style={{ display: 'flex', gap: 20 }}>
            <Suspense fallback={<div>LOADING CATEGORIES...</div>}>
                {sidebar}
            </Suspense>
            {children}
            {modal}
        </div>
    );
}
