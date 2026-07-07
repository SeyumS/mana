"use client";

import { createClient } from "@/app/lib/supabase/client";

export function GoogleButton() {
  async function signInWithGoogle() {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  }

  return (
    <button type="button" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
}
