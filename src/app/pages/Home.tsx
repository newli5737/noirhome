import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { products, categories } from "../data/products";
import { projects } from "../data/projects";
import { useCart } from "../components/CartContext";

export function Home() {
  const { addToCart } = useCart();
  const bestsellers = products.filter((p) => p.bestseller);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const testimonials = [
    {
      name: "Chị Nguyễn Thu Hà",
      role: "Chủ nhà biệt thự Thảo Điền",
      content:
        "LuxeHome đã biến ngôi nhà của chúng tôi thành một tác phẩm nghệ thuật. Từng chi tiết đều được chăm chút tỉ mỉ, vượt xa mong đợi của gia đình tôi.",
      rating: 5,
    },
    {
      name: "Anh Trần Minh Tuấn",
      role: "CEO Startup",
      content:
        "Thiết kế văn phòng hiện đại, sang trọng nhưng rất ấm cúng. Đội ngũ tư vấn chuyên nghiệp, thi công đúng tiến độ. Rất hài lòng!",
      rating: 5,
    },
    {
      name: "Chị Lê Phương Anh",
      role: "Kiến trúc sư",
      content:
        "Chất lượng sản phẩm xuất sắc, nguồn gốc rõ ràng. Đặc biệt ấn tượng với bộ sưu tập nội thất Ý và dịch vụ tư vấn tận tâm.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1765767056681-9583b29007cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3IlMjBkYXJrJTIwd29vZHxlbnwxfHx8fDE3NzI0MzA0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6 leading-tight"
            >
              Không gian sống
              <br />
              <span className="text-secondary">Đẳng cấp Luxury</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-foreground/80 mb-8 leading-relaxed"
            >
              Khám phá bộ sưu tập nội thất cao cấp từ các thương hiệu hàng đầu
              thế giới. Thiết kế sang trọng, chất liệu tự nhiên, tạo nên không
              gian sống hoàn hảo.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/san-pham"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span className="font-medium">Khám phá bộ sưu tập</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/lien-he"
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Đặt lịch tư vấn
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-semibold mb-6 text-secondary">
                Tinh Hoa Nội Thất Châu Âu
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                LuxeHome tự hào là đơn vị tiên phong trong việc mang đến những
                sản phẩm nội thất cao cấp từ Italy, Đức, Pháp. Với hơn 15 năm
                kinh nghiệm, chúng tôi cam kết mang đến không gian sống đẳng
                cấp quốc tế cho người Việt.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    15+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Năm kinh nghiệm
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Dự án hoàn thành
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    98%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Khách hài lòng
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-4 text-secondary">
              Danh Mục Sản Phẩm
            </h2>
            <p className="text-lg text-foreground/70">
              Khám phá bộ sưu tập nội thất cao cấp cho từng không gian
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/san-pham?category=${category.id}`}
                  className="group block relative h-64 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                  <img
                    src={products.find((p) => p.category === category.name)?.image || products[0].image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-xl font-semibold mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-foreground/70">
                      {category.count} sản phẩm
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-4 text-secondary">
              Sản Phẩm Bán Chạy
            </h2>
            <p className="text-lg text-foreground/70">
              Những sản phẩm được yêu thích nhất
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestsellers.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/san-pham/${product.id}`} className="block">
                  <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Bán chạy
                    </div>
                  </div>
                </Link>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    {product.category}
                  </p>
                  <Link
                    to={`/san-pham/${product.id}`}
                    className="block font-medium hover:text-primary transition-colors line-clamp-2"
                  >
                    {product.name}
                  </Link>
                  <p className="text-lg font-semibold text-primary">
                    {formatPrice(product.price)}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors font-medium"
                  >
                    Thêm vào giỏ
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/san-pham"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span className="font-medium">Xem tất cả sản phẩm</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-4 text-secondary">
              Dự Án Tiêu Biểu
            </h2>
            <p className="text-lg text-foreground/70">
              Những công trình đã được LuxeHome thực hiện
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-96 rounded-lg overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.area}</span>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/du-an"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span className="font-medium">Xem tất cả dự án</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-4 text-secondary">
              Khách Hàng Nói Gì
            </h2>
            <p className="text-lg text-foreground/70">
              Phản hồi từ những khách hàng đã sử dụng dịch vụ
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/50 p-8 rounded-lg"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-4 text-secondary">
              Tại Sao Chọn LuxeHome
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Chất lượng đảm bảo",
                description: "100% sản phẩm nhập khẩu chính hãng",
              },
              {
                icon: CheckCircle,
                title: "Bảo hành dài hạn",
                description: "Bảo hành toàn diện 5-10 năm",
              },
              {
                icon: CheckCircle,
                title: "Tư vấn miễn phí",
                description: "Đội ngũ kiến trúc sư chuyên nghiệp",
              },
              {
                icon: CheckCircle,
                title: "Thi công uy tín",
                description: "Cam kết tiến độ và chất lượng",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
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
              Bắt đầu dự án của bạn ngay hôm nay
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Đặt lịch tư vấn miễn phí với kiến trúc sư của chúng tôi để biến
              ước mơ không gian sống lý tưởng thành hiện thực
            </p>
            <Link
              to="/lien-he"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              <span>Đặt lịch tư vấn miễn phí</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
