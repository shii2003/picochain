import MineTransactionsButton from '@/components/ui/buttons/MineTransactionsButton';
import React from 'react';

type pageProps = {

};

const page: React.FC<pageProps> = () => {

    return (
        <div className='flex flex-1 flex-col  items-center justify-center gap-4 overflow-y-auto px-4'>
            <p className='mt-4 text-3xl'> Mine Block</p>

            <MineTransactionsButton />

            <div className='flex flex-col justify-center items-center gap-4 w-full'>
                <p className='flex justify-center items-center w-full text-xl font-semibold '>Pending Transactions</p>
                <div className='flex items-center justify-center'>
                    <table className="min-w-full table-auto border-collapse text-left">
                        <thead className="text-white">
                            <tr className='text-stone-300'>
                                <th className="px-4 py-2 rounded-tl-md bg-orange-400/10">From</th>
                                <th className="px-4 py-2 bg-orange-400/10">To</th>
                                <th className="px-4 py-2 bg-orange-400/10">Amount</th>
                                <th className="px-4 py-2 bg-orange-400/10">TimeStamp</th>
                                <th className="px-4 py-2 rounded-tr-md bg-orange-400/10">Valid</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr

                                className={"bg-stone-900 text-white"}
                            >
                                <td className="px-4 py-2">user1</td>
                                <td className="px-4 py-2">user2</td>
                                <td className="px-4 py-2">20</td>
                                <td className="px-4 py-2">10090 am</td>
                                <td className="px-4 py-2"> yes</td>
                            </tr>
                            <tr

                                className={"bg-stone-800 text-white"}
                            >
                                <td className="px-4 py-2">user1</td>
                                <td className="px-4 py-2">user2</td>
                                <td className="px-4 py-2">20</td>
                                <td className="px-4 py-2">10090 am</td>
                                <td className="px-4 py-2"> yes</td>
                            </tr>
                            <tr

                                className={"bg-stone-900 text-white"}
                            >
                                <td className="px-4 py-2">user1</td>
                                <td className="px-4 py-2">user2</td>
                                <td className="px-4 py-2">20</td>
                                <td className="px-4 py-2">10090 am</td>
                                <td className="px-4 py-2"> yes</td>
                            </tr>
                            <tr

                                className={"bg-stone-800 text-white"}
                            >
                                <td className="px-4 py-2">user1</td>
                                <td className="px-4 py-2">user2</td>
                                <td className="px-4 py-2">20</td>
                                <td className="px-4 py-2">10090 am</td>
                                <td className="px-4 py-2"> yes</td>
                            </tr>
                            <tr

                                className={"bg-stone-900 text-white"}
                            >
                                <td className="px-4 py-2">user1</td>
                                <td className="px-4 py-2">user2</td>
                                <td className="px-4 py-2">20</td>
                                <td className="px-4 py-2">10090 am</td>
                                <td className="px-4 py-2"> yes</td>
                            </tr>
                            <tr

                                className={"bg-stone-800 text-white"}
                            >
                                <td className="px-4 py-2">user1</td>
                                <td className="px-4 py-2">user2</td>
                                <td className="px-4 py-2">20</td>
                                <td className="px-4 py-2">10090 am</td>
                                <td className="px-4 py-2"> yes</td>
                            </tr>
                            <tr

                                className={"bg-stone-900 text-white"}
                            >
                                <td className="px-4 py-2">user1</td>
                                <td className="px-4 py-2">user2</td>
                                <td className="px-4 py-2">20</td>
                                <td className="px-4 py-2">10090 am</td>
                                <td className="px-4 py-2"> yes</td>
                            </tr>
                            <tr

                                className={"bg-stone-800 text-white"}
                            >
                                <td className="px-4 py-2">user1</td>
                                <td className="px-4 py-2">user2</td>
                                <td className="px-4 py-2">20</td>
                                <td className="px-4 py-2">10090 am</td>
                                <td className="px-4 py-2"> yes</td>
                            </tr>
                            <tr

                                className={"bg-stone-900 text-white"}
                            >
                                <td className="px-4 py-2">user1</td>
                                <td className="px-4 py-2">user2</td>
                                <td className="px-4 py-2">20</td>
                                <td className="px-4 py-2">10090 am</td>
                                <td className="px-4 py-2"> yes</td>
                            </tr>
                            <tr

                                className={"bg-stone-800 text-white"}
                            >
                                <td className="px-4 py-2">user1</td>
                                <td className="px-4 py-2">user2</td>
                                <td className="px-4 py-2">20</td>
                                <td className="px-4 py-2">10090 am</td>
                                <td className="px-4 py-2"> yes</td>
                            </tr>
                            <tr

                                className={"bg-stone-900 text-white"}
                            >
                                <td className="px-4 py-2">user1</td>
                                <td className="px-4 py-2">user2</td>
                                <td className="px-4 py-2">20</td>
                                <td className="px-4 py-2">10090 am</td>
                                <td className="px-4 py-2"> yes</td>
                            </tr>
                            <tr

                                className={"bg-stone-800 text-white"}
                            >
                                <td className="px-4 py-2">user1</td>
                                <td className="px-4 py-2">user2</td>
                                <td className="px-4 py-2">20</td>
                                <td className="px-4 py-2">10090 am</td>
                                <td className="px-4 py-2"> yes</td>
                            </tr>
                            <tr

                                className={"bg-stone-900 text-white"}
                            >
                                <td className="px-4 py-2">user1</td>
                                <td className="px-4 py-2">user2</td>
                                <td className="px-4 py-2">20</td>
                                <td className="px-4 py-2">10090 am</td>
                                <td className="px-4 py-2"> yes</td>
                            </tr>
                            <tr

                                className={"bg-stone-800 text-white"}
                            >
                                <td className="px-4 py-2">user1</td>
                                <td className="px-4 py-2">user2</td>
                                <td className="px-4 py-2">20</td>
                                <td className="px-4 py-2">10090 am</td>
                                <td className="px-4 py-2"> yes</td>
                            </tr>
                            <tr

                                className={"bg-stone-900 text-white"}
                            >
                                <td className="px-4 py-2">user1</td>
                                <td className="px-4 py-2">user2</td>
                                <td className="px-4 py-2">20</td>
                                <td className="px-4 py-2">10090 am</td>
                                <td className="px-4 py-2"> yes</td>
                            </tr>
                            <tr

                                className={"bg-stone-800 text-white"}
                            >
                                <td className="px-4 py-2">user1</td>
                                <td className="px-4 py-2">user2</td>
                                <td className="px-4 py-2">20</td>
                                <td className="px-4 py-2">10090 am</td>
                                <td className="px-4 py-2"> yes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default page;