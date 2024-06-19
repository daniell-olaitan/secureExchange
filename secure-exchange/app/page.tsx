import Image from "next/image";
import SignUpForm from "./ui/signup";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <SignUpForm/>
    </main>
  );
}

