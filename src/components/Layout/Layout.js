import Head from '@components/Head';
import Nav from '@components/Nav';
import Main from '@components/Main';
import Footer from '@components/Footer';

import styles from './Layout.module.scss';

const Layout = ({ children, displayNav = true }) => {
  return (
    <div className={styles.layoutContainer} data-with-nav={displayNav}>
      <Head />

      {displayNav && <Nav />}

      <Main>{ children }</Main>

      <Footer />
    </div>
  )
}

export default Layout;