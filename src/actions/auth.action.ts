"use server";

import { signIn, signOut } from "@/lib/auth";

export const signInAction = async () => {
  await signIn();
};

export const signOutAction = async () => {
  await signOut();
};
