"use client";

import { signInAction } from "@/actions/auth.action";
import { Button } from "@/components/ui/button";

export const SignInButton = () => {
  return <Button onClick={() => signInAction()}>SignIn</Button>;
};
