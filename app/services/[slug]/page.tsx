// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type Props = { params: { slug: string } };

export default function ServicePage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <main className="min-h-screen bg-background">
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-foreground">{service.title}</h1>
              <p className="mt-1 text-sm text-muted-foreground">{service.short}</p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact#book" className="inline-flex">
                <Button className="bg-primary text-primary-foreground">Book Consultation</Button>
              </Link>
              <Link href="/services" className="inline-flex">
                <Button variant="outline">All services</Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_320px]">
            {/* main content */}
            <article>
              {service.heroImage && (
                <div className="mb-6 rounded-lg overflow-hidden">
                  <Image src={service.heroImage} width={1200} height={600} alt={service.title} className="w-full object-cover rounded-lg" />
                </div>
              )}

              <section className="prose max-w-none text-muted-foreground">
                <p>{service.overview}</p>
              </section>

              {service.highlights && (
                <Card className="mt-6 border-border bg-card">
                  <CardContent className="p-4">
                    <h4 className="text-sm font-semibold text-foreground">Highlights</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                      {service.highlights.map((h) => <li key={h}>{h}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {service.subitems?.length ? (
                <Card className="mt-6 border-border bg-card">
                  <CardContent className="p-4">
                    <h4 className="text-sm font-semibold text-foreground">Variants</h4>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {service.subitems.map((si) => (
                        <div key={si.id} className="rounded-lg border border-border/40 p-3 bg-background">
                          <h5 className="text-sm font-semibold text-foreground">{si.title}</h5>
                          {si.short && <p className="text-sm text-muted-foreground">{si.short}</p>}
                          {si.desc && <p className="text-sm text-muted-foreground">{si.desc}</p>}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : null}

              {service.procedure && (
                <Card className="mt-6 border-border bg-card">
                  <CardContent className="p-4">
                    <h4 className="text-sm font-semibold text-foreground">Procedure / What to expect</h4>
                    <ol className="mt-2 list-decimal pl-5 text-sm text-muted-foreground">
                      {service.procedure.map((p, i) => <li key={i}>{p}</li>)}
                    </ol>
                  </CardContent>
                </Card>
              )}

              {service.faqs?.length ? (
                <Card className="mt-6 border-border bg-card">
                  <CardContent className="p-4">
                    <h4 className="text-sm font-semibold text-foreground">Common questions</h4>
                    <div className="mt-3 space-y-3">
                      {service.faqs.map((f, i) => (
                        <div key={i}>
                          <p className="text-sm font-medium text-foreground">{f.q}</p>
                          <p className="text-sm text-muted-foreground">{f.a}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : null}
            </article>

            {/* right column: quick facts / related */}
            <aside>
              <Card className="border-border bg-card">
                <CardContent className="p-4">
                  <h4 className="text-sm font-semibold text-foreground">Quick facts</h4>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {service.indications?.length && (
                      <li>
                        <strong>Indications:</strong> {service.indications.join(", ")}
                      </li>
                    )}
                    {service.related?.length && (
                      <li>
                        <strong>Related:</strong>{" "}
                        {service.related.map((r) => (
                          <Link key={r} href={`/services/${r}`} className="text-primary hover:underline mr-2">
                            {r.replace(/-/g, " ")}
                          </Link>
                        ))}
                      </li>
                    )}
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-4 border-border bg-secondary/10">
                <CardContent className="p-4">
                  <h4 className="text-sm font-semibold text-foreground">Book & Fees</h4>
                  <p className="text-sm text-muted-foreground">Fees vary by case complexity. Book a consultation for a precise quote.</p>
                  <div className="mt-4">
                    <Link href="/contact#book" className="block">
                      <Button className="w-full bg-primary text-primary-foreground">Book Consultation</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
