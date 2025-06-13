import Link from 'next/link';
import React from 'react';

type LoginButtonProps = {

};

const LoginButton: React.FC<LoginButtonProps> = () => {

    return (
        <Link
            href='/login'
        >
            <button
                className='rounded-md px-3 py-2 font-semibold bg-gradient-to-b from-orange-200 to-orange-800 text-stone-200 hover:bg-gradient-to-b hover:from-orange-300 hover:to-orange-700'
            >
                Login
            </button>
        </Link>
    )
}
export default LoginButton;