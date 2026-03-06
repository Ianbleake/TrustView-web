export const mockReviews = [
  {
    id: "rev_1",
    author: "Carlos Mendoza",
    rating: 5,
    content: "Excelente producto. Llegó rápido y la calidad superó mis expectativas. Sin duda volvería a comprar.",
    productId: "prod_1",
    product: "Audífonos Bluetooth X200",
    date: new Date("2026-02-20"),
    status: "published",
    productUrl: "https://example.com/products/x200"
  },
  {
    id: "rev_2",
    author: "Laura Gómez",
    rating: 4,
    content: "Muy buen producto, funciona perfectamente. Solo me gustaría que la batería durara un poco más.",
    productId: "prod_1",
    product: "Audífonos Bluetooth X200",
    date: new Date("2026-02-22"),
    status: "published",
    productUrl: "https://example.com/products/x200"
  },
  {
    id: "rev_3",
    author: "Andrés Ramírez",
    rating: 3,
    content: "Cumple con lo prometido, aunque esperaba mejores materiales por el precio.",
    productId: "prod_2",
    product: "Teclado Mecánico K80",
    date: new Date("2026-02-25"),
    status: "pending",
    productUrl: "https://example.com/products/k80"
  },
  {
    id: "rev_4",
    author: "Sofía Torres",
    rating: 5,
    content: "Me encantó. El diseño es muy elegante y el rendimiento es impecable.",
    productId: "prod_3",
    product: "Mouse Inalámbrico Pro M5",
    date: new Date("2026-02-26"),
    status: "published",
    productUrl: "https://example.com/products/m5"
  },
  {
    id: "rev_5",
    author: "Jorge Castillo",
    rating: 2,
    content: "No me convenció mucho. Funciona, pero la construcción se siente algo frágil.",
    productId: "prod_2",
    product: "Teclado Mecánico K80",
    date: new Date("2026-02-28"),
    status: "rejected",
    productUrl: "https://example.com/products/k80"
  },
  {
    id: "rev_6",
    author: "Mariana López",
    rating: 4,
    content: "Buen producto en general. Fácil de usar y llegó en perfectas condiciones.",
    productId: "prod_3",
    product: "Mouse Inalámbrico Pro M5",
    date: new Date("2026-03-01"),
    status: "published",
    productUrl: "https://example.com/products/m5"
  }
] as Review[];