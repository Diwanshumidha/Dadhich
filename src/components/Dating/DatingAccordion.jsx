import { motion } from "framer-motion";
import { useState } from "react";


function DatingAccordion() {
    const [activeDefault, setActiveDefault] = useState(0);
    const defaultAccordion = [
        {
            title: "Q:What type of services your agency sffer??",
            text:
                "A: We specialize in designing and developing custom dating and matrimonial websites tailored to your specific requirements.",
            bg: "primary",
        },
        {
            title: "Q: How long does it take to develop a dating or matrimonial website?",
            text:
                "A: The development timeline depends on the complexity of the project. We work closely with you to determine the timeline and ensure timely delivery.",
        },
        {
            title: "Q: Can you integrate matchmaking algorithms into the website?",
            text:
                " A: Absolutely! We can incorporate intelligent matchmaking algorithms that suggest compatible matches based on user preferences and behavior.",

            bg: "info",
        },
        {
            title: "Q: Do you provide mobile-friendly website designs? ",
            text:
                "A: Yes, we ensure that all our website designs are fully responsive and optimized for seamless user experiences across various devices, including mobile phones and tablets.",

            bg: "success",
            
        },
        {
            title: "Q: Can you help with user profile creation and management?",
            text:
                "A: Certainly! Our development services include user profile creation, management, and customization to enhance user engagement and personalization.",

            bg: "success",
        },
        {
            title: "Q: Can you incorporate privacy features into the website?",
            text:
                "A: Yes, we prioritize user privacy and can implement robust privacy controls, allowing users to manage their profile visibility and control who can contact them.",

            bg: "success",
        },
        {
            title: "Q: Can you develop a messaging system for users to communicate with each other?",
            text:
                "A: Absolutely! We can create an integrated messaging system that enables users to communicate privately within the platform.",

            bg: "success",
        },
        {
            title: "Q: How do you ensure the security of user data?",
            text:
                "A: We implement industry-standard security measures, including data encryption, secure payment gateways, and regular data backups, to safeguard user information. ",

            bg: "success",
        },
        {
            title: "Q: Can you provide ongoing maintenance and support after the website launch?",
            text:
                " A: Yes, we offer post-launch maintenance and support services to ensure your website runs smoothly and address any technical issues that may arise.",

            bg: "success",
        },
        {
            title: "Q: Do you offer SEO services to optimize website visibility?",
            text:
                "A: Yes, we can provide SEO services to enhance your website's search engine visibility, improve rankings, and drive organic traffic.",

            bg: "success",
        },
        {
            title: "Q: Can you integrate social media features into the website?",
            text:
                "A: Absolutely! We can integrate social media functionalities, such as login with social accounts and social sharing options, to enhance user engagement and connectivity.",

            bg: "success",
        },
        {
            title: "Q: Can you create a membership system for users?",
            text:
                "A: Yes, we can develop membership plans, including free and premium options, with different features and benefits to monetize the platform.",

            bg: "success",
        },
        {
            title: "Q: Do you provide analytics and reporting features?",
            text:
                "A: Yes, we can incorporate analytics and reporting tools to provide you with insights into user behavior, engagement, and platform performance.",

            bg: "success",
        },
        {
            title: "Q: Can you assist with content moderation and user support?",
            text:
                "A: Absolutely! We can help you implement content moderation systems and provide user support to ensure a safe and enjoyable user experience.",

            bg: "success",
        },
        {
            title: "Q: Can you develop custom features and functionalities unique to our requirements?",
            text:
                "A: Yes, we specialize in custom website development and can create unique features and functionalities to meet your specific needs and differentiate your platform.",

            bg: "success",
        },
        
    ];
  return (
    <>
      <div
                className="dlab-accordion accordion-sm"
                id="accordionFaq"
                defaultActiveKey="0"
            >
                {defaultAccordion.map((d, i) => (
                    <motion.div className="card" key={i}
                    initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
                    >
                        <div
                            eventKey={`${i}`}
                            className="card-header"
                            onClick={() =>
                                setActiveDefault(activeDefault === i ? -1 : i)
                            }
                        >
                            <h5 className="dlab-title">
                                <a 
                                    className={`${
                                        activeDefault === i ? "" : "collapsed"
                                    }`}
                                    onClick={() =>
                                        setActiveDefault(
                                            activeDefault === i ? -1 : i
                                        )
                                    }
                                >
                                    {" "}
                                    {d.title}
                                </a>
                            </h5>
                        </div>
                        {/* <div className="collapse show" eventKey={`${i}`}>
                            <div className="card-body">
                                <p className="m-b0">{d.text}</p>
                            </div>
                        </div> */}
                        <div className={`${
                                        activeDefault === i ? "collapsed show" : "collapsed"
                                    }`} eventKey={`${i}`} onClick={() =>
                                        setActiveDefault(
                                            activeDefault === i ? -1 : i
                                        )
                                    }>
                            <div className="card-body">
                                <p className="m-b0">{d.text}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
    </>
  )
}

export default DatingAccordion;