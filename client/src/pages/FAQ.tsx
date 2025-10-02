import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function FAQ() {
  const faqs = [
    {
      question: "What is a microfinance loan?",
      answer: "Microfinance loans offer small amounts to support individuals and SMEs with limited access to traditional banking.",
    },
    {
      question: "Who is eligible to apply?",
      answer: "Nigerian residents with valid identification; other criteria may apply based on loan product.",
    },
    {
      question: "How quickly can I access funds?",
      answer: "Approvals can be fast when documentation is complete—often within a few business days.",
    },
    {
      question: "What types of security are accepted?",
      answer: "Credentials, service documents, post-dated cheques, and a public servant guarantor (as specified in our requirements).",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-4xl font-bold mb-12 text-center" data-testid="heading-faq">Frequently Asked Questions</h1>

            <div className="space-y-4 mb-16">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-card rounded-lg border border-card-border overflow-hidden hover-elevate"
                  data-testid={`accordion-${index}`}
                >
                  <summary className="cursor-pointer p-6 font-semibold text-lg list-none flex justify-between items-center">
                    <span>{faq.question}</span>
                    <span className="text-primary text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Have Other Questions?</h3>
                <p className="text-muted-foreground mb-6">
                  We're here to help. Reach out to us and we'll get back to you as soon as possible.
                </p>
                <Link href="/contact">
                  <Button size="lg" data-testid="button-contact">
                    Contact Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
