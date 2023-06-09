import React from 'react'
import p from './Term.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Term() {
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
                        <h1>Terms & Conditions</h1>
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
                {/* <h5>Terms & Conditions</h5> */}
            </div>
            <div className={`${p.heading}`}>
                <div className={`${p.box}`}>
                    <p>These terms and conditions ("Agreement") govern your use of the services provided by Dadhich Technologies for website development and related services. By engaging with the Agency and using its services, you agree to comply with these terms and conditions. If you do not agree with any part of this Agreement, please refrain from using our services.</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}>  Services Offered </h6> <br />
                        <h6 className={`${p.head}`}> 1.1 </h6>  The Agency provides website design, development, and related services as agreed upon in a separate agreement or proposal between the Agency and the client ("Client").</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}> Client Obligations <br /> Intellectual Property <br />3.1 </h6>  The Agency retains ownership of any pre-existing intellectual property, including but not limited to website templates, code libraries, and design elements, unless otherwise specified in a separate agreement.
                    </p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}> </h6> <br />
                        <h6>3.2 </h6>  Upon completion of the project and full payment, the Agency transfers ownership of the developed website to the Client. The Client assumes responsibility for the content and any associated intellectual property rights.
                    </p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}>Payment Terms <br />4.1 </h6> he Client agrees to pay the Agency the agreed-upon fees for the services rendered. Payment terms, including the amount, schedule, and method of payment, will be outlined in a separate agreement or proposal.</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}> Project Timeline and Delays <br />5.1 </h6>  The Agency and Client shall agree upon a project timeline. The Client agrees to provide timely feedback, approvals, and materials to ensure the project progresses according to the agreed schedule.</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}> 5.2 </h6> Delays caused by the Client, including but not limited to late content submission, revision requests, or failure to provide necessary information, may result in adjustments to the project timeline and additional fees.</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}>Confidentiality <br /> 6.1 </h6>
                        The Agency and Client agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of the project..</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}>6.2 </h6> <br />
                        <h6> 5.1 </h6>The Agency may showcase the completed project in its portfolio or promotional materials unless otherwise specified in writing by the Client.</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}>Limitation of Liability <br />7.1 </h6>The Agency shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of its services or any issues related to the website or online presence.</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}>7.2 </h6>
                        The Agency does not guarantee the availability, performance, or compatibility of the website after it has been launched, as it may be subject to factors beyond the Agency's control.</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}>Termination <br />8.1</h6>
                        Either party may terminate the Agreement for any reason by providing written notice to the other party.</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}>8.2</h6>
                        Upon termination, the Client shall pay for any outstanding fees incurred up to the termination date.</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}>Governing Law and Jurisdiction <br />9.1</h6>
                        This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of [Jurisdiction].</p>
                </div>
                <div className={`${p.box}`}>
                    <p> <h6 className={`${p.head}`}>Entire Agreement <br />10.1</h6>
                        This Agreement constitutes the entire understanding between the Agency and the Client, superseding any prior agreements, communications, or representations, whether oral or written.</p>
                </div>
            </div>
        <Footer/>
        </>
    )
}
