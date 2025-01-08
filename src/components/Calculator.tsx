import React, { useState } from 'react';
import { Button } from './CalculatorButton';
import { History } from './History';
import { toast } from '@/components/ui/use-toast';

export const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [history, setHistory] = useState<string[]>([]);
  const [lastOperation, setLastOperation] = useState<string>('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = (num: string) => {
    console.log('Number pressed:', num);
    if (display === '0' || shouldResetDisplay) {
      setDisplay(num);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (operator: string) => {
    console.log('Operator pressed:', operator);
    if (lastOperation) {
      calculate();
    }
    setLastOperation(display + operator);
    setShouldResetDisplay(true);
  };

  const calculate = () => {
    if (!lastOperation) return;
    
    try {
      const expression = lastOperation + display;
      const result = eval(expression);
      console.log('Calculation:', expression, '=', result);
      
      setDisplay(result.toString());
      setHistory([...history, `${expression} = ${result}`]);
      setLastOperation('');
      
      toast({
        title: "Calculation complete",
        description: `${expression} = ${result}`,
      });
    } catch (error) {
      console.error('Calculation error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid calculation",
      });
    }
  };

  const clear = () => {
    setDisplay('0');
    setLastOperation('');
    setShouldResetDisplay(false);
  };

  const clearHistory = () => {
    setHistory([]);
    toast({
      title: "History cleared",
      description: "Calculator history has been cleared",
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start justify-center p-8 max-w-4xl mx-auto animate-slide-up">
      <div className="w-full md:w-96 bg-white rounded-2xl shadow-lg p-6 space-y-4 hover:shadow-xl transition-shadow duration-300">
        <div className="bg-calculator-secondary rounded-xl p-4 mb-4 animate-pop-in">
          <div className="text-right text-2xl font-light text-calculator-text overflow-hidden">
            {lastOperation && <div className="text-sm text-gray-500 animate-fade-in">{lastOperation}</div>}
            {display}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <Button onClick={clear} variant="secondary" className="col-span-2">
            AC
          </Button>
          <Button onClick={() => handleOperator('/')} variant="operator">
            ÷
          </Button>
          <Button onClick={() => handleOperator('*')} variant="operator">
            ×
          </Button>

          {[7, 8, 9].map((num) => (
            <Button key={num} onClick={() => handleNumber(num.toString())}>
              {num}
            </Button>
          ))}
          <Button onClick={() => handleOperator('-')} variant="operator">
            -
          </Button>

          {[4, 5, 6].map((num) => (
            <Button key={num} onClick={() => handleNumber(num.toString())}>
              {num}
            </Button>
          ))}
          <Button onClick={() => handleOperator('+')} variant="operator">
            +
          </Button>

          {[1, 2, 3].map((num) => (
            <Button key={num} onClick={() => handleNumber(num.toString())}>
              {num}
            </Button>
          ))}
          <Button onClick={calculate} variant="operator" className="row-span-2">
            =
          </Button>

          <Button onClick={() => handleNumber('0')} className="col-span-2">
            0
          </Button>
          <Button onClick={() => handleNumber('.')}>.</Button>
        </div>
      </div>

      <History history={history} onClear={clearHistory} />
    </div>
  );
};