import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import {
  Menu,
  X,
  Search,
  Heart,
  ShoppingCart,
  User,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useCart } from "./CartContext";
import { CartDrawer } from "./CartDrawer";
import { categories } from "../data/products";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { cartCount, wishlist } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Trang chủ" },
    { path: "/san-pham", label: "Sản phẩm", hasDropdown: true },
    { path: "/du-an", label: "Dự án" },
    { path: "/gioi-thieu", label: "Giới thiệu" },
    { path: "/blog", label: "Blog" },
    { path: "/lien-he", label: "Liên hệ" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1A1715]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-semibold tracking-tight text-secondary">
                LUXE
                <span className="text-primary">HOME</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() =>
                    link.hasDropdown && setIsProductsOpen(true)
                  }
                  onMouseLeave={() =>
                    link.hasDropdown && setIsProductsOpen(false)
                  }
                >
                  <Link
                    to={link.path}
                    className={`flex items-center space-x-1 transition-colors ${
                      location.pathname === link.path
                        ? "text-secondary"
                        : "text-foreground/80 hover:text-secondary"
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <ChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </Link>

                  {/* Products Mega Menu */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {isProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 top-full mt-2 w-64 bg-card border border-border rounded-lg shadow-xl overflow-hidden"
                        >
                          <div className="p-4">
                            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
                              Danh mục sản phẩm
                            </h3>
                            <div className="space-y-2">
                              {categories.map((category) => (
                                <Link
                                  key={category.id}
                                  to={`/san-pham?category=${category.id}`}
                                  className="block px-3 py-2 rounded-md text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                                >
                                  <div className="flex items-center justify-between">
                                    <span>{category.name}</span>
                                    <span className="text-xs text-muted-foreground">
                                      {category.count}
                                    </span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-muted rounded-full transition-colors hidden sm:block">
                <Search className="w-5 h-5 text-foreground/80" />
              </button>

              <Link
                to="/wishlist"
                className="p-2 hover:bg-muted rounded-full transition-colors relative hidden sm:block"
              >
                <Heart className="w-5 h-5 text-foreground/80" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:bg-muted rounded-full transition-colors relative"
              >
                <ShoppingCart className="w-5 h-5 text-foreground/80" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button className="p-2 hover:bg-muted rounded-full transition-colors hidden sm:block">
                <User className="w-5 h-5 text-foreground/80" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-muted rounded-full transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 ${
                      location.pathname === link.path
                        ? "text-secondary"
                        : "text-foreground/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
