import styles from "./Services.module.scss";
import { ReactComponent as WebsiteDevIcon } from "../../assets/web-dev.svg";
import { ReactComponent as InteractiveIcon } from "../../assets/sliders-svgrepo-com.svg";
import { ReactComponent as DataIcon } from "../../assets/data-svgrepo-com.svg";
import { ReactComponent as SmartPhoneIcon } from "../../assets/smartphone-2-svgrepo-com.svg";

interface ServiceType {
  icon: React.ReactNode;
  headText: string;
  desc: string;
  dataBool: boolean;
}

const servicesArr: ServiceType[] = [
  {
    icon: <WebsiteDevIcon />,
    headText: "Website development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et accusantium nostrum voluptate aspernatur recusandae!",
    dataBool: false,
  },

  {
    icon: <InteractiveIcon />,
    headText: "Interactive features",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et accusantium nostrum voluptate aspernatur recusandae!",
    dataBool: false,
  },

  {
    icon: <DataIcon />,
    headText: "Backend APIs integration",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et accusantium nostrum voluptate aspernatur recusandae!",
    dataBool: true,
  },

  {
    icon: <SmartPhoneIcon />,
    headText: "Responsive Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et accusantium nostrum voluptate aspernatur recusandae!",
    dataBool: false,
  },
];

