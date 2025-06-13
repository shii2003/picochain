import React, { useState } from 'react';

type pageProps = {

};

type FormData = {
    email: string;
    password: string;
}

const page: React.FC<pageProps> = () => {

    const formData = useState<FormData>({ email: "", password: "" });

    return <div className='flex items-center justify-center h-full '>

        <form className='flex items-center justify-center max-w-96'>
            <div className='flex items-center justify-center'>
                Login
            </div>
            <div className=''>
                <label
                    htmlFor='email'
                >
                    Email
                </label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value=
                >
                </input>
            </div>
        </form>
    </div>
}
export default page;