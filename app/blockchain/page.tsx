import BlockCard from '@/components/BlockCard';
import React from 'react';

type pageProps = {

};

const page: React.FC<pageProps> = () => {

    return (
        <div className='flex flex-col w-full h-full px-4 py-2 '>
            <div className='text-xl font-semibold mt-4 mb-4'>Current Verified Blockchain</div>
            <div className='flex'>
                <BlockCard />
            </div>
        </div>
    )
}
export default page;