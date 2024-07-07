import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth } from "@/lib/auth";
import { SignInButton } from "./signin-button";
import { UserDropdown } from "./user-dropdown";

export const AuthButton = async () => {
  const session = await auth();
  console.log(session);

  if (!session) {
    return <SignInButton />;
  }

  return (
    <UserDropdown>
      <Avatar>
        <AvatarImage
          src={session.user?.image || ""}
          alt={`${session.user?.name} profile picture`}
        />
        <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
      </Avatar>
    </UserDropdown>
  );
};
