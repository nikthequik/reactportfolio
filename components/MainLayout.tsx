
import Head from 'next/head';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const MainLayout = ({children}:any) => {
    return (
        <div>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {children}
        </div>
    )
}

export default MainLayout;