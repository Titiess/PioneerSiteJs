import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export default function Apply() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    phone: "",
    email: "",
    academicQualification: "",
    serviceDocuments: "",
    guarantorName: "",
    guarantorOccupation: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Form submitted:", formData);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted",
        description: "Your loan application has been received successfully.",
      });
      setLocation("/thank-you");
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-4xl font-bold mb-4 text-center" data-testid="heading-apply">Apply for a Loan</h1>
            <p className="text-center text-muted-foreground mb-12">
              Complete the application below. The documentation/legal fee of ₦5,000 is payable within the process.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6" data-testid="heading-personal-info">Personal Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      data-testid="input-last-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dob">Date of Birth *</Label>
                    <Input
                      id="dob"
                      name="dob"
                      type="date"
                      required
                      value={formData.dob}
                      onChange={handleChange}
                      data-testid="input-dob"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      data-testid="input-phone"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      data-testid="input-email"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6" data-testid="heading-security">Security</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="academicQualification">Academic Qualification</Label>
                    <Input
                      id="academicQualification"
                      name="academicQualification"
                      value={formData.academicQualification}
                      onChange={handleChange}
                      data-testid="input-academic-qualification"
                    />
                  </div>
                  <div>
                    <Label htmlFor="serviceDocuments">Service Documents</Label>
                    <Input
                      id="serviceDocuments"
                      name="serviceDocuments"
                      value={formData.serviceDocuments}
                      onChange={handleChange}
                      data-testid="input-service-documents"
                    />
                  </div>
                  <div>
                    <Label htmlFor="guarantorName">Guarantor's Name</Label>
                    <Input
                      id="guarantorName"
                      name="guarantorName"
                      value={formData.guarantorName}
                      onChange={handleChange}
                      data-testid="input-guarantor-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="guarantorOccupation">Guarantor's Occupation</Label>
                    <Input
                      id="guarantorOccupation"
                      name="guarantorOccupation"
                      value={formData.guarantorOccupation}
                      onChange={handleChange}
                      data-testid="input-guarantor-occupation"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: checked === true })}
                  data-testid="checkbox-consent"
                />
                <Label htmlFor="consent" className="cursor-pointer">
                  I confirm that the information provided is accurate and I agree to be contacted.
                </Label>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting} data-testid="button-submit">
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
