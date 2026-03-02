import { useState } from "react";
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import {
  Heart,
  Share2,
  Check,
  Minus,
  Plus,
  Truck,
  Shield,
  Headphones,
} from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../components/CartContext";

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">
            Không tìm thấy sản phẩm
          </h1>
          <Link to="/san-pham" className="text-primary hover:underline">
            Quay lại trang sản phẩm
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const images = product.images || [product.image];
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Trang chủ
            </Link>
            <span>/</span>
            <Link to="/san-pham" className="hover:text-foreground">
              Sản phẩm
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="sticky top-28">
              <div className="relative h-[600px] rounded-lg overflow-hidden mb-4 bg-muted">
                <img
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-4 right-4 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      isInWishlist(product.id)
                        ? "fill-primary text-primary"
                        : "text-foreground/80"
                    }`}
                  />
                </button>
              </div>
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative h-32 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index
                          ? "border-primary"
                          : "border-transparent hover:border-border"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="space-y-6">
              {product.bestseller && (
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  <Check className="w-4 h-4" />
                  <span className="text-sm font-medium">Bán chạy</span>
                </div>
              )}

              <div>
                <p className="text-muted-foreground mb-2">{product.category}</p>
                <h1 className="text-4xl font-semibold mb-4 text-secondary">
                  {product.name}
                </h1>
                <p className="text-3xl font-bold text-primary">
                  {formatPrice(product.price)}
                </p>
              </div>

              <div className="border-t border-b border-border py-6">
                <p className="text-foreground/80 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Material & Dimensions */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Chất liệu
                  </p>
                  <p className="font-medium">{product.material}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Kích thước
                  </p>
                  <p className="font-medium">{product.dimensions}</p>
                </div>
              </div>

              {/* Colors */}
              <div>
                <p className="font-medium mb-3">Màu sắc</p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`px-4 py-2 border-2 rounded-lg transition-all ${
                        selectedColor === index
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <p className="font-medium mb-3">Số lượng</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-muted transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="px-6 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-muted transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg"
                >
                  Thêm vào giỏ hàng
                </button>
                <button className="px-6 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium">
                  Yêu cầu tư vấn
                </button>
                <button className="px-6 py-4 border border-border rounded-lg hover:bg-muted transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Miễn phí vận chuyển</p>
                    <p className="text-xs text-muted-foreground">
                      Giao hàng toàn quốc
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Bảo hành 5 năm</p>
                    <p className="text-xs text-muted-foreground">
                      Chính hãng 100%
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Hỗ trợ 24/7</p>
                    <p className="text-xs text-muted-foreground">
                      Tư vấn nhiệt tình
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-semibold mb-8 text-secondary">
              Sản phẩm liên quan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/san-pham/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {relatedProduct.category}
                    </p>
                    <p className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </p>
                    <p className="text-lg font-semibold text-primary">
                      {formatPrice(relatedProduct.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
