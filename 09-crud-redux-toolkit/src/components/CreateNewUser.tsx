import { useId, useState } from "react";
import { useUserActions } from "../hooks/useUserActions.ts";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CreateNewUser({ open = false, setOpen }: Props) {
  const [result, setResult] = useState<"ok" | "ko" | null>(null);
  const id = useId();
  const { addUser } = useUserActions();

  const handleCloseModal = () => {
    const modal = document.getElementById(id) as HTMLDialogElement;
    modal.close();
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResult(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const role = formData.get("role") as string;

    const emailPattern = /^\w+\.*\w*@example\.com$/;
    const isEmailValid = emailPattern.test(email);

    if (!name || !isEmailValid || !role) {
      setResult("ko");
      return;
    }

    addUser({ name, email, role });
    setResult("ok");
    form.reset();

    setTimeout(() => {
      setResult(null);
    }, 2000);
  };

  return (
    <dialog
      open={open}
      id={id}
      className="rounded-lg shadow-md bg-gray-700 w-80 m-0 left-[calc(100%-20rem)]"
    >
      <header className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
        <h3 className="text-lg font-semibold text-white">Create New User</h3>

        <button
          type="button"
          className="rounded-lg size-8 flex justify-center items-center bg-gray-600 text-white outline-none focus:ring-2"
          onClick={() => handleCloseModal()}
          autoFocus
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </header>

      <form className="p-4 md:p-5" onSubmit={handleSubmit}>
        <section className="grid gap-4 mb-5">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
              placeholder="@example.com"
              pattern="\w+\.*\w*@example\.com"
              title="Must end with &#34;@example.com&#34;"
              required
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className="block mb-2 text-sm font-medium text-white"
            >
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
              placeholder="Software Engineer"
              required
            />
          </div>
        </section>

        <div className="grid gap-2.5">
          <button
            type="submit"
            className="text-white flex justify-center items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            <svg
              className="me-1 -ms-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            Create
          </button>
          <span className="justify-self-center">
            {result === "ok" && (
              <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-gray-700 text-green-400 border border-green-400">
                User created
              </span>
            )}
            {result === "ko" && (
              <span className="text-sm font-medium px-2.5 py-0.5 rounded bg-gray-700 text-red-400 border border-red-400">
                Invalid input
              </span>
            )}
          </span>
        </div>
      </form>
    </dialog>
  );
}
