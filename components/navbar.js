import Link from "next/link"
import { useRouter } from "next/router"
import Toggle from "./toggle"

const Navbar = ({ links }) => {
    const router = useRouter()

    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-3 mx-auto">
                <div className="text-center relative">
                    <Link href={'/'}>
                        <a className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">Makan Enak</a>
                    </Link>
                    <Toggle />
                </div>

                <div className="py-3 mt-3 -mx-3 overflow-y-auto whitespace-nowrap scroll-hidden">
                    {links?.map((item, index) => (
                        <Link href={`/category/${item.key}`} key={index}>
                            <a className={`mx-4 text-sm leading-5 text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0 ${router.asPath == `/${item.key}` ? 'underline' : ''}`}>{item.category}</a>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}
export default Navbar