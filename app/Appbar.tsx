import React from 'react';
import Image from 'next/image';
import LoginButton from '@/components/ui/buttons/LoginButton';
import SignupButton from '@/components/ui/buttons/SignupButton';

type AppbarProps = {

};

const Appbar: React.FC<AppbarProps> = () => {

    return (
        <div className='flex h-18 w-full justify-between items-center border-b border-stone-800 px-3 py-2'>
            <div className='flex gap-4'>
                <div className='w-6 h-6 rounded-full overflow-hidden'>
                    <Image
                        src="/picochain.svg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
                <p className='text-2xl font-semibold'>
                    PICOCHAIN
                </p>
            </div>
            <div className='flex gap-2 mr-8'>
                <LoginButton />
                <SignupButton />
            </div>
        </div>
    )
}
export default Appbar;