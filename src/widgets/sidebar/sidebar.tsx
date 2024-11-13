import s from './sidebar.module.scss'
import logo from './../../../src/assets/pictures/logo.png'
export const Sidebar = () => {
    return (
        <aside>
            <div className={s.sidebar_header}>
                <img src={logo} className={s.sidebar_logo}/>
                <div className={s.sidebar_text}>Project M.</div>
            </div>
            <div className={s.sidebar_content}>Sidebar-Content</div>
        </aside>
    )
}