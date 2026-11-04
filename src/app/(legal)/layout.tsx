import Link from "next/link";

/**
 * Public legal pages (privacy policy, data deletion instructions).
 * Meta requires both URLs to be reachable without signing in before an
 * app can be published, so this group sits outside the auth-protected
 * dashboard and is not listed in the middleware's protected paths.
 *
 * Company details live in src/app/(legal)/company.ts.
 */
export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-canvas min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <article className="rounded-2xl bg-card p-6 sm:p-10 [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_li]:mt-2 [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-muted-foreground [&_a]:text-primary [&_a]:underline">
          {children}
        </article>
        <nav className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <Link href="/privacidad" className="hover:text-foreground">Política de privacidad</Link>
          <Link href="/eliminacion-de-datos" className="hover:text-foreground">Eliminación de datos</Link>
        </nav>
      </main>
    </div>
  );
}
