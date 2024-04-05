import styles from "./page.module.scss";

export default function TestLayout({ children }: { children: React.ReactNode }) { // will be a page or nested layout
  return (
    <section className={styles.container}>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <a href="/">Home</a>
        <a href="/">Hello</a>
      </nav>

      {children}
    </section>
  );
}
