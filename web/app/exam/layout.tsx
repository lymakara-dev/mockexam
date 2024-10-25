import ClassCard from "@/components/card";

export default function ExamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-orange-500">
      <div className="">{children}</div>
    </section>
  );
}
