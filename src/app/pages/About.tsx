import { motion } from "motion/react";
import { Award, Users, Target, Heart, CheckCircle } from "lucide-react";

export function About() {
  const team = [
    {
      name: "KTS. Nguyễn Hoàng Nam",
      role: "Giám đốc thiết kế",
      image: "https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwYmVpZ2UlMjB3YXJtJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjQzMDQxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "KTS. Trần Minh Châu",
      role: "Trưởng phòng thiết kế",
      image: "https://images.unsplash.com/photo-1762245464399-2db6f46c580a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMHByb2plY3QlMjBtb2Rlcm4lMjBsdXh1cnl8ZW58MXx8fHwxNzcyNDMwNDE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "KTS. Lê Thị Hà",
      role: "Chuyên viên thiết kế cao cấp",
      image: "https://images.unsplash.com/photo-1674160797233-4807abd77a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMG1pbmltYWwlMjBsdXh1cnl8ZW58MXx8fHwxNzcyNDMwNDE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "KTS. Phạm Văn Đức",
      role: "Chuyên viên thiết kế",
      image: "https://images.unsplash.com/photo-1765767056681-9583b29007cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3IlMjBkYXJrJTIwd29vZHxlbnwxfHx8fDE3NzI0MzA0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Chất lượng vượt trội",
      description:
        "Cam kết mang đến sản phẩm và dịch vụ nội thất cao cấp nhất",
    },
    {
      icon: Users,
      title: "Khách hàng là trung tâm",
      description: "Luôn lắng nghe và thấu hiểu nhu cầu của từng khách hàng",
    },
    {
      icon: Target,
      title: "Sáng tạo không ngừng",
      description: "Đổi mới thiết kế, theo kịp xu hướng nội thất thế giới",
    },
    {
      icon: Heart,
      title: "Tận tâm - Uy tín",
      description: "Đồng hành cùng khách hàng từ thiết kế đến hoàn thiện",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Tư vấn & Khảo sát",
      description:
        "Gặp gỡ, trao đổi ý tưởng và khảo sát thực địa để hiểu rõ nhu cầu",
    },
    {
      step: "02",
      title: "Thiết kế 3D",
      description:
        "Phác thảo ý tưởng, thiết kế 3D chi tiết với nhiều phương án lựa chọn",
    },
    {
      step: "03",
      title: "Lựa chọn vật liệu",
      description:
        "Tư vấn chọn lựa nội thất, vật liệu cao cấp phù hợp với ngân sách",
    },
    {
      step: "04",
      title: "Thi công & Hoàn thiện",
      description:
        "Thi công chuyên nghiệp, giám sát chặt chẽ đến khi hoàn thành",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1765767056681-9583b29007cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3IlMjBkYXJrJTIwd29vZHxlbnwxfHx8fDE3NzI0MzA0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About LuxeHome"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl sm:text-6xl font-semibold mb-6">
              Về <span className="text-secondary">LuxeHome</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Hơn 15 năm kinh nghiệm trong lĩnh vực thiết kế và thi công nội
              thất cao cấp, mang đến không gian sống đẳng cấp quốc tế.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-semibold mb-6 text-secondary">
                Câu chuyện của chúng tôi
              </h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  LuxeHome được thành lập vào năm 2010 với sứ mệnh mang đến
                  những sản phẩm nội thất cao cấp từ các thương hiệu hàng đầu
                  thế giới cho người Việt Nam.
                </p>
                <p>
                  Chúng tôi tin rằng không gian sống không chỉ là nơi để ở, mà
                  còn là nơi thể hiện phong cách, đẳng cấp và cá tính của gia
                  chủ. Vì vậy, mỗi dự án của LuxeHome đều được chăm chút tỉ mỉ
                  từ khâu thiết kế đến thi công.
                </p>
                <p>
                  Với đội ngũ kiến trúc sư giàu kinh nghiệm, am hiểu xu hướng
                  thiết kế quốc tế và sự tận tâm trong từng chi tiết, chúng tôi
                  tự hào đã mang đến hàng trăm công trình nội thất cao cấp trên
                  khắp Việt Nam.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="h-64 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1729446887814-edc9948a2384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzb2ZhJTIwYnJvd24lMjBsZWF0aGVyfGVufDF8fHx8MTc3MjQzMDQxMXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="LuxeHome Interior 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-80 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1771573753404-0f99dbccd842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGNoYWlyJTIwd29vZCUyMG1vZGVybnxlbnwxfHx8fDE3NzI0MzA0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="LuxeHome Interior 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-80 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1758448500631-644bb3c1c942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBkaW5pbmclMjB0YWJsZSUyMGx1eHVyeXxlbnwxfHx8fDE3NzI0MzA0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="LuxeHome Interior 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1771270731051-9cfbb7222946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGFyayUyMGNhYmluZXR8ZW58MXx8fHwxNzcyNDMwNDEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="LuxeHome Interior 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-4 text-secondary">
              Giá trị cốt lõi
            </h2>
            <p className="text-lg text-foreground/70">
              Những giá trị chúng tôi luôn theo đuổi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-4 text-secondary">
              Quy trình làm việc
            </h2>
            <p className="text-lg text-foreground/70">
              4 bước để biến ước mơ thành hiện thực
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold mb-4 text-secondary">
              Đội ngũ chuyên gia
            </h2>
            <p className="text-lg text-foreground/70">
              Kiến trúc sư giàu kinh nghiệm, sáng tạo
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-80 rounded-lg overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Năm kinh nghiệm" },
              { number: "500+", label: "Dự án hoàn thành" },
              { number: "1000+", label: "Khách hàng tin tưởng" },
              { number: "50+", label: "Thương hiệu hợp tác" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
