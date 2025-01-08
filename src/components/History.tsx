import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface HistoryProps {
  history: string[];
  onClear: () => void;
}

export const History = ({ history, onClear }: HistoryProps) => {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="w-full md:w-64 bg-white rounded-2xl shadow-lg p-6 animate-fade-in hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-calculator-text">History</h2>
        <Button
          variant="ghost"
          className="text-sm text-calculator-primary hover:text-calculator-accent transition-colors duration-200"
          onClick={onClear}
        >
          Clear
        </Button>
      </div>
      <ScrollArea className="h-[400px]">
        <div className="space-y-2">
          {history.map((item, index) => (
            <div
              key={index}
              className="p-2 text-sm text-calculator-text bg-calculator-secondary rounded-lg transform transition-all duration-200 hover:scale-102 hover:bg-opacity-80"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};