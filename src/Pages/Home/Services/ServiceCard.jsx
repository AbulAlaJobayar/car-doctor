import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="img" className="rounded-xl h-[208px]" />
            </figure>
            <div className="card-body items-start ">
                <h2 className="card-title">{title}</h2>

                <div className="flex justify-between items-center  w-full">
                    <p className="text-base font-bold text-[#FF3811]">Price: ${price}</p>
                    <button className="text-[#FF3811]">
                        <FaArrowRight></FaArrowRight>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;