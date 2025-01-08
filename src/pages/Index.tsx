import { Calculator } from "@/components/Calculator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-calculator-primary to-calculator-accent bg-clip-text text-transparent animate-fade-in">
          Frontend Mania
        </h1>
        <div className="max-w-4xl mx-auto">
          <Calculator />
        </div>
      </div>
    </div>
  );
};

export default Index;