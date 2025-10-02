import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import { Users, TrendingUp, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center" data-testid="heading-about">About Us</h1>
            <p className="text-lg leading-relaxed mb-12 text-muted-foreground">
              Pioneer Cooperative is a microfinance institution dedicated to wealth creation & economic growth in Nigeria through accessible and flexible financial services.
            </p>

            <h2 className="text-3xl font-bold mb-6 text-center" data-testid="heading-mission">Our Mission</h2>
            <p className="text-lg leading-relaxed mb-16 text-muted-foreground">
              Pioneer Cooperative empowers individuals & families by providing opportunities to access loans, build savings, and achieve financial stability. We believe in financial inclusion, transparency, and community support.
            </p>

            <h2 className="text-3xl font-bold mb-8 text-center" data-testid="heading-why-choose">Why Choose Pioneer Cooperative?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <InfoCard
                title="Personalized Service"
                description="We take time to understand your unique financial needs."
                icon={Users}
              />
              <InfoCard
                title="Competitive Rates"
                description="Fair interest rates and flexible terms to meet your goals."
                icon={TrendingUp}
              />
              <InfoCard
                title="Community Focus"
                description="We support growth and wellbeing for our members."
                icon={Heart}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
