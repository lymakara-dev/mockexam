export default function ExamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="p-8">
      <div className="">{children}</div>
    </section>
  );
}
