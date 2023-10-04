import ConnetSocial from "./ConnetSocial"

function OfferBanner() {
    return (
        <div className=" bg-[#1212120e]">
            <div className=" flex  items-center Container ">

                <ConnetSocial style='hidden md:block' />

                <div className="wrap py-2 w-full">
                    <p
                        className="text-center font-bold text-[0.70rem]  md:text-sm">
                        GET 10% OFF YOUR FIRST ORDER: RCOMMERCE2023
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OfferBanner