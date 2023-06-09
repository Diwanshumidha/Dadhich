import ClientSlider from "./ClientSlider";

function TMClient() {
    return (
        <>
            
            {/* <!-- Clients Logo --> */}
            <div className="p-tb50 bg-gray">
                <div className="container">
                    <div className="clients-carousel owl-none owl-carousel">
                        <ClientSlider/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TMClient;
