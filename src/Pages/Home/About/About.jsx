import img1 from '../../../assets/images/about_us/parts.jpg'
import img2 from '../../../assets/images/about_us/person.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={img2} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={img1} className="w-1/2 rounded-lg  absolute top-1/2 border-8 border-white right-8" />

                </div>
                <div className='w-1/2 space-y-6'>
                    <p className='text-[#FF3811]  font-bold text-3xl '>About us</p>
                    <div>
                    <h1 className="text-5xl font-bold ">We are qualified & of experience in this field</h1>
                    <div className='w-3/4'>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <p>
                            the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.
                        </p>
                    </div>
                    <button className="btn btn-primary bg-[#FF3811] mt-6 hover:bg-[#ea654b] border-0">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;