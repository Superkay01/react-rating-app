import styles from "./index.module.css"


function Layout({children}){
    return <div className={styles.wrapper}>{children}</div>
    
}
export default Layout;