'use client';

import css from './Modal.module.css';

interface Props {
    children: React.ReactNode;
}
export default function Modal({ children }: Props) {
    return (
        <div className={css.backdrop}>
            <div className={css.modal}>
                {children}
                <button className={css.closeBtn}></button>
            </div>
        </div>
    );
}
