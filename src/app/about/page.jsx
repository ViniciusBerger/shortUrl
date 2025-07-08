import About from "../components/about"
import Header from "../components/header"


export default function Page() {
        return (
            <div className="relative m-0 min-h-screen text-[#4fd1ff] bg-[linear-gradient(180deg,_#1e1e2f,_#0c0c15)] overflow-hidden">
                
                <Header />
                <About />
            </div>
        )
}