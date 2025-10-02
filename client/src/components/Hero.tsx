import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Dark_blurred_office_background_e92bf21f.png";

export default function Hero() {
  return (
    <section 
      className="relative w-full min-h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: "rgba(11, 42, 37, 0.78)" }}
      />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <h1 
          className="font-bold text-foreground mb-6 leading-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Quick, Reliable Microfinance for Your Needs
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto">
          Transparent rates. Fast decisions. Human support.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/apply">
            <Button size="lg" className="min-w-[200px]" data-testid="button-apply-now">
              Apply Now
            </Button>
          </Link>
          <Link href="/requirements">
            <Button 
              size="lg" 
              variant="outline" 
              className="min-w-[200px] backdrop-blur-sm"
              style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(237, 247, 242, 0.5)"
              }}
              data-testid="button-view-requirements"
            >
              View Requirements
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
