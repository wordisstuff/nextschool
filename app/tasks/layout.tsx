interface Props {
    children: React.ReactNode;
    details: React.ReactNode;
}
export default function TasksLayout({ children, details }: Props) {
    return (
        <div style={{ display: 'flex', gap: 20 }}>
            {children} {details}
        </div>
    );
}
