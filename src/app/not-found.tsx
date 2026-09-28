import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-20 text-center">
      <div className="max-w-2xl">
        <p className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-8xl leading-none font-extrabold tracking-tight text-transparent sm:text-9xl">
          404
        </p>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Страница не найдена
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Возможно, ссылка устарела или адрес был введён с ошибкой. Вернитесь на главную или свяжитесь с нами.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-brand-500 to-accent-500 px-6 font-semibold text-white transition hover:brightness-105 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            На главную
          </Link>
          <Link
            href="/#get-started"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-background px-6 font-semibold text-foreground transition hover:bg-muted focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Написать нам
          </Link>
        </div>
      </div>
    </main>
  );
}
