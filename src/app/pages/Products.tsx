import { useState, useMemo } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Filter, Grid, List, Heart } from "lucide-react";
import { products, categories } from "../data/products";
import { useCart } from "../components/CartContext";

export function Products() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000000]);
  const [selectedStyle, setSelectedStyle] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");

  const { addToCart, toggleWishlist, isInWishlist } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== "all") {
      const categoryName = categories.find((c) => c.id === selectedCategory)?.name;
      filtered = filtered.filter((p) => p.category === categoryName);
    }

    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (selectedStyle !== "all") {
      filtered = filtered.filter((p) => p.style === selectedStyle);
    }

    // Sort
    if (sortBy === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [selectedCategory, priceRange, selectedStyle, sortBy]);

  const styles = ["Hiện đại", "Classic", "Scandinavian", "Industrial", "Luxury"];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="bg-card py-16 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-semibold mb-4 text-secondary">
              Bộ Sưu Tập Nội Thất
            </h1>
            <p className="text-lg text-foreground/70">
              Khám phá hơn {products.length} sản phẩm nội thất cao cấp
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="sticky top-28 space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Filter className="w-5 h-5 text-primary" />
                  <h2 className="font-semibold">Bộ lọc</h2>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3 text-sm text-muted-foreground">
                    Loại sản phẩm
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === "all"}
                        onChange={() => setSelectedCategory("all")}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm">Tất cả</span>
                    </label>
                    {categories.map((category) => (
                      <label
                        key={category.id}
                        className="flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name="category"
                            checked={selectedCategory === category.id}
                            onChange={() => setSelectedCategory(category.id)}
                            className="text-primary focus:ring-primary"
                          />
                          <span className="text-sm">{category.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {category.count}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6 pb-6 border-b border-border">
                  <h3 className="font-medium mb-3 text-sm text-muted-foreground">
                    Khoảng giá
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        onChange={() => setPriceRange([0, 200000000])}
                        defaultChecked
                        className="text-primary"
                      />
                      <span className="text-sm">Tất cả</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        onChange={() => setPriceRange([0, 20000000])}
                        className="text-primary"
                      />
                      <span className="text-sm">Dưới 20 triệu</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        onChange={() => setPriceRange([20000000, 50000000])}
                        className="text-primary"
                      />
                      <span className="text-sm">20 - 50 triệu</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        onChange={() => setPriceRange([50000000, 100000000])}
                        className="text-primary"
                      />
                      <span className="text-sm">50 - 100 triệu</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        onChange={() => setPriceRange([100000000, 200000000])}
                        className="text-primary"
                      />
                      <span className="text-sm">Trên 100 triệu</span>
                    </label>
                  </div>
                </div>

                {/* Style Filter */}
                <div>
                  <h3 className="font-medium mb-3 text-sm text-muted-foreground">
                    Phong cách
                  </h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="style"
                        checked={selectedStyle === "all"}
                        onChange={() => setSelectedStyle("all")}
                        className="text-primary"
                      />
                      <span className="text-sm">Tất cả</span>
                    </label>
                    {styles.map((style) => (
                      <label
                        key={style}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="style"
                          checked={selectedStyle === style}
                          onChange={() => setSelectedStyle(style)}
                          className="text-primary"
                        />
                        <span className="text-sm">{style}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
              <div className="text-sm text-muted-foreground">
                Hiển thị {filteredProducts.length} sản phẩm
              </div>

              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                  <option value="default">Mặc định</option>
                  <option value="name">Tên A-Z</option>
                  <option value="price-asc">Giá thấp đến cao</option>
                  <option value="price-desc">Giá cao đến thấp</option>
                </select>

                <div className="flex items-center space-x-2 bg-card border border-border rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${
                      viewMode === "grid"
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded ${
                      viewMode === "list"
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                      <Link to={`/san-pham/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </Link>
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-4 right-4 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            isInWishlist(product.id)
                              ? "fill-primary text-primary"
                              : "text-foreground/80"
                          }`}
                        />
                      </button>
                      {product.bestseller && (
                        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          Bán chạy
                        </div>
                      )}
                    </div>
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
            ) : (
              <div className="space-y-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-card border border-border rounded-lg overflow-hidden flex flex-col sm:flex-row"
                  >
                    <div className="relative sm:w-64 h-64 flex-shrink-0">
                      <Link to={`/san-pham/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </Link>
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {product.category}
                        </p>
                        <Link
                          to={`/san-pham/${product.id}`}
                          className="text-xl font-semibold hover:text-primary transition-colors mb-3 block"
                        >
                          {product.name}
                        </Link>
                        <p className="text-foreground/70 mb-4 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-muted rounded-full text-sm">
                            {product.material}
                          </span>
                          <span className="px-3 py-1 bg-muted rounded-full text-sm">
                            {product.style}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-semibold text-primary">
                          {formatPrice(product.price)}
                        </p>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className="p-2 border border-border rounded-lg hover:bg-muted transition-colors"
                          >
                            <Heart
                              className={`w-5 h-5 ${
                                isInWishlist(product.id)
                                  ? "fill-primary text-primary"
                                  : "text-foreground/80"
                              }`}
                            />
                          </button>
                          <button
                            onClick={() => addToCart(product)}
                            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                          >
                            Thêm vào giỏ
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  Không tìm thấy sản phẩm phù hợp
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
