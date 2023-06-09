import { useState } from "react";


function AccordionCoupn() {
    const [activeDefault, setActiveDefault] = useState(0);
    const defaultAccordion = [
        {
            title: "Q: How to place the order or contact you?",
            text:
                "A: You can simply fill the above contact form or click on button to discuss on WhatsApp and Skype ",
            bg: "primary",
        },
        {
            title: "Q: What is a coupon and deal website?",
            text:
                "A: A coupon and deal website is an online platform that aggregates discounts, deals, and coupons from various retailers and brands, allowing users to save money on their purchases.",
            bg: "primary",
        },
        {
            title: "Q: Why should I hire a coupon and deal website development agency?",
            text:
                " A: Hiring a professional agency ensures that your coupon and deal website is expertly designed, user-friendly, and optimized for conversions, maximizing its effectiveness in attracting users and generating revenue.",

            bg: "info",
        },
        {
            title: "Q: What services does your agency provide for coupon and deal website development? ",
            text:
                "A: Our agency offers comprehensive services including website design, development, user experience optimization, coupon integration, deal management systems, and ongoing maintenance and support.",

            bg: "success",
            
        },
        {
            title: "Q: How long does it take to develop a coupon and deal website?",
            text:
                "A: The development timeline depends on the complexity of the project, desired features, and customization requirements. We work closely with clients to determine timelines and ensure efficient delivery.",

            bg: "success",
        },
        {
            title: "Q: Can you integrate coupon feeds from multiple retailers or platforms?",
            text:
                "A: Yes, our agency has expertise in integrating coupon feeds from various retailers and platforms, ensuring a seamless and up-to-date coupon inventory on your website.",

            bg: "success",
        },
        {
            title: "Q: Can I customize the design and branding of my coupon and deal website?",
            text:
                "A: Absolutely! We understand the importance of branding and can tailor the design to match your brand identity, including customizing colors, logos, and overall aesthetics.",

            bg: "success",
        },
        {
            title: "Q: Will my coupon and deal website be mobile-friendly?",
            text:
                "A: Yes, we prioritize mobile responsiveness to ensure that your website looks and functions flawlessly on a variety of devices, including smartphones and tablets. ",

            bg: "success",
        },
        {
            title: "Q: Can I manage and update deals and coupons on my website after it's launched?",
            text:
                " A: Yes, we provide user-friendly content management systems that empower you to easily manage and update your website's deals, coupons, and content without requiring technical expertise.",

            bg: "success",
        },
        {
            title: "Q: Will my website be optimized for search engines?",
            text:
                "A: Yes, we follow best practices for search engine optimization (SEO) during website development to enhance visibility, organic traffic, and rankings on search engine results pages.",

            bg: "success",
        },
        {
            title: "Q: What ongoing support and maintenance services do you offer?",
            text:
                "A: Our agency provides ongoing support, maintenance, and security updates to ensure the smooth functioning and security of your coupon and deal website after it's launched.",

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
                    <div className="card" key={i}>
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
                    </div>
                ))}
            </div>
    </>
  )
}

export default AccordionCoupn;