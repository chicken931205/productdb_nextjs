import { FeatureTab } from "@/types/featureTab";

const featuresTabData = [

  {
    id: "tabTwo",
    // text: "Dashboard",
    icon: (
      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.3414 16.15C31.3414 12.9593 31.2077 10.3543 31.0321 8.30902C30.7233 4.71314 28.0243 2.01416 24.4284 1.70536C22.3831 1.52972 19.7782 1.396 16.5875 1.396C13.3968 1.396 10.7918 1.52972 8.74652 1.70536C5.15064 2.01416 2.45166 4.71314 2.14286 8.30902C1.96722 10.3543 1.8335 12.9593 1.8335 16.15C1.8335 19.4688 1.97817 22.1538 2.16422 24.2346C2.47406 27.7 5.03436 30.2969 8.50083 30.5949C10.5418 30.7704 13.2059 30.9039 16.5875 30.9039C19.969 30.9039 22.6331 30.7704 24.6741 30.5949C28.1406 30.2969 30.7009 27.7 31.0107 24.2346C31.1968 22.1538 31.3414 19.4688 31.3414 16.15Z"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M30.7738 9.625L24.3078 16.6083C23.9108 17.0371 23.3423 17.2652 22.759 17.2299L15.356 16.7812C14.7069 16.7419 14.081 17.0286 13.6869 17.5458L10.2461 22.0619C9.94527 22.4568 9.50519 22.722 9.01558 22.8036L2.96826 23.8115"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M23.6807 17.002L31.3414 9.625L30.7739 27.2163L25.9505 30.621L8.07552 30.9047L4.1033 28.9186L2.11719 23.8115L9.7779 22.6766L14.885 16.7183L23.6807 17.002Z"
          fill="#FFFFFF"
          fillOpacity="0.1"
        ></path>
      </svg>
    ),
    image: "/product/featureTab/board-view.png",
    // imageSm: "/home/features/dashboards-sm.png",
  },
  {
    id: "tabThree",
    // text: "AI",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40.9022 4.03313C40.31 1.98896 37.1889 1.98896 36.5967 4.03313L35.7584 6.92856C33.9502 13.167 31.4793 18.0401 24.7657 19.7199L21.6501 20.4996C19.45 21.0499 19.45 23.9501 21.6501 24.5004L24.7657 25.2801C31.4793 26.9599 33.9502 31.8329 35.7584 38.0714L36.5967 40.9669C37.1889 43.011 40.31 43.011 40.9022 40.9669L41.7416 38.0714C43.5487 31.8329 46.0207 26.9599 52.7342 25.2801L55.8499 24.5004C58.05 23.9501 58.05 21.0499 55.8499 20.4996C53.6498 19.9493 52.7342 19.7199 52.7342 19.7199C46.0207 18.0401 43.5487 13.167 41.7416 6.92856L40.9022 4.03313Z"
          fill="#24223E"
          fillOpacity="0.1"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.0413 33.4582C14.686 32.1806 12.8133 32.1806 12.458 33.4582L11.9551 35.2679C10.8701 39.1669 9.3876 42.2126 5.35945 43.2624L3.49005 43.7497C2.16998 44.0937 2.16998 45.9063 3.49005 46.2503L5.35945 46.7376C9.3876 47.7874 10.8701 50.8331 11.9551 54.7321L12.458 56.5418C12.8133 57.8194 14.686 57.8194 15.0413 56.5418L15.5449 54.7321C16.6292 50.8331 18.1124 47.7874 22.1405 46.7376L24.0099 46.2503C25.33 45.9063 25.33 44.0937 24.0099 43.7497C22.6899 43.4058 22.1405 43.2624 22.1405 43.2624C18.1124 42.2126 16.6292 39.1669 15.5449 35.2679L15.0413 33.4582Z"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    image: "/product/featureTab/box-view.png",
  },
  {
    id: "tabFour",
    icon: (
      <svg
        width="33"
        height="25"
        viewBox="0 0 33 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.4283 12.4981C31.4283 10.834 31.3602 9.38804 31.2574 8.15311C30.9641 4.63108 28.1543 2.17497 24.6273 1.94948C22.5654 1.81765 19.9236 1.71631 16.6744 1.71631C13.4251 1.71631 10.7834 1.81765 8.72146 1.94948C5.19444 2.17497 2.38467 4.63108 2.09136 8.15311C1.98852 9.38804 1.92041 10.834 1.92041 12.4981C1.92041 14.244 1.99538 15.7498 2.10679 17.0238C2.40615 20.4469 5.10998 22.8336 8.53926 23.0509C10.5865 23.1807 13.266 23.2798 16.6744 23.2798C20.0828 23.2798 22.7623 23.1807 24.8095 23.0509C28.2388 22.8336 30.9426 20.4469 31.242 17.0238C31.3534 15.7498 31.4283 14.244 31.4283 12.4981Z"
          fill="#FFFFFF"
          fillOpacity="0.1"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M17.8096 14.7671L21.7818 17.6044L25.754 14.7671"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M25.7539 10.228L21.7817 7.39073L17.8095 10.228"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    image: "/product/featureTab/calendar-view.png",
  },
  {
    id: "tabFive",
    icon: (
      <svg
        width="29"
        height="27"
        viewBox="0 0 29 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 21C20.7195 21 19.671 21.0221 18.8443 21.0512C17.2961 21.1059 16 21.9509 16 23.5C16 25.0512 17.2928 25.8998 18.8432 25.9522C19.6551 25.9797 20.6964 26 22 26C23.3036 26 24.3449 25.9797 25.1568 25.9522C26.7072 25.8998 28 25.0512 28 23.5C28 21.9509 26.7039 21.1059 25.1557 21.0512C24.329 21.0221 23.2805 21 22 21Z"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M24 13.5C24 13.4682 23.9998 13.4368 23.9994 13.4058C23.9782 11.827 22.4482 11.1372 20.87 11.0878C19.4277 11.0427 17.3189 11 14.5 11C11.6811 11 9.57227 11.0427 8.12997 11.0878C6.55177 11.1372 5.02182 11.827 5.00063 13.4058C5.00021 13.4368 5 13.4682 5 13.5C5 13.5503 5.00053 13.5996 5.00156 13.6479C5.03455 15.1918 6.53082 15.8666 8.0743 15.915C9.47923 15.9591 11.5719 16 14.5 16C17.4281 16 19.5208 15.9591 20.9257 15.915C22.4692 15.8666 23.9655 15.1918 23.9984 13.6479C23.9995 13.5996 24 13.5503 24 13.5Z"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7 1C5.71951 1 4.67101 1.02207 3.84427 1.05125C2.29613 1.1059 1 1.9509 1 3.5C1 5.05124 2.29279 5.89983 3.84315 5.95223C4.65505 5.97967 5.69645 6 7 6C8.30355 6 9.34495 5.97967 10.1568 5.95223C11.7072 5.89983 13 5.05124 13 3.5C13 1.9509 11.7039 1.1059 10.1557 1.05125C9.32899 1.02207 8.28049 1 7 1Z"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    image: "/product/featureTab/gantt-view.png",
  },
  {
    id: "tabSix",
    icon: (
      <svg
        width="27"
        height="32"
        viewBox="0 0 27 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.3473 30.7286C10.8782 30.7286 8.89195 30.6115 7.33302 30.4526C4.3617 30.1496 2.27568 27.8491 2.03183 24.8723C1.85742 22.7432 1.71436 19.8237 1.71436 15.9747C1.71436 12.1257 1.85742 9.20615 2.03183 7.07705C2.27568 4.10029 4.3617 1.79977 7.33302 1.49677C8.89195 1.3378 10.8783 1.2207 13.3473 1.2207C15.7764 1.2207 17.7949 1.33405 19.4198 1.4891C22.6642 1.79869 24.9983 4.33323 25.2509 7.58262C25.4158 9.70402 25.5477 12.49 25.5477 15.9747C25.5477 17.3111 25.5283 18.5448 25.4951 19.6776C22.7294 22.0071 19.3898 22.0357 17.651 21.8475C17.1374 21.7919 16.6472 22.3099 16.722 22.821C16.9705 24.5202 17.002 27.7874 14.4615 30.7205C14.1002 30.7258 13.7288 30.7286 13.3473 30.7286Z"
          fill="#FFFFFF"
          fillOpacity="0.1"
        ></path>
        <path
          d="M7.80266 30.4984C9.28506 30.6338 11.1198 30.7291 13.3475 30.7291C15.5241 30.7291 17.371 30.6381 18.9005 30.5077C22.4691 30.2032 25.0347 27.4205 25.2898 23.848C25.4361 21.7979 25.5479 19.1825 25.5479 15.9752C25.5479 12.7678 25.4361 10.1524 25.2898 8.10227C25.0347 4.52984 22.4691 1.74708 18.9005 1.44267C17.371 1.3122 15.5241 1.22119 13.3475 1.22119C11.1198 1.22119 9.28507 1.31652 7.80267 1.45191C4.53415 1.75045 2.24207 4.27504 1.995 7.54785C1.8378 9.63016 1.71452 12.4022 1.71452 15.9752C1.71452 19.5481 1.8378 22.3202 1.995 24.4025C2.24207 27.6753 4.53414 30.1999 7.80266 30.4984Z"
          fill="#FFFFFF"
          fillOpacity="0.1"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M25.2642 19.3804C22.0256 22.9027 19.5444 19.4255 17.036 21.9339C14.5276 24.4424 18.0047 26.9236 14.1987 30.4458"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.95654 8.03125H19.3057"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.95654 13.7061H15.3335"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    image: "/product/featureTab/embed-view.png",
  },
  {
    id: "tabSeven",
    icon: (
      <svg
        width="33"
        height="34"
        viewBox="0 0 33 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.147 4.57874L14.147 19.9002L24.645 28.6958C24.645 28.6958 32.3057 21.0685 27.766 12.5232C22.9426 3.44382 14.147 4.57874 14.147 4.57874Z"
          fill="#FFFFFF"
          fillOpacity="0.1"
        ></path>
        <path
          d="M1.09521 18.4819C1.09521 10.8036 7.3197 4.5791 14.998 4.5791C22.6763 4.5791 28.9008 10.8036 28.9008 18.4819C28.9008 26.1602 22.6763 32.3847 14.998 32.3847C7.3197 32.3847 1.09521 26.1602 1.09521 18.4819Z"
          fill="#FFFFFF"
          fillOpacity="0.1"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.147 19.8975L18.1192 23.3022"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.147 19.8975V11.3856"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M23.2262 2.87581C23.2262 2.87581 27.3673 2.47715 29.1846 4.29445C31.0019 6.11176 30.6033 10.2528 30.6033 10.2528"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    image: "/product/featureTab/forms-view.png",
  },
  {
    id: "tabEight",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8492 25.435C23.9976 25.435 30.6031 20.0146 30.6031 13.3281C30.6031 6.64164 23.9976 1.22119 15.8492 1.22119C7.70079 1.22119 1.09521 6.64164 1.09521 13.3281C1.09521 16.4289 2.51579 19.2574 4.85203 21.3994C7.18828 23.5413 5.35117 30.7291 5.35117 30.7291L8.44736 27.8657C10.4359 26.0267 13.1406 25.435 15.8492 25.435Z"
          fill="#FFFFFF"
          fillOpacity="0.1"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M10.1748 15.9771L16.9843 15.9771"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M10.1748 10.8687L22.0915 10.8687"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    ),
    image: "/product/featureTab/docs.png",
  },
 
];

export default featuresTabData;
