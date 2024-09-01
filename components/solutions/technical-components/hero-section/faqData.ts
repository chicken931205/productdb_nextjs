export type FAQ = {
  id: number;
  quest: string;
  ans: string;
};

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "Product Description",
    ans: "The smartest way to a perfect data exchange of technical products? Looking for effective e-business solutions? Discover ProductDB as your stepping stone!.",
  },
  {
    id: 2,
    quest: "Pricing Overview",
    ans: "H.",
  },
  {
    id: 3,
    quest: "Features",
    ans: "** 1)Enhanced Searchability:** Easily find specific products with organized categories and attributes.<br/><b>2)Consistent Data:</b> Standardized product information ensures accuracy and reliability.<br/><b>3)Inventory Management:</b> Efficiently track stock levels and optimize inventory.<br/><b>4)Streamlined Updates:</b> Simplify product updates and maintenance across all items.<br/><b>5)Detailed Analytics:</b> Gain insights into sales trends and customer preferences.<br/><b>6)Improved Customer Experience:</b> Help customers find, compare, and purchase products easily.<br/><b>7)Seamless Integration:</b> Ensure compatibility with ERP, CRM, and e-commerce platforms.<br/><b>8)Lifecycle Management:</b> Manage product phases from introduction to obsolescence.<br/><b>9)Compliance Support:</b> Maintain and access necessary documentation for regulatory compliance.",
  },
];

export default faqData;
