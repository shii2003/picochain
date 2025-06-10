import React from 'react';

type SignupButtonProps = {

};

const SignupButton: React.FC<SignupButtonProps> = () => {

    return (
        <button className='rounded-md px-3 py-2 font-semibold bg-gradient-to-b from-orange-200 to-orange-800 text-stone-200 hover:bg-gradient-to-b hover:from-orange-300 hover:to-orange-700'>
            Signup
        </button>
    )
}
export default SignupButton;