import { BsSkype, BsWhatsapp } from "react-icons/bs"


const Layout = () => {
  return (
    <>
    <a
        href="https://join.skype.com/invite/sNPTbGeKymg2"
        className="bt-buy-now theme-btn"
        style={{position:'fixed',bottom:'70px',left:'10px'}}
      >
        <i className="fa fa-skype" style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}} >
            <BsSkype/>
        </i>
        <span>Skype</span>
      </a>
      
      <a
        href='https://wa.me/+918696219723'
        className="bt-support-now theme-btn"
        style={{position:'fixed',bottom:'10px',left:'10px'}}

      >
        <i className="fa fa-whatsapp" style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}} >
            <BsWhatsapp/>
        </i>
        <span>WhatsApp</span>
      </a>
    
    </>
  )
}

export default Layout