import Appbar from "../Appbar";
import Sidebar from "../Sidebar";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col h-screen w-full overflow-hidden">
            <Appbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 h-full overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}