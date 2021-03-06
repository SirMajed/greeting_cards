import { FC } from "react"
import Navbar from "./components/Navbar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface Props {
    children?: JSX.Element | JSX.Element[]
}
const Layout: FC<Props> = (props: Props) => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <ToastContainer />
                <Navbar />
                <main className="flex-1 overflow-y-auto pt-16 lg:pt-0">
                    {props.children}
                </main>
                <footer className="py-3 lg:py-4 bg-white text-center text-gray-800 font-neoSans border">
                    ❤️ صنع بكل حب من ماجد
                </footer>
            </div>

        </>
    )
}
export default Layout