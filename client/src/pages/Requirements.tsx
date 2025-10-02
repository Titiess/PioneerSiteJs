import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Requirements() {
  const requirements = [
    "2 Passport photographs of Applicant",
    {
      title: "Security:",
      items: [
        "Original Credentials of Academic Qualification",
        "Original service documents",
        "Third party guarantor which shall be a public servant",
        "Post-dated cheques of the Applicant",
        "Post-dated cheques of the guarantor in case of default by the applicant",
      ]
    },
    "Means of identification",
    "Utility bill to confirm residence",
    "Non-refundable documentation/legal fee of ₦5,000",
    "1 Passport photograph of the guarantor",
    "Verification of documents",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-4xl font-bold mb-12 text-center" data-testid="heading-requirements">Requirements for Loan</h1>
            
            <ol className="space-y-4 mb-12 text-lg" data-testid="list-requirements">
              {requirements.map((req, index) => (
                <li key={index} className="flex gap-4">
                  <span className="font-bold text-primary flex-shrink-0">{index + 1}.</span>
                  <div>
                    {typeof req === "string" ? (
                      <span className="text-muted-foreground">{req}</span>
                    ) : (
                      <>
                        <span className="text-muted-foreground font-semibold">{req.title}</span>
                        <ul className="mt-2 space-y-2 ml-6">
                          {req.items.map((item, i) => (
                            <li key={i} className="text-muted-foreground list-disc">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            <div className="text-center">
              <Link href="/apply">
                <Button size="lg" data-testid="button-apply-online">
                  Apply Online
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
