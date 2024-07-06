"use client";

import { Layout } from "@/components/tailwind/layout";
import { buttonVariants } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import type { ErrorParams } from "@/types/next";
import Link from "next/link";

export default function RouteError({ error, reset }: ErrorParams) {
  return (
    <Layout className="flex h-screen flex-col items-center justify-center gap-3">
      <Typography variant="code">404</Typography>
      <Typography variant="h1">Page not found</Typography>
      <Typography variant="base">
        Sorry, we couldn't find the page you're looking for.
      </Typography>
      <Link href="/" className={cn(buttonVariants(), "mt-5")}>
        Go back home
      </Link>
    </Layout>
  );
}
