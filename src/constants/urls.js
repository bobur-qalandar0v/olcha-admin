export const urls = {
  auth: {
    login: "auth",
  },
  products: {
    get: "/products",
    post: "/products",
    delete: (id) => `/products/${id}`,
    edit: (id) => `/products/${id}`,
  },
  banner: {
    get: "/banner",
    post: "/banner",
    delete: (id) => `/banner/${id}`,
    edit: (id) => `/banner/${id}`,
  },
};
