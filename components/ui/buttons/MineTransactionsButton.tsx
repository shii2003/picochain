import React from 'react';

type MineTransactionsButtonProps = {

};

const MineTransactionsButton: React.FC<MineTransactionsButtonProps> = () => {

    return (
        <button className='flex px-4 py-2 font-semibold rounded-md items-center justify-center bg-orange-600 hover:bg-orange-600/80'>
            Mine Transactions
        </button>
    )
}
export default MineTransactionsButton;