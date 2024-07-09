import "@/app/_styles/global.css";
import HomePage from "./components/HomePage";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
import EmailHandler from "./components/EmailHandler";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <HomePage />
      <MySkills />
      <MyProjects />
      <EmailHandler />
      <Footer />
    </main>
  );
}
