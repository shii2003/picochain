"use client";
import React from 'react';
import { MdHome } from "react-icons/md";
import { IoCubeSharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { TbShovel } from "react-icons/tb";
import { FaCircleNodes } from "react-icons/fa6";
import { RiAccountCircleFill } from 'react-icons/ri';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type SidebarProps = {

};

const Sidebar: React.FC<SidebarProps> = () => {

    const pathname = usePathname();

    const isActive = (segment: string) => pathname.includes(segment);

    return <div className='flex h-full flex-col w-64 border-r border-stone-800 gap-3 px-4 py-2'>
        <Link href="/home">
            <div
                className={`flex mt-4 items-center gap-4  p-2 rounded-md hover:bg-stone-800/75 ${isActive("home") ? "bg-stone-800" : ""}`}
            >
                <p>Home</p>
                <MdHome />
            </div>
        </Link>
        <Link href="/blockchain">
            <div
                className={`flex items-center gap-4 hover:bg-stone-800/75 rounded-md p-2 ${isActive("blockchain") ? "bg-stone-800" : ""}`}
            >
                <p>Blockchain</p>
                <IoCubeSharp />
            </div>
        </Link>
        <Link href="/transaction">
            <div
                className={`flex items-center gap-4 hover:bg-stone-800/75 rounded-md p-2 ${isActive("transaction") ? "bg-stone-800" : ""}`}
            >
                <p>Transaction</p>
                <GrTransaction />
            </div>
        </Link>
        <Link href="/mineblock">
            <div
                className={`flex items-center gap-4 hover:bg-stone-800/75 rounded-md p-2 ${isActive("mine") ? "bg-stone-800" : ""}`}
            >
                <p>Mine Blocks</p>
                <TbShovel />
            </div>
        </Link>
        <Link href="/becomenode">
            <div
                className={`flex items-center gap-4 hover:bg-stone-800/75 rounded-md p-2 ${isActive("becomenode") ? "bg-stone-800" : ""}`}
            >
                <p>Be a Node</p>
                <FaCircleNodes />
            </div>
        </Link>
        <Link href="/myaccount">
            <div
                className={`flex items-center gap-4 hover:bg-stone-800/75 rounded-md p-2 ${isActive("myaccount") ? "bg-stone-800" : ""}`}
            >
                <p>My Account</p>
                <RiAccountCircleFill />
            </div>
        </Link>
    </div>
}
export default Sidebar;