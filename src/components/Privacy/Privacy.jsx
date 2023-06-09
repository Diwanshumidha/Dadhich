import React from 'react'
import p from './Privacy.module.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Privacy() {
    return (
        <>
            <Header/>
            <div
                className="dlab-bnr-inr style-1 bg-primary"
                style={{
                    backgroundImage: "url(images/banner/bnr2.png), var(--gradient-sec)",
                    backgroundSize: "cover, 200%",
                }}
            >
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        {/* <h1>Dadhich Technologies</h1> */}
                        <h1>Privacy Policy</h1>
                        {/* <!-- Breadcrumb Row --> */}
                        <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                            {/* <ul className="breadcrumb my-3">
                                <li className="breadcrumb-item">
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    About Us
                                </li>
                            </ul> */}
                        </nav>
                        {/* <!-- Breadcrumb Row End --> */}
                    </div>
                </div>
            </div>
            <div className='text-center my-3'>
                {/* <h5>Privacy Policy</h5> */}
            </div>
            <div className={`${p.heading}`}>
                <div className={`${p.box}`}>
                    <p>At Dadhich Technologies, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard the information you provide to us. By accessing or using our website, you agree to the terms of this polic</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}>  1 - Information We Collect </h6> <br />
                        <h6 className={`${p.head}`}> 1.1 </h6> Personal Information: When you interact with our website or contact us, we may collect personal information such as your name, email address, phone number, and any other information you voluntarily provide to us</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}> 1.2 Log Data: </h6> Our website may automatically collect certain information about your visit, including your IP address, browser type, operating system, referring/exit pages, and clickstream data. This information is used for analytical purposes and to improve the user experience on our website</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}> 2 Use of Information </h6> <br />
                        <h6> 2.1 </h6> Providing Services: We may use the information you provide to deliver the services you requested, such as responding to your inquiries, providing project updates, or delivering completed projects.</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}> 2.2 </h6> Communication: With your consent, we may use your contact information to send you newsletters, marketing communications, or promotional offers. You can opt out of receiving these communications at any time.</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}> 2.3 </h6> Website Improvement: We may use the information collected to analyze trends, monitor the effectiveness of our website, and make improvements to enhance user experience.</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}> 2.4 </h6> Legal Obligations: We may disclose your information if required to do so by law or if we believe that such action is necessary to comply with legal processes, protect our rights, or ensure the safety of our users or others.</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}> 4 Third-Party Services </h6>
                        Our website may contain links to third-party websites or services that are not owned or controlled by Dadhich Technologies. This Privacy Policy applies solely to information collected by our website, and we are not responsible for the privacy practices of any third-party websites. We encourage you to review the privacy policies of these third parties before providing any personal information.</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}> 5 Your Choices </h6> <br />
                        <h6> 5.1 </h6> Access, Update, or Delete Information: If you would like to access, update, or delete the personal information we have about you, please contact us using the information provided below. We will respond to your request within a reasonable timeframe.</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}> 5.2 </h6> Cookies: Our website may use cookies and similar technologies to enhance your browsing experience. You can set your browser to refuse all or some cookies or to be alerted when cookies are being sent. However, please note that blocking or deleting cookies may impact the functionality of our website.</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}> 6 Changes to this Privacy Policy </h6>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}> 7 Contact Us </h6>
                        If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at:</p>
                </div>
                {/* <div className={`${p.box}`}>
                    <p className={`${p.head} text-right`}>
                        Dadhich Technologies <br />
                        Email: Info@DadhichTechnologies.com <br />
                        Phone: +918696219723
                        155,Mata Ka Than<br />
                        Jodhpur,India 342001 <br />
                    </p>
                </div> */}
            </div>
            <Footer/>
        </>
    )
}
