import Form from "./components/form";
import Header from "./components/header";
import About from "./components/about";

export default function Home() {
  
  return (
   <main className="relative m-0 min-h-screen text-[#4fd1ff] bg-[linear-gradient(180deg,_#1e1e2f,_#0c0c15)] overflow-hidden">

  {/* Bright Purple Glow Streak - Left side */}
  <div className="absolute top-[25%] left-[10%] w-1.5 h-[500px] bg-purple-400 opacity-80 rotate-[25deg] blur-md animate-[pulse_4s_ease-in-out_infinite]"></div>

  {/* Fuchsia Streak - Right side */}
  <div className="absolute top-[50%] right-[10%] w-1.5 h-[500px] bg-fuchsia-400 opacity-80 rotate-[40deg] blur-md animate-[ping_6s_linear_infinite]"></div>

  {/* Neon Pink Streak across top right */}
  <div className="absolute top-[10%] right-[5%] w-1.5 h-[400px] bg-pink-500 opacity-80 rotate-[-30deg] blur-md animate-[pulse_6s_ease-in-out_infinite]"></div>

  {/* Subtle Cyan Line for ambiance */}
  <div className="absolute top-[55%] left-[5%] w-[400px] h-0.5 bg-cyan-400 opacity-40 blur-sm animate-[pulse_6s_ease-in-out_infinite]"></div>

  <Header/>
  <Form />
</main>

  );
}
