import Head from "next/head"

const Layout = ({ children, title, desc }) => {
    return (
        <>
            <Head>
                <title>{title ? title : 'Makan Enak'}</title>
                <meta name="description" content={desc ? desc : 'Masak apa hari ini'} />
            </Head>
            <main className="w-full min-h-screen bg-gray-200 dark:bg-gray-700">
                {children}
            </main>
        </>
    )
}
export default Layout