import Image from "next/image"

const Detail = ({ resep }) => {
    return (
        <div className="w-full overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="w-full h-64 relative">
                {resep && <Image priority src={resep.thumb} layout={'fill'} objectFit='cover' objectPosition={'center'} alt={resep?.title} />}
            </div>

            <div className="p-6">
                <div>
                    <div className="flex justify-start items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 mr-3">{resep?.difficulty}</span>
                        <div className="flex items-center text-gray-700 dark:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h1 className="px-2 text-sm">{resep?.times}</h1>
                        </div>

                        <div className="flex items-center text-gray-700 dark:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                            </svg>
                            <h1 className="px-2 text-sm">{resep?.servings}</h1>
                        </div>
                    </div>
                    <p className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white">{resep?.title}</p>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-black dark:text-white">
                        <div>
                            <p className="font-semibold text-gray-700 dark:text-gray-200">Bahan-bahan :</p>
                            <ol className="list-disc list-outside ml-4">
                                {resep?.ingredient?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ol>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700 dark:text-gray-200">Bahan tambahan :</p>
                            <ol className="list-disc list-outside ml-4">
                                {resep?.needItem?.map((item, index) => (
                                    <li key={index}>{item.item_name}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <p className="font-semibold text-gray-700 dark:text-gray-200 mt-4">Cara memasak :</p>
                    <ol className="list-decimal list-outside ml-4">
                        {resep?.step?.map((item, index) => (
                            <li key={index}>{item.slice(1)}</li>
                        ))}
                    </ol>
                </div>

                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <p className="font-semibold text-gray-700 dark:text-gray-200">{resep?.author.user}</p>
                        </div>
                        <span className="mx-3 text-xs text-gray-600 dark:text-gray-300">{resep?.author.datePublished}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail