import BlockCard from '@/components/ui/card/BlockCard';
import React from 'react';

type pageProps = {

};

const page: React.FC<pageProps> = () => {

    return (
        <div className='flex flex-col w-full h-full px-4 py-2 '>
            <div className='text-3xl font-semibold mt-4 mb-4'>Current Verified Blockchain</div>
            <div className='flex gap-7 mt-3'>
                <BlockCard />
                <BlockCard />
                <BlockCard />
            </div>
        </div>
    )
}
export default page;