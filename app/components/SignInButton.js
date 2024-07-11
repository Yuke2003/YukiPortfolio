import { auth } from "../utils/auth";
import { signInAction } from "../utils/userController";

async function SignInButton() {
  const session = await auth();
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-gray-900 rounded-xl px-10 py-4 font-medium">
        {!session ? (
          <>
            {" "}
            <img
              src="https://authjs.dev/img/providers/google.svg"
              alt="Google logo"
              height="24"
              width="24"
            />
            <span>Continue with Google</span>
          </>
        ) : (
          <>
            <img
              src={session.user.image}
              alt="Google logo"
              height="44"
              width="44"
              className=" rounded-full "
            />
            <span>Welcome ,{session.user.name}</span>
          </>
        )}
      </button>
    </form>
  );
}

export default SignInButton;
