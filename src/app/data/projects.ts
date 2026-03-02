export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  area: string;
  year: string;
  image: string;
  images: string[];
  description: string;
  client: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Biệt Thự Hiện Đại Thảo Điền",
    category: "Biệt thự",
    location: "Q.2, TP. Hồ Chí Minh",
    area: "450m²",
    year: "2025",
    image: "https://images.unsplash.com/photo-1762245464399-2db6f46c580a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMHByb2plY3QlMjBtb2Rlcm4lMjBsdXh1cnl8ZW58MXx8fHwxNzcyNDMwNDE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1762245464399-2db6f46c580a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMHByb2plY3QlMjBtb2Rlcm4lMjBsdXh1cnl8ZW58MXx8fHwxNzcyNDMwNDE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1674160797233-4807abd77a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBpbnRlcmlvciUyMG1pbmltYWwlMjBsdXh1cnl8ZW58MXx8fHwxNzcyNDMwNDE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Thiết kế nội thất biệt thự cao cấp với phong cách hiện đại tối giản, sử dụng chất liệu tự nhiên cao cấp kết hợp ánh sáng tinh tế tạo không gian sống sang trọng và ấm cúng.",
    client: "Anh Nguyễn Minh Tuấn",
  },
  {
    id: "2",
    title: "Penthouse Landmark 81",
    category: "Căn hộ",
    location: "Bình Thạnh, TP. HCM",
    area: "320m²",
    year: "2025",
    image: "https://images.unsplash.com/photo-1765767056681-9583b29007cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3IlMjBkYXJrJTIwd29vZHxlbnwxfHx8fDE3NzI0MzA0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1765767056681-9583b29007cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3IlMjBkYXJrJTIwd29vZHxlbnwxfHx8fDE3NzI0MzA0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Penthouse view toàn cảnh thành phố với nội thất luxury, kết hợp gỗ óc chó, đá marble và da bò Ý.",
    client: "Chị Lê Thị Hương",
  },
  {
    id: "3",
    title: "Nhà Hàng Fine Dining",
    category: "Thương mại",
    location: "Q.1, TP. Hồ Chí Minh",
    area: "280m²",
    year: "2024",
    image: "https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwYmVpZ2UlMjB3YXJtJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjQzMDQxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwYmVpZ2UlMjB3YXJtJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjQzMDQxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Thiết kế nhà hàng cao cấp với không gian ấm cúng, sang trọng, tạo trải nghiệm đẳng cấp cho thực khách.",
    client: "Công ty TNHH Gourmet Saigon",
  },
];
