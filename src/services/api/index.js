// estructura para organizar la api
const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
  },
  products: {
    getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    addProduct: `${API}/api/${VERSION}/products`,
    updateProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    getList: (limit) => `${API}/api/${VERSION}/users?limit=${limit}`,
    postUser: `${API}/api/${VERSION}/users`,
    isAvailable: `${API}/api/${VERSION}/users/is-available`,
  },
  categories: {
    getCategoriesList: (limit) => `${API}/api/${VERSION}/categories?limit=${limit}`,
    addCategory: `${API}/api/${VERSION}/categories`,
    getCategoryItems: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
    putCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getProductsByCategorie: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    upload: `${API}/api/${VERSION}/files/upload`,
    getFile: (filename) => `${API}/api/${VERSION}/files/${filename}`,
  }
};

export default endPoints;