const Services: React.FC = () => {
  return (
    <section id="Services" className={`${styles.Services} section`}>
      <div className={`${styles.Services__wrapper} wrapper`}>
        <div className={styles.Services__content_div}>
          <h2 className={styles.Services__content_div__head_text}>Services</h2>

          <p className={styles.Services__content_div__desc}>
            Crafting responsive, visually engaging websites that provide
            seamless user experiences across devices. I bring designs to life by
            transforming static mockups into fully functional web pages that
            look great on desktops, tablets, and mobile devices.
          </p>

          <p className={styles.Services__content_div__desc}>
            I develop engaging, interactive elements like animations, sliders
            and modals that enhance the website’s functionality and captivate
            visitors
          </p>
        </div>

        <div className={styles.Services__service_wrapper}>
          {servicesArr.map((el, index) => (
            <div
              key={index}
              className={styles.Services__service_wrapper__service_box}
            >
              <span
                className={`${styles.Services__service_wrapper__service_box__icon}`}
              >
                {el.icon}
              </span>
              <h4
                className={
                  styles.Services__service_wrapper__service_box__head_text
                }
              >
                {el.headText}
              </h4>
              <p
                className={styles.Services__service_wrapper__service_box__desc}
              >
                {el.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

//  <div className={styles.Services__service_wrapper__service_box}>
//             <span
//               className={styles.Services__service_wrapper__service_box__icon}
//             >
//               <svg
//                 fill="#000000"
//                 version="1.1"
//                 id="Layer_1"
//                 // xmlns:x="&ns_extend;"
//                 // xmlns:i="&ns_ai;"
//                 // xmlns:graph="&ns_graphs;"
//                 xmlns="http://www.w3.org/2000/svg"
//                 // xmlns:xlink="http://www.w3.org/1999/xlink"
//                 width="800px"
//                 height="800px"
//                 viewBox="0 0 24 24"
//                 enable-background="new 0 0 24 24"
//                 // xml:space="preserve"
//               >
//                 {/* <metadata>
//                   <sfw xmlns="&ns_sfw;">
//                     <slices></slices>
//                     <sliceSourceBounds
//                       width="505"
//                       height="984"
//                       bottomLeftOrigin="true"
//                       x="0"
//                       y="-552"
//                     ></sliceSourceBounds>
//                   </sfw>
//                 </metadata> */}
//                 <g>
//                   <g>
//                     <g>
//                       <path d="M4,8C1.8,8,0,6.2,0,4s1.8-4,4-4s4,1.8,4,4S6.2,8,4,8z M4,2C2.9,2,2,2.9,2,4s0.9,2,2,2s2-0.9,2-2S5.1,2,4,2z" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path
//                         d="M16,16c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S18.2,16,16,16z M16,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,10,16,10
// 					z"
//                       />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M23,5H7C6.4,5,6,4.6,6,4s0.4-1,1-1h16c0.6,0,1,0.4,1,1S23.6,5,23,5z" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M23,13h-4c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M13,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h12c0.6,0,1,0.4,1,1S13.6,13,13,13z" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path
//                         d="M10,24c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S12.2,24,10,24z M10,18c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S11.1,18,10,18
// 					z"
//                       />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M23,21H13c-0.6,0-1-0.4-1-1s0.4-1,1-1h10c0.6,0,1,0.4,1,1S23.6,21,23,21z" />
//                     </g>
//                   </g>
//                   <g>
//                     <g>
//                       <path d="M7,21H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h6c0.6,0,1,0.4,1,1S7.6,21,7,21z" />
//                     </g>
//                   </g>
//                 </g>
//               </svg>
//             </span>
//             <h4
//               className={
//                 styles.Services__service_wrapper__service_box__head_text
//               }
//             >
//               Interactive features
//             </h4>
//             <p className={styles.Services__service_wrapper__service_box__desc}>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et
//               accusantium nostrum voluptate aspernatur recusandae!
//             </p>
//           </div>
//           <div className={styles.Services__service_wrapper__service_box}>
//             <span
//               className={`${styles.Services__service_wrapper__service_box__icon} ${styles.data_icon}`}
//             >
//               <svg
//                 width="800px"
//                 height="800px"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g id="System / Data">
//                   <path
//                     id="Vector"
//                     d="M18 12V17C18 18.6569 15.3137 20 12 20C8.68629 20 6 18.6569 6 17V12M18 12V7M18 12C18 13.6569 15.3137 15 12 15C8.68629 15 6 13.6569 6 12M18 7C18 5.34315 15.3137 4 12 4C8.68629 4 6 5.34315 6 7M18 7C18 8.65685 15.3137 10 12 10C8.68629 10 6 8.65685 6 7M6 12V7"
//                     stroke="#000000"
//                     stroke-width="2"
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                   />
//                 </g>
//               </svg>
//             </span>
//             <h4
//               className={
//                 styles.Services__service_wrapper__service_box__head_text
//               }
//             >
//               Backend APIs integration
//             </h4>
//             <p className={styles.Services__service_wrapper__service_box__desc}>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et
//               accusantium nostrum voluptate aspernatur recusandae!
//             </p>
//           </div>
//           <div className={styles.Services__service_wrapper__service_box}>
//             <span
//               className={styles.Services__service_wrapper__service_box__icon}
//             >
//               <svg
//                 width="800px"
//                 height="800px"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <g id="SVGRepo_bgCarrier" stroke-width="0" />
//                 <g
//                   id="SVGRepo_tracerCarrier"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//                 <g id="SVGRepo_iconCarrier">
//                   {" "}
//                   <path
//                     fill-rule="evenodd"
//                     clip-rule="evenodd"
//                     d="M5.17157 3.17157C4 4.34315 4 6.22876 4 10V14C4 17.7712 4 19.6569 5.17157 20.8284C6.34315 22 8.22876 22 12 22C15.7712 22 17.6569 22 18.8284 20.8284C20 19.6569 20 17.7712 20 14V10C20 6.22876 20 4.34315 18.8284 3.17157C17.6569 2 15.7712 2 12 2C8.22876 2 6.34315 2 5.17157 3.17157ZM9 4.25C8.58579 4.25 8.25 4.58579 8.25 5C8.25 5.41421 8.58579 5.75 9 5.75H15C15.4142 5.75 15.75 5.41421 15.75 5C15.75 4.58579 15.4142 4.25 15 4.25H9ZM12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19Z"
//                     fill="#000"
//                   />{" "}
//                 </g>
//               </svg>
//             </span>
//             <h4
//               className={
//                 styles.Services__service_wrapper__service_box__head_text
//               }
//             >
//               Responsive Design
//             </h4>
//             <p className={styles.Services__service_wrapper__service_box__desc}>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et
//               accusantium nostrum voluptate aspernatur recusandae!
//             </p>
//           </div>
