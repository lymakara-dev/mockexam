export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-red-300 ">
      <div className="inline-block max-w-lg text-center justify-center bg-red-300">
        {children}
      </div>
    </section>
  );
}
