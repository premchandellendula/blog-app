export const BlogSkeleton = () => {
    return <div role="status" className="animate-pulse">
            <div className="border-b-2 border-gray-100 pb-3 p-3 w-screen max-w-screen-md cursor-pointer">
                <div className="flex">
                    <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                </div>

                <div className="text-xl font-semibold pt-2">
                    <div className="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
                </div>

                <div className="text-md font-normal">
                    <div className="h-2 bg-gray-200 rounded-full max-w-[430px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[400px] mb-2.5"></div>
                </div>

                <div className="text-gray-600 text-sm font-normal pt-3">
                    <div className="h-2 bg-gray-200 rounded-full max-w-[100px]"></div>
                </div>
            </div>
        <span className="sr-only">Loading...</span>
    </div>
}