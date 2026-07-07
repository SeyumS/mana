import { requestPasswordReset } from "@/app/login/actions";

export default async function ForgotPasswordPage({
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
        action={requestPasswordReset}
        style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: 280 }}
      >
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
        {params.error && <p style={{ color: "red" }}>{params.error}</p>}
        {params.message && <p>{params.message}</p>}
        <button type="submit">Send reset link</button>
      </form>
    </main>
  );
}
