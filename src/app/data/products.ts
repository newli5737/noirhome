export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  images?: string[];
  description: string;
  material: string;
  dimensions: string;
  colors: string[];
  style: string;
  bestseller?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Sofa Da Ý Cao Cấp Milano",
    category: "Phòng khách",
    price: 89000000,
    image: "https://images.unsplash.com/photo-1729446887814-edc9948a2384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzb2ZhJTIwYnJvd24lMjBsZWF0aGVyfGVufDF8fHx8MTc3MjQzMDQxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1729446887814-edc9948a2384?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzb2ZhJTIwYnJvd24lMjBsZWF0aGVyfGVufDF8fHx8MTc3MjQzMDQxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Sofa da bò nhập khẩu từ Ý, thiết kế hiện đại sang trọng, khung gỗ sồi Bắc Âu bền vững.",
    material: "Da bò Ý, Khung gỗ sồi",
    dimensions: "240cm x 95cm x 85cm",
    colors: ["Nâu da bò", "Đen", "Be"],
    style: "Hiện đại",
    bestseller: true,
  },
  {
    id: "2",
    name: "Ghế Thiết Kế Gỗ Óc Chó",
    category: "Phòng khách",
    price: 12500000,
    image: "https://images.unsplash.com/photo-1771573753404-0f99dbccd842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGNoYWlyJTIwd29vZCUyMG1vZGVybnxlbnwxfHx8fDE3NzI0MzA0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1771573753404-0f99dbccd842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGNoYWlyJTIwd29vZCUyMG1vZGVybnxlbnwxfHx8fDE3NzI0MzA0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Ghế đơn thiết kế độc đáo từ gỗ óc chó tự nhiên, kết hợp nệm da cao cấp êm ái.",
    material: "Gỗ óc chó, Nệm da",
    dimensions: "75cm x 70cm x 80cm",
    colors: ["Gỗ tự nhiên", "Nâu đậm"],
    style: "Scandinavian",
    bestseller: true,
  },
  {
    id: "3",
    name: "Bàn Ăn Đá Marble Trắng",
    category: "Phòng ăn",
    price: 65000000,
    image: "https://images.unsplash.com/photo-1758448500631-644bb3c1c942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBkaW5pbmclMjB0YWJsZSUyMGx1eHVyeXxlbnwxfHx8fDE3NzI0MzA0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1758448500631-644bb3c1c942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBkaW5pbmclMjB0YWJsZSUyMGx1eHVyeXxlbnwxfHx8fDE3NzI0MzA0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Bàn ăn mặt đá marble tự nhiên, chân thép sơn tĩnh điện cao cấp, sang trọng và bền bỉ.",
    material: "Đá Marble, Thép sơn tĩnh điện",
    dimensions: "200cm x 100cm x 75cm",
    colors: ["Trắng vân đen", "Be vân nâu"],
    style: "Luxury",
    bestseller: true,
  },
  {
    id: "4",
    name: "Giường Ngủ Gỗ Sồi Bọc Nệm",
    category: "Phòng ngủ",
    price: 45000000,
    image: "https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwYmVpZ2UlMjB3YXJtJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjQzMDQxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1648634158203-199accfd7afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwYmVpZ2UlMjB3YXJtJTIwbHV4dXJ5fGVufDF8fHx8MTc3MjQzMDQxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Giường ngủ khung gỗ sồi bọc nệm cao cấp, thiết kế tối giản sang trọng với đầu giường bọc vải nhung.",
    material: "Gỗ sồi, Vải nhung",
    dimensions: "180cm x 200cm x 120cm",
    colors: ["Be", "Xám", "Xanh navy"],
    style: "Hiện đại",
  },
  {
    id: "5",
    name: "Bàn Làm Việc Gỗ Óc Chó",
    category: "Văn phòng",
    price: 28000000,
    image: "https://images.unsplash.com/photo-1770515853604-4487b6370bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkZXNrJTIwd29vZCUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NzI0MzA0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1770515853604-4487b6370bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBkZXNrJTIwd29vZCUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NzI0MzA0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Bàn làm việc executive cao cấp, gỗ óc chó nguyên khối, nhiều ngăn kéo tiện lợi.",
    material: "Gỗ óc chó nguyên khối",
    dimensions: "160cm x 80cm x 75cm",
    colors: ["Gỗ tự nhiên", "Nâu tối"],
    style: "Classic",
  },
  {
    id: "6",
    name: "Tủ Quần Áo Hiện Đại",
    category: "Phòng ngủ",
    price: 52000000,
    image: "https://images.unsplash.com/photo-1713192707527-13b598f4adca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXJkcm9iZSUyMGNsb3NldCUyMG1vZGVybnxlbnwxfHx8fDE3NzI0MzA0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1713192707527-13b598f4adca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXJkcm9iZSUyMGNsb3NldCUyMG1vZGVybnxlbnwxfHx8fDE3NzI0MzA0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Tủ quần áo lớn với hệ thống tổ chức thông minh, cửa kính mờ, đèn LED tự động.",
    material: "Gỗ MDF phủ veneer, Kính",
    dimensions: "250cm x 60cm x 220cm",
    colors: ["Trắng", "Gỗ sồi", "Xám than"],
    style: "Hiện đại",
  },
  {
    id: "7",
    name: "Tủ Bếp Cao Cấp",
    category: "Bếp",
    price: 120000000,
    image: "https://images.unsplash.com/photo-1771270731051-9cfbb7222946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGFyayUyMGNhYmluZXR8ZW58MXx8fHwxNzcyNDMwNDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1771270731051-9cfbb7222946?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGFyayUyMGNhYmluZXR8ZW58MXx8fHwxNzcyNDMwNDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Bộ tủ bếp hiện đại với mặt đá granite, phụ kiện Blum Đức, thiết kế tối ưu không gian.",
    material: "MDF chống ẩm, Đá granite, Phụ kiện Blum",
    dimensions: "Tùy chỉnh theo không gian",
    colors: ["Trắng", "Xám đá", "Nâu gỗ"],
    style: "Hiện đại",
    bestseller: true,
  },
  {
    id: "8",
    name: "Kệ Sách Gỗ Sắt",
    category: "Phòng khách",
    price: 18500000,
    image: "https://images.unsplash.com/photo-1765767056681-9583b29007cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3IlMjBkYXJrJTIwd29vZHxlbnwxfHx8fDE3NzI0MzA0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1765767056681-9583b29007cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3IlMjBkYXJrJTIwd29vZHxlbnwxfHx8fDE3NzI0MzA0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Kệ sách kết hợp gỗ óc chó và khung sắt đen, phong cách industrial hiện đại.",
    material: "Gỗ óc chó, Sắt sơn tĩnh điện",
    dimensions: "180cm x 35cm x 200cm",
    colors: ["G��� + Sắt đen", "Gỗ + Sắt vàng đồng"],
    style: "Industrial",
  },
];

export const categories = [
  { id: "phong-khach", name: "Phòng khách", count: 156 },
  { id: "phong-ngu", name: "Phòng ngủ", count: 98 },
  { id: "phong-an", name: "Phòng ăn", count: 67 },
  { id: "bep", name: "Bếp", count: 45 },
  { id: "van-phong", name: "Văn phòng", count: 82 },
  { id: "trang-tri", name: "Trang trí", count: 234 },
];
