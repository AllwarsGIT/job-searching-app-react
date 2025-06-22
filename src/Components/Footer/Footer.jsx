import styles from './Footer.module.css';
import githubLogo from '../../assets/github.svg'; // Adjust the path as necessary

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.iconContainer}>
                    <a className={styles.footerIcon} href='https://github.com/AllwarsGIT'>
                        <img className={styles.footerIcon} src={githubLogo} alt="GitHub logo" />         
                    </a>
                    <p className={styles.footerText}>AllwarsGIT</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;