export type FeatureTabb = {
  id: string;
  image: string;
  imageh: number;
  imagew: number;
  title: string;
  head1: string;
  desc1: string;
  desc11: string;
  head2: string;
  desc2: string;
  link: string;

  // imageDark: string;
};

const featuresTabData: FeatureTabb[] = [
  {
    id: "tabOne",
    image: "/sales-images/customer-use-sales-hub/teamwork-com-logo.webp",
    imageh: 300,
    imagew: 200,
    title:
      "How Teamwork.com Dropped the Volume Game and Became a 50% More Effective Team",
    head1: "The Problem",
    desc1: `When Teamwork.com went through a period of rapid growth, their sales processes couldn’t keep up.`,
    desc11: `When Teamwork.com went through a period of rapid growth, their sales processes couldn’t keep up.`,
    head2: "The Solution",
    desc2: `They ditched the old “more is more” sales approach and started focusing on quality to increase productivity, efficiency, and profitability with Sales Hub.`,
    link: "Read the full case study",
    // imageDark: "/images/customer-use-sales-hub/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    image:
      "/sales-images/customer-use-sales-hub/Sandler Logo for HS Website.webp",
    imageh: 150,
    imagew: 100,
    title:
      "How Teamwork.com Dropped the Volume Game and Became a 50% More Effective Team",
    head1: "The Problem",
    desc1: `When Teamwork.com went through a period of rapid growth, their sales processes couldn’t keep up.`,
    desc11: `When Teamwork.com went through a period of rapid growth, their sales processes couldn’t keep up.`,
    head2: "The Solution",
    desc2: `They ditched the old “more is more” sales approach and started focusing on quality to increase productivity, efficiency, and profitability with Sales Hub.`,
    link: "Read the full case study",
  },
  {
    id: "tabThree",
    image:
      "/sales-images/customer-use-sales-hub/Ceros Logo for HS Website.webp",
    imageh: 120,
    imagew: 100,
    title:
      "How Teamwork.com Dropped the Volume Game and Became a 50% More Effective Team",
    head1: "The Problem",
    desc1: `When Teamwork.com went through a period of rapid growth, their sales processes couldn’t keep up.`,
    desc11: `When Teamwork.com went through a period of rapid growth, their sales processes couldn’t keep up.`,

    head2: "The Solution",
    desc2: `They ditched the old “more is more” sales approach and started focusing on quality to increase productivity, efficiency, and profitability with Sales Hub.`,
    link: "Read the full case study",
  },
  {
    id: "tabFour",
    image:
      "/sales-images/customer-use-sales-hub/Screenshot 2023-08-21 at 2.35.11 PM.webp",
    imageh: 300,
    imagew: 380,
    title:
      "How Teamwork.com Dropped the Volume Game and Became a 50% More Effective Team ",
    head1: "The Problem",
    desc1: `When Teamwork.com went through a period of rapid growth, their sales processes couldn’t keep up.`,
    desc11: `When Teamwork.com went through a period of rapid growth, their sales processes couldn’t keep up.`,

    head2: "The Solution",
    desc2: `They ditched the old “more is more” sales approach and started focusing on quality to increase productivity, efficiency, and profitability with Sales Hub.`,
    link: "Read the full case study",
  },
];

export default featuresTabData;
