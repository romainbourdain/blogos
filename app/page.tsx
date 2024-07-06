import { Layout } from "@/components/tailwind/layout";
import { AuthButton } from "@/features/auth/auth-button";
import { ThemeToggle } from "@/features/theme/theme-toggle";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout className="bg-secondary">
      <ThemeToggle />
      {/* <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <Button type="submit">SignIn</Button>
      </form> */}
      <AuthButton />
    </Layout>
  );
}
