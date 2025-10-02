import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <section className="py-16 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            <Card>
              <CardContent className="p-12 text-center">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h1 className="text-4xl font-bold mb-4" data-testid="heading-thank-you">Thank You!</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Your submission has been received. We'll get back to you shortly.
                </p>
                <Link href="/">
                  <Button size="lg" data-testid="button-home">
                    Back to Home
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
