
const product_data = {
  platform: {
    title: "The ProductDB Customer Platform (Products)",
    description:
      "All of ProductDB’s marketing, sales, and customer service software on one platform.",
    links: [
      { title: "Start Now", url: "#" },
      { title: "Overview of all solutions", url: "/product" },
    ],
  },
  hubs: [
    {
      title: "Marketing ",
      description: "Boost your products like you've never boosted",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 50 50"
          className="h-6 w-6"
        >
          <path
            fill="#007aff"
            d="M35.7 5.9c-3 4.5-7.7 7.7-12.9 8.6l-3.8.7v14.6l3.8.7c5.4 1 8.9 3.4 12.8 8.8 1.9 2.7 4 4.7 4.7 4.4.6-.2 1.5-2.1 2-4.3 1-4.6.4-33.1-.7-35.7-1.3-2.7-3.1-2-5.9 2.2zM3.6 16.6c-2.1 2.1-2.1 9.7 0 11.8 1 1.1 3.4 1.6 7.5 1.6H17V15h-5.9c-4.1 0-6.5.5-7.5 1.6zM45 23.5c0 1.9.4 3.5.9 3.5 1.3 0 2.3-3.4 1.5-5.4-1.1-2.8-2.4-1.8-2.4 1.9zM7.1 33.2c.1.7.8 4.2 1.7 7.8l1.7 6.5 4.3.3c5.1.4 6.2-1.3 3.8-6.2-.9-1.9-1.6-4.8-1.6-6.5 0-3.1-.1-3.1-5-3.1-3.4 0-5 .4-4.9 1.2z"
          />
        </svg>
      ),
      link: { title: "Overview of all products", url: "/product/marketing" },
    },
    {
      title: "Product Classification ",
      description: "Create product experiences for everyone in the sales chain",
      icon: (
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          viewBox="0 0 64 64"
        >
          <path
            fill="#007aff"
            d="M44.7 4.6c-.4.4-.7 1.8-.7 3 0 1.7-.7 2.3-2.7 2.6l-2.8.3-.3 9.7c-.2 9-.4 9.8-2.2 9.8-1.7 0-2-.7-2-5.3 0-4.8-.3-5.6-3.8-9l-3.9-3.8-10.9.3-10.9.3v39h29l.3-8.8c.2-7.8.5-8.7 2.2-8.7 1.8 0 2 .9 2.2 9.7l.3 9.8 2.7.3c2.1.3 2.7.9 3 3 .3 2.7.4 2.7 7.8 2.7h7.5v-15H52c-7.4 0-7.5 0-7.8 2.8-.2 1.5-.8 2.7-1.3 2.7s-.9-3.6-.9-8 .4-8 .9-8 1.1 1.2 1.3 2.7c.3 2.8.4 2.8 7.8 2.8h7.5v-15H52c-7.4 0-7.5 0-7.8 2.7-.2 1.6-.8 2.8-1.3 2.8s-.9-3.6-.9-8 .4-8 .9-8 1.1 1.2 1.3 2.7c.3 2.8.4 2.8 7.8 2.8h7.5v-15l-7-.3c-3.9-.1-7.4 0-7.8.4zM28 23c0 .6-3.7 1-9 1s-9-.4-9-1 3.7-1 9-1 9 .4 9 1zm0 6c0 .6-3.7 1-9 1s-9-.4-9-1 3.7-1 9-1 9 .4 9 1zm0 6c0 .6-3.7 1-9 1s-9-.4-9-1 3.7-1 9-1 9 .4 9 1zm0 6c0 .6-3.7 1-9 1s-9-.4-9-1 3.7-1 9-1 9 .4 9 1z"
          />
        </svg>
      ),
      link: { title: "Overview of all products", url: "/product/classification" },
    },
    {
      title: "Technical Hub ",
      description: "Get technical support for your products to keep them running",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          className="h-6 w-6"
        >
          <path
            fill="#007aff"
            d="M1.2 1.2c-1.5 1.5 2.4 9.2 4.2 8.5.7-.3 4.7 2.9 8.9 7.1 6.2 6.2 7.5 8.1 7.1 9.9-.5 1.8-.1 2.5 2 3.3 1.5.5 2.9 1.8 3.3 2.7C27.8 36 42.3 50 44.6 50c2.5 0 5.4-2.9 5.4-5.4 0-2.2-13.6-16.5-16.8-17.7-1.2-.5-2.7-2-3.2-3.5-.8-2.1-1.5-2.5-3.3-2-1.8.4-3.7-.9-9.9-7.1-4.2-4.2-7.4-8.2-7.1-8.9.7-1.8-7-5.7-8.5-4.2zM38 36.5c2.9 3 5.1 5.8 4.7 6.2-.8.7-11.7-9.5-11.7-10.9 0-1.8 1.8-.5 7 4.7z"
          />
          <path
            fill="#007aff"
            d="M31.8 2.1c-4.7 2.4-6.2 5.2-5.4 9.7.4 2.6.1 4.1-1.1 5.4-1.5 1.7-1.4 1.8 1.3 1.8 3.5 0 5.4 1.6 5.4 4.4 0 1.5.3 1.7 1.2.8.7-.7 2.7-.9 5.4-.5 3.6.5 4.6.2 6.7-2 2.9-2.8 5.3-9.7 4.3-12.3-.6-1.5-1.1-1.3-4.1 1.6L42 14.4l-3.2-3.2L35.6 8l3.2-3.3c1.8-1.8 2.9-3.6 2.6-4-1.3-1.3-5.9-.6-9.6 1.4zM15.6 26.9c-2 2.1-3.9 3.1-5.9 3.1-3.9 0-6.4 1.5-8.2 5-2.4 4.7-1.9 7.8 2 11.7 3.2 3.2 3.9 3.5 7.8 3 5.2-.7 8.7-4.4 8.7-9.1 0-2 .8-4 2-5.1 2.5-2.3 2.5-2.8-.2-4-1.5-.7-2.5-2.1-2.8-4.3l-.5-3.4-2.9 3.1zm-2.2 10c3.6 4-2.3 9.8-6.2 5.9-2-2-1.4-5.8 1.1-6.8 3.1-1.2 3.2-1.2 5.1.9z"
          />
        </svg>
      ),
      link: { title: "Overview of all products", url: "/product/technical" },
    },
    {
      title: "Content ",
      description: "Get customized content for your products and websites",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50" className="w-6 h-6">
          <path fill="#007aff" d="M8.8 3.1C7.2 4 7 6.2 7 25c0 19.7.1 21 1.9 22 2.6 1.3 29.6 1.3 32.2 0 1.8-1 1.9-2.3 1.9-22s-.1-21-1.9-22c-2.5-1.3-30-1.3-32.3.1zM40 14.5V23H10V6h30v8.5zm-7.2 12.2c-4.3.2-11.3.2-15.5 0-4.3-.1-.8-.3 7.7-.3s12 .2 7.8.3zm-1.5 4c-3.5.2-9.1.2-12.5 0-3.5-.2-.7-.3 6.2-.3s9.7.1 6.3.3zm-1.5 4c-2.7.2-6.9.2-9.5 0-2.7-.2-.5-.3 4.7-.3s7.4.1 4.8.3zM40 40.5V44H10v-7h30v3.5z" />
          <path fill="#007aff" d="m11.2 14.2.3 7.3h27l.3-7.3.3-7.2H10.9l.3 7.2zM28.5 11c0 .8-.8 1.6-1.7 1.8-1.3.2-1.8-.3-1.8-1.8s.5-2 1.8-1.8c.9.2 1.7 1 1.7 1.8zm-5 3.7 3.3 3.8 2.6-2.4c2.5-2.4 2.6-2.4 4.7-.5 1.1 1 2.5 2.8 3 3.9.6 1.1-.3.5-1.9-1.3L32.3 15l-2.5 2c-3.5 2.7-3.8 2.6-7.1-1.5l-2.9-3.6-3.6 4.5c-2 2.5-3.8 4.3-4 4.1-.4-.4 6.9-9.5 7.7-9.5.2 0 1.9 1.7 3.6 3.7z" />
          <path fill="#007aff" d="M26 11c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1zM11 40.5V43h28v-5H11v2.5z" />
        </svg>
      ),
      link: { title: "Overview of all products", url: "/product/content" },
    },
    {
      title: "Operations ",
      description: "We offer different security operations for your products",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#007aff" viewBox="0 0 50 50" className="w-6 h-6">
          <path fill="#007aff" d="M5.1 1.4c-6.7 3.7-6.5 14.3.4 17.4 2.7 1.2 2.7 1.3 1 3.2-2.1 2.3-1.3 3.9 1 2 1.3-1.1 1.5-.8 1.5 2.4V30H0v20h20V30h-9v-3.6c0-3.2.2-3.5 1.5-2.4 2.3 1.9 3.1.3 1.1-1.9-1.7-1.9-1.7-2 1.2-3.5 1.6-.8 3.5-2.9 4.2-4.6 1-2.5 1.8-3 4.7-3 3.1 0 3.4.2 2.3 1.5-2.1 2.5-.2 3 2.3.7l2.3-2.2 4.2 4.3c3.5 3.5 4.2 5 4.2 8.1 0 3.3-.2 3.7-1.5 2.6-2.3-1.9-3.1-.3-1 2 1.7 1.9 1.7 2-1 3.2-2.9 1.3-5.5 5.5-5.5 8.8 0 5.1 4.9 10 10 10s10-4.9 10-10c0-3.3-2.6-7.5-5.5-8.8-2.7-1.2-2.7-1.3-1-3.2 2.1-2.3 1.3-3.9-1-2-1.3 1.1-1.5.7-1.5-2.6 0-3.2.7-4.6 4.7-8.6l4.8-4.8-5.3-5.2L40-.5l-4.8 4.8L30.4 9l-2.2-2.2c-2.3-2.4-4.3-1.8-2.2.7 1.1 1.3.8 1.5-2.3 1.5-2.9 0-3.7-.5-4.7-3C16.8.8 10.2-1.4 5.1 1.4z" />
        </svg>
      ),
      link: { title: "Overview of all products", url: "/product/operations" },
    },
    {
      title: "Commerce ",
      description: "Get the best commerce experience for your products",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="w-8 h-8">
          <path stroke="#007aff" fill="#007aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.921 17.95A1.026 1.026 0 1 1 9.9 16.9c.571.01 1.028.479 1.021 1.05ZM16.391 17.95a1.026 1.026 0 1 1-1.026-1.05 1.038 1.038 0 0 1 1.026 1.05ZM20.13 7.8h-9.893l-.684 5.6a1.384 1.384 0 0 0 1.368 1.4h6.064c.484-.002.93-.26 1.173-.68l3.142-4.2a1.4 1.4 0 0 0-1.17-2.12v0Z" clipRule="evenodd" /><path fill="#007aff" d="M9.508 7.978a.75.75 0 1 0 1.458-.356l-1.458.356Zm.074-2.86.729-.178V4.94l-.729.179ZM9.432 5l.003-.75h-.003V5Zm-2.614-.75a.75.75 0 0 0 0 1.5v-1.5Zm.545 5.389a.75.75 0 0 0 0-1.5v1.5ZM4.5 8.139a.75.75 0 0 0 0 1.5v-1.5Zm2.864 3.833a.75.75 0 0 0 0-1.5v1.5Zm-.932-1.5a.75.75 0 0 0 0 1.5v-1.5Zm4.534-2.85L10.31 4.94l-1.458.356.655 2.682 1.458-.356ZM10.31 4.94a.905.905 0 0 0-.875-.689l-.006 1.5a.595.595 0 0 1-.575-.453l1.456-.358Zm-.878-.689H6.818v1.5h2.614v-1.5ZM7.363 8.139H4.5v1.5h2.863v-1.5Zm.001 2.333h-.932v1.5h.932v-1.5Z" />
        </svg>
      ),
      link: { title: "Overview of all products", url: "/product/commerce" },
    },
  ],
  footer: [
    {
      title: "ProductDB AI",
      description: "Lorem ipsum dolor site ame",
      link: { title: "", url: "#" },
    },
    {
      title: "App Marketplace",
      description: "Lorem ipsum dolor site ame",
      link: { title: "", url: "https://marketplace.productdb.io",  },
    },
  ],
};
export default product_data;
