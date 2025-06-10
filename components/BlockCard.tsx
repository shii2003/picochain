import React from 'react';

type BlockCardProps = {

};

const BlockCard: React.FC<BlockCardProps> = () => {

    return (
        <div className='flex flex-col items-center gap-3 justify-center rounded-md border border-stone-700 p-4 max-w-72'>
            <div className='flex  bg-stone-800 rounded-md px-4 py-3 w-full'>
                Block (1)
            </div>
            <div className='flex flex-col items-start justify-center border-b-2 border-stone-700 rounded-md px-2 py-1 w-full'>
                <p className='text-lg'>Hash</p>
                <p className='text-md'>doeiro9w8erp9w8e9r8we</p>
            </div>
            <div className='flex flex-col items-start justify-center border-b-2 border-stone-700 rounded-md  px-2 py-1 w-full'>
                <p>Hash Of Previous Block</p>
                <p>None</p>
            </div>
            <div className='flex flex-col items-start justify-center border-b-2 border-stone-700 rounded-md px-2 py-1 w-full'>
                <p>TimeStamp</p>
                <p>currentime</p>
            </div>
            <div className='flex mt-3'>
                <button className='flex items-center jitems-start justify-center rounded-md px-4 py-3 w-full bg-orange-700 hover:bg-orange-600'>
                    View Transactions
                </button>
            </div>
        </div>
    )
}
export default BlockCard;