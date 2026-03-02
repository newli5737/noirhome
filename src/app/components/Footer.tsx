import { Link } from "react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0F0F] border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-semibold mb-4 text-secondary">
              LUXE<span className="text-primary">HOME</span>
            </div>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Chuyên cung cấp nội thất cao cấp, thiết kế và thi công không gian
              sống đẳng cấp tại Việt Nam.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">Liên kết</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  to="/san-pham"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link
                  to="/du-an"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  Dự án
                </Link>
              </li>
              <li>
                <Link
                  to="/gioi-thieu"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/lien-he"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">Dịch vụ</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  Tư vấn thiết kế
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  Thi công nội thất
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  Bảo hành & Bảo trì
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  Vận chuyển & Lắp đặt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-foreground/70">
                  123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:0901234567"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  090 123 4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@luxehome.vn"
                  className="text-foreground/70 hover:text-secondary transition-colors"
                >
                  contact@luxehome.vn
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-sm text-foreground/60 mb-2">
                Giờ làm việc:
              </p>
              <p className="text-foreground/70">
                Thứ 2 - Thứ 7: 9:00 - 18:00
                <br />
                Chủ nhật: 10:00 - 17:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground/60 text-sm">
              © {year} LuxeHome. Bản quyền thuộc về LuxeHome Vietnam.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-foreground/60 hover:text-secondary transition-colors"
              >
                Điều khoản sử dụng
              </a>
              <a
                href="#"
                className="text-foreground/60 hover:text-secondary transition-colors"
              >
                Chính sách bảo mật
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
