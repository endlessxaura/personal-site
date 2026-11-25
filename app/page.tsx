import styles from './app.module.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';

export default function Page() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavbarBrand href="/">
                    <img className={styles.logo} src="favicon.ico" alt="Logo"></img>
                </NavbarBrand>
            </Container>
        </Navbar>
    );
}