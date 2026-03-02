import { motion } from "motion/react";
import { MapPin, Calendar, Ruler, User } from "lucide-react";
import { projects } from "../data/projects";

export function Projects() {
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
              Dự Án Đã Thực Hiện
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Khám phá những công trình nội thất cao cấp mà LuxeHome đã thiết kế
              và thi công, mang lại không gian sống hoàn hảo cho khách hàng.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Images */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="space-y-4">
                    <div className="relative h-[500px] rounded-lg overflow-hidden group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    {project.images.length > 1 && (
                      <div className="grid grid-cols-2 gap-4">
                        {project.images.slice(1).map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="relative h-60 rounded-lg overflow-hidden group"
                          >
                            <img
                              src={image}
                              alt={`${project.title} ${imgIndex + 2}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-6">
                  <div>
                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                      {project.category}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-secondary">
                      {project.title}
                    </h2>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Vị trí
                        </p>
                        <p className="font-medium">{project.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Ruler className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Diện tích
                        </p>
                        <p className="font-medium">{project.area}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Năm hoàn thành
                        </p>
                        <p className="font-medium">{project.year}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">
                          Khách hàng
                        </p>
                        <p className="font-medium">{project.client}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                      Xem chi tiết dự án
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-semibold mb-6 text-secondary">
              Bắt đầu dự án của bạn
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Để chúng tôi giúp bạn biến ý tưởng không gian sống lý tưởng thành
              hiện thực
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg">
              Đặt lịch tư vấn miễn phí
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
