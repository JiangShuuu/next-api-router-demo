export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>DaisyLayout</nav>
      {children}
    </section>
  );
}
