export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Xu Hướng Nội Thất Cao Cấp 2026",
    category: "Xu hướng",
    date: "28/02/2026",
    image: "https://images.unsplash.com/photo-1765767056681-9583b29007cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3IlMjBkYXJrJTIwd29vZHxlbnwxfHx8fDE3NzI0MzA0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    excerpt: "Khám phá những xu hướng thiết kế nội thất cao cấp đang dẫn đầu thế giới trong năm 2026, từ chất liệu tự nhiên đến công nghệ thông minh.",
    author: "KTS. Nguyễn Hoàng Nam",
  },
  {
    id: "2",
    title: "Cách Phối Màu Gỗ Với Nội Thất Hiện Đại",
    category: "Tips thiết kế",
    date: "25/02/2026",
    image: "https://images.unsplash.com/photo-1729446887814-edc9948a2384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzb2ZhJTIwYnJvd24lMjBsZWF0aGVyfGVufDF8fHx8MTc3MjQzMDQxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    excerpt: "Hướng dẫn chi tiết cách kết hợp các tông màu gỗ khác nhau để tạo không gian hài hòa và sang trọng cho ngôi nhà của bạn.",
    author: "KTS. Trần Minh Châu",
  },
  {
    id: "3",
    title: "Thiết Kế Phòng Ngủ Luxury Tối Giản",
    category: "Cảm hứng",
    date: "20/02/2026",
    image: "https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwYmVpZ2UlMjB3YXJtJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjQzMDQxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    excerpt: "Khám phá cách tạo nên một phòng ngủ cao cấp với phong cách tối giản, mang lại sự thư giãn và đẳng cấp.",
    author: "KTS. Lê Thị Hà",
  },
  {
    id: "4",
    title: "Chọn Sofa Phù Hợp Cho Phòng Khách",
    category: "Tips thiết kế",
    date: "15/02/2026",
    image: "https://images.unsplash.com/photo-1771573753404-0f99dbccd842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGNoYWlyJTIwd29vZCUyMG1vZGVybnxlbnwxfHx8fDE3NzI0MzA0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    excerpt: "Bí quyết chọn sofa cao cấp phù hợp với không gian phòng khách, từ kích thước, chất liệu đến màu sắc.",
    author: "KTS. Phạm Văn Đức",
  },
];
