import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Địa chỉ showroom",
      content: "123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
      link: "https://maps.google.com",
    },
    {
      icon: Phone,
      title: "Hotline",
      content: "090 123 4567",
      link: "tel:0901234567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@luxehome.vn",
      link: "mailto:contact@luxehome.vn",
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      content: "Thứ 2 - Thứ 7: 9:00 - 18:00\nChủ nhật: 10:00 - 17:00",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="bg-card py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-semibold mb-4 text-secondary">
              Liên Hệ Với Chúng Tôi
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Hãy để chúng tôi giúp bạn biến ước mơ về không gian sống lý tưởng
              thành hiện thực. Liên hệ ngay để được tư vấn miễn phí.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/50 p-6 rounded-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-foreground/70 hover:text-primary transition-colors whitespace-pre-line"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-foreground/70 whitespace-pre-line">
                    {info.content}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-secondary">
                Gửi yêu cầu tư vấn
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Họ và tên <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Nhập họ và tên"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Số điện thoại <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="090 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Dịch vụ quan tâm
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Chọn dịch vụ</option>
                    <option value="design">Thiết kế nội thất</option>
                    <option value="construction">Thi công nội thất</option>
                    <option value="furniture">Mua sắm nội thất</option>
                    <option value="consultation">Tư vấn thiết kế</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nội dung <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Mô tả chi tiết yêu cầu của bạn..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg flex items-center justify-center space-x-2"
                >
                  <span>Gửi yêu cầu</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-secondary">
                Vị trí showroom
              </h2>
              <div className="h-[600px] bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4983049364126!2d106.70291431533424!3d10.772699262204756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc9%3A0x5a4ad1df09e3ac00!2zTmd1eeG7hW4gSHXhu4csIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LuxeHome Showroom Location"
                />
              </div>

              <div className="mt-6 p-6 bg-card border border-border rounded-lg">
                <h3 className="font-semibold mb-4">
                  Đến showroom LuxeHome
                </h3>
                <p className="text-foreground/70 mb-4">
                  Chúng tôi luôn chào đón bạn đến tham quan và trải nghiệm trực
                  tiếp các sản phẩm nội thất cao cấp tại showroom.
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Xem chỉ đường</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold mb-6">
              Cần tư vấn ngay? Gọi cho chúng tôi
            </h2>
            <a
              href="tel:0901234567"
              className="inline-block text-6xl font-bold hover:text-secondary transition-colors"
            >
              090 123 4567
            </a>
            <p className="mt-6 text-xl text-primary-foreground/90">
              Đội ngũ tư vấn luôn sẵn sàng hỗ trợ bạn 24/7
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
