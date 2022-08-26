import Link from "next/link"

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 sm:flex-row">
            <Link href={'/'}>
                <a href="#" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Makan Enak</a>
            </Link>

            <p className="py-2 text-gray-800 dark:text-white sm:py-0">All rights reserved</p>
        </footer>
    )
}

export default Footer