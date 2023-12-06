

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-full py-36'>
            <div className='flex justify-center items-center h-full'>
                <p className='text-7xl font-bold'>L</p>
                <p className='w-10 h-10 border-8 rounded-full animate-spin border-dashed mt-6 border-fuchsia-600'> </p>
                <p className='text-7xl font-bold'>ading</p>
                <p className='border-4 mt-10 border-fuchsia-600 border-dotted  animate-pulse mx-1'></p>
                <p className='border-4 mt-10 border-fuchsia-600 border-dotted  animate-pulse mx-1'></p>
                <p className='border-4 mt-10 border-fuchsia-600 border-dotted  animate-pulse mx-1'></p>
                <p className='border-4 mt-10 border-fuchsia-600 border-dotted  animate-pulse mx-1'></p>
            </div>

        </div>
    );
};

export default Loading;