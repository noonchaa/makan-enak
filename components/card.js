import Image from "next/image"

const Card = ({ content }) => {
    return (
        <div className="max-w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="w-full h-56 relative">
                <Image src={content.thumb} layout={'fill'} objectFit='cover' objectPosition={'center'} alt={content.key} />
            </div>
            {/* <img className="object-cover object-center w-full h-56" src={content.thumb} alt="avatar" /> */}

            <div className="flex items-center px-6 py-3 bg-gray-900">
                <h1 className="text-lg font-semibold text-white">{content.difficulty}</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{content.title}</h1>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className="px-2 text-sm">{content.times}</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                    </svg>
                    <h1 className="px-2 text-sm">{content.serving}</h1>
                </div>
            </div>
        </div>
    )
}

export default Card