import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function ConsultationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  useEffect(() => {
    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consultation request:", formData);
    alert("Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.");
    setIsOpen(false);
    setFormData({ name: "", phone: "" });
  };

  const handleClose = () => {
    setIsOpen(false);
    // Don't show again for 24 hours
    localStorage.setItem("consultationPopupClosed", Date.now().toString());
  };

  useEffect(() => {
    const lastClosed = localStorage.getItem("consultationPopupClosed");
    if (lastClosed) {
      const hoursSinceClosed = (Date.now() - parseInt(lastClosed)) / (1000 * 60 * 60);
      if (hoursSinceClosed < 24) {
        setIsOpen(false);
      }
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-card border border-border rounded-lg shadow-2xl z-50 p-8"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2 text-secondary">
                Nhận tư vấn miễn phí
              </h3>
              <p className="text-foreground/70">
                Để lại thông tin, chúng tôi sẽ liên hệ tư vấn thiết kế nội thất
                miễn phí cho bạn
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Họ và tên"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Số điện thoại"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Nhận tư vấn ngay
              </button>
            </form>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              Chúng tôi cam kết bảo mật thông tin của bạn
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
