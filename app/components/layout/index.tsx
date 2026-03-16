import './index.scss';

interface Props {
    children: React.ReactNode,
    className?: string
}

export function Section({ children, className} : Props) {
    return <section className={'kto-layout-section' + ' ' + className}>
        {children}
    </section>
}

export function Container({ children } : Props) {
    return <div className="kto-layout-container">
        {children}
    </div>
}