import React from 'react';

type pageProps = {

};

const page: React.FC<pageProps> = () => {

    return (
        <div className='flex flex-col  w-full items-center justify-center '>
            <div className='flex flex-col mt-3'>
                <p className='text-3xl px-4  '>Create  a Secure Transaction</p>
            </div>
            <div className='flex w-full flex-col max-w-[550px]'>
                <div className='flex flex-col gap-2 px-3 py-3 mt-5'>
                    <p>Sender</p>
                    <div className='border font-semibold rounded-md border-stone-700 bg-stone-800/40 px-4 py-2 text-stone-400'>username</div>
                    <p className='text-sm text-stone-400 px-2'>this is your username and funds will come from wallet address.</p>
                </div>
                <div className='flex flex-col gap-2 px-3 py-3'>
                    <p>Reciever</p>
                    <input
                        className='border font-semibold rounded-md border-stone-700 bg-stone-800/40 px-4 py-2 text-stone-400'
                    />

                    <p className='text-sm text-stone-400 px-2'>this is your username and funds will come from wallet address.</p>
                </div>
                <div className='flex flex-col gap-2 px-3 py-3'>
                    <p>Amount</p>
                    <input
                        className='border font-semibold rounded-md border-stone-700 bg-stone-800/40 px-4 py-2 text-stone-400'
                    />
                </div>
                <div className='flex items-center justify-center mt-4'>
                    <button
                        className='flex items-center justify-center  px-3 py-2 rounded-md max-w-45 bg-gradient-to-t from-orange-400 to-orange-700 hover:bg-gradient-to-t hover:from-orange-400 hover:to-orange-600 font-semibold'
                    >
                        Make Transaction
                    </button>
                </div>
            </div>
        </div>
    )
}
export default page;