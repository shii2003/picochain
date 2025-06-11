import React from 'react';

type pageProps = {

};

const page: React.FC<pageProps> = () => {

    return (
        <div className='flex items-start justify-start h-full ml-9 px-4 py-2 mt-5'>
            <div className='flex flex-col items-center justify-center gap-4 w-[500px]'>
                <p className='text-3xl font-semibold'>My Account</p>
                <div className='flex flex-col gap-2 w-full'>
                    <p className='font-semibold text-lg'>Name</p>
                    <div className='border border-stone-700 bg-stone-800/30 bg-opacity-40 px-3 py-2 rounded-md text-stone-300'>jhon</div>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <p className='font-semibold text-lg'>Username</p>
                    <div className='border border-stone-700 bg-stone-800/30 px-3 py-2 rounded-md text-stone-300'>jhoneDoeisbop</div>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <p className='font-semibold text-lg'>Email</p>
                    <div className='border border-stone-700 bg-stone-800/30 px-3 py-2 rounded-md text-stone-300'>jhoncutebop@jane.com</div>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <p className='font-semibold text-lg'>Key</p>
                    <div className='border border-stone-700 bg-stone-800/30 px-3 py-2 rounded-md text-stone-300'>jhon</div>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <p className='font-semibold text-lg'>Balance</p>
                    <div className='border border-stone-700 bg-stone-800/30 px-3 py-2 rounded-md text-stone-300'>100</div>
                </div>
            </div>
        </div>
    )
}
export default page;