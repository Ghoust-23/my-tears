import { Header, Sidebar } from "../../widgets"
import { LayoutProps } from "./layout.types"
import s from './layout.module.scss'
export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={s.container}>
            <div className={s.header}><Header /></div>
            <div className={s.sidebar}><Sidebar /></div>
            <div className={s.content}>{children}</div>
        </div>
    )
}
