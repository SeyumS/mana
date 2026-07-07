import { updatePassword } from "./actions";

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
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
        action={updatePassword}
        style={{ display: "flex", flexDirection: "column", gap: "0.5rem", width: 280 }}
      >
        <label htmlFor="password">New password</label>
        <input id="password" name="password" type="password" required minLength={6} />
        {params.error && <p style={{ color: "red" }}>{params.error}</p>}
        <button type="submit">Update password</button>
      </form>
    </main>
  );
}
