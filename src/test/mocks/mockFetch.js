const productsResponse = {
    products: [
      {
        id: 1,
        category: "grocieries",
        product_name: "Assorted Coffee",
        price: 35.0,
        image: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-300x300.jpg",
      },
      {
        id: 2,
        category: "grocieries",
        product_name: "Hand Sanitizer",
        price: 15.0,
        image: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-300x300.jpg",
      },
      {
        id: 3,
        category: "juice",
        product_name: "Fresh Orange Juice",
        price: 31.0,
        image: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz.jpg",
      },
      {
        id: 4,
        category: "grocieries",
        product_name: "Natural Extracted Edible Oil",
        price: 27.0,
        image: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil.jpg",
      },
    ],
  };
  
  export default async function mockFetch(url) {
    switch (url) {
      case "https://api.example.com/products": {
        return {
          ok: true,
          status: 200,
          json: async () => productsResponse,
        };
      }
      default: {
        throw new Error(`Unhandled request: ${url}`);
      }
    }
  }
  