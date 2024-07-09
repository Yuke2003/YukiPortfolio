import SignInButton from "./SignInButton";

async function HomePage() {

  return (
    <main>
      <div>
        <div className="px-32">
          <h1 className="text-center bg-[#f8f062] mt-20 py-5 rounded-xl flex justify-center text-8xl">
            Hey, I&apos;m Yukesh
          </h1>
          <h1 className="text-center text-8xl">a web developer with</h1>
          <h2 className="text-center leading-relaxed font-light text-2xl mt-12">
            a passionate and dedicated web developer. With a strong foundation
            in full stack web development, I have honed my skills in creating
            dynamic and responsive web applications
          </h2>
          <div className="flex justify-center mt-10">
            <SignInButton />
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
