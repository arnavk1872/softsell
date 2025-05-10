
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MessageSquare, Send, X } from "lucide-react";

interface Message {
  id: number;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const exampleQuestions = [
  "How do I sell my license?",
  "What types of licenses do you accept?",
  "How quickly will I get paid?",
  "Is my transaction secure?",
];

// Mock AI responses
const getAIResponse = (message: string): string => {
  const lowerMsg = message.toLowerCase();
  
  if (lowerMsg.includes("sell") || lowerMsg.includes("how")) {
    return "To sell your software license, simply click the 'Sell My Licenses' button at the top of our page, upload your license details, and our team will provide a valuation within 24 hours.";
  }
  
  if (lowerMsg.includes("type") || lowerMsg.includes("accept")) {
    return "We accept a wide range of software licenses including Enterprise Software, SaaS Subscriptions, Desktop Applications, and Server Licenses from major vendors like Microsoft, Adobe, Oracle, and many more.";
  }
  
  if (lowerMsg.includes("payment") || lowerMsg.includes("paid") || lowerMsg.includes("how quickly")) {
    return "Once your license is verified and the sale is confirmed, you'll receive payment within 48 hours via your preferred payment method (bank transfer, PayPal, or crypto).";
  }
  
  if (lowerMsg.includes("secure") || lowerMsg.includes("safe") || lowerMsg.includes("transaction")) {
    return "Absolutely! We use bank-level encryption and security protocols. All transactions are fully documented and we provide legal transfer agreements to ensure everything is properly documented for compliance.";
  }
  
  return "Thanks for your question. Our team would be happy to provide more specific information. Would you like to speak with a license specialist? You can also call us at (555) 123-4567 for immediate assistance.";
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hi there! I'm SoftSell's virtual assistant. How can I help you with your software licenses today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        content: getAIResponse(inputValue),
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuestionClick = (question: string) => {
    setInputValue(question);
    // Auto-submit after a short delay
    setTimeout(() => {
      const fakeEvent = { preventDefault: () => {} } as React.FormEvent;
      handleSubmit(fakeEvent);
    }, 100);
  };

  return (
    <>
      {/* Chat widget button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 bg-softsell-teal text-white rounded-full p-4 shadow-lg hover:bg-softsell-blue transition-colors z-50"
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
      
      {/* Chat widget panel */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 bg-card border border-border rounded-xl shadow-xl z-50 w-80 sm:w-96 max-h-[70vh] flex flex-col">
          {/* Header */}
          <div className="bg-softsell-teal text-white p-4 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              <h3 className="font-medium">SoftSell Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-72">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-softsell-blue text-white rounded-tr-none"
                      : "bg-muted rounded-tl-none"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-muted rounded-tl-none">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "200ms" }}></div>
                    <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "400ms" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Example questions */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {exampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(question)}
                    className="text-xs bg-muted px-2 py-1 rounded-full hover:bg-muted/80 text-muted-foreground"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-border flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" size="icon" className="bg-softsell-teal hover:bg-softsell-teal/90">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
