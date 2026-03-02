import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message send
      console.log("Message sent:", message);
      setMessage("");
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center z-40"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-card border border-border rounded-lg shadow-2xl z-40 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Hỗ trợ trực tuyến</h3>
                <p className="text-xs opacity-90">
                  Chúng tôi luôn sẵn sàng hỗ trợ bạn
                </p>
              </div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-muted/30">
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm flex-shrink-0">
                    LH
                  </div>
                  <div className="bg-card border border-border rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">
                      Xin chào! Cảm ơn bạn đã quan tâm đến LuxeHome. Tôi có thể
                      giúp gì cho bạn?
                    </p>
                    <span className="text-xs text-muted-foreground mt-1 block">
                      10:30
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-border bg-card"
            >
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Nhập tin nhắn..."
                  className="flex-1 px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
