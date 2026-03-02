import { motion } from "motion/react";
import { Link } from "react-router";
import { Calendar, User, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/blog";

export function Blog() {
  const categories = ["Tất cả", "Xu hướng", "Tips thiết kế", "Cảm hứng"];

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
              Cảm Hứng Nội Thất
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Khám phá xu hướng thiết kế, tips trang trí và những ý tưởng độc
              đáo để tạo nên không gian sống hoàn hảo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden group">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                  {blogPosts[0].category}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-semibold mb-4 text-secondary">
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
              </div>

              <Link
                to={`/blog/${blogPosts[0].id}`}
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <span>Đọc tiếp</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-foreground/70 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-2 text-sm">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {post.author}
                      </span>
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      Đọc thêm →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mt-12">
            <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
              Trước
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
              2
            </button>
            <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
              3
            </button>
            <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
              Sau
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold mb-6">
              Đăng ký nhận bản tin
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Nhận tin tức mới nhất về xu hướng nội thất, tips thiết kế và ưu
              đãi độc quyền
            </p>
            <form className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
              >
                Đăng ký
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
