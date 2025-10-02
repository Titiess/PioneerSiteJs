import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import { Briefcase, User, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LoanProducts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h1 className="text-4xl font-bold mb-8 text-center" data-testid="heading-loan-products">Loan Products</h1>
            <p className="text-lg leading-relaxed mb-12 text-center text-muted-foreground max-w-3xl mx-auto">
              Browse our range of microfinance loan products designed to support your personal and business financial needs.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <InfoCard
                title="Business Loans"
                description="Expand your business with flexible options and competitive rates."
                icon={Briefcase}
              />
              <InfoCard
                title="Personal Loans"
                description="Meet your individual goals with tailored lending solutions."
                icon={User}
              />
              <InfoCard
                title="Agriculture Loans"
                description="Invest in farming activities with products designed for the sector."
                icon={Sprout}
              />
            </div>

            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Get Started</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to apply for a loan? Start your application today and take the first step towards achieving your financial goals.
                </p>
                <Link href="/apply">
                  <Button size="lg" data-testid="button-apply-online">
                    Apply Online
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
