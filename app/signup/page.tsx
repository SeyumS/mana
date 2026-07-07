import Link from "next/link";
import { signup } from "@/app/login/actions";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  const params = await searchParams;

  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <form
        action={signup}
        style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: 280 }}
      >
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required minLength={6} />
        {params.error && <p style={{ color: "red" }}>{params.error}</p>}
        {params.message && <p>{params.message}</p>}
        <button type="submit">Sign up</button>
      </form>

      <p>
        <Link href="/login">Already have an account? Sign in</Link>
      </p>
    </main>
  );
}
