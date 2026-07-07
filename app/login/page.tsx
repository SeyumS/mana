import Link from "next/link";
import { login } from "./actions";
import { GoogleButton } from "./google-button";

export default async function LoginPage({
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
        action={login}
        style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: 280 }}
      >
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />
        {params.error && <p style={{ color: "red" }}>{params.error}</p>}
        {params.message && <p>{params.message}</p>}
        <button type="submit">Sign in</button>
      </form>

      <GoogleButton />

      <p>
        <Link href="/signup">Create an account</Link>
      </p>
      <p>
        <Link href="/forgot-password">Forgot password?</Link>
      </p>
    </main>
  );
}
