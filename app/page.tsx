import { Layout } from "@/components/tailwind/layout";
import { ThemeToggle } from "@/features/theme/theme-toggle";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <Layout className="bg-secondary">
      <ThemeToggle />
    </Layout>
  );
}
