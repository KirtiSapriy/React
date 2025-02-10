import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/images/hero-bg.png';
import Img from '../assets/images/slider-img.png'
import Button from 'react-bootstrap/Button';

function Slider() {
        return (
                <div className=' border border-2 w-full border-dark ' style={{ height: "527px", border: "1px solid black" }}>
                        <Carousel className='h-100 w-full'>
                                <Carousel.Item className=' w-full h-100 '>
                                        <img src={ExampleCarouselImage} height={527} width={"100%"} alt="" />
                                        <Carousel.Caption className='h-100  w-100 postion-absolute top-0 start-0 grid row'>
                                                <div className='col w-50 h-75    text-start '>
                                                        <div className='w-75 h-100 m-auto grid  '>
                                                                <h1 className='row my-5'>Crypto Currency</h1>
                                                                <p className='row my-5'>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                                                </p>
                                                                <Button variant="info" className='row'>Read More</Button>
                                                        </div></div>
                                                <div className='col w-50 h-100'><img className='h-75 w-75' src={Img} alt="" /></div>
                                        </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className='w-full h-100 '>
                                        <img src={ExampleCarouselImage} height={527} width={"100%"} alt="" />
                                        <Carousel.Caption className='h-100  w-100 postion-absolute top-0 start-0 grid row'>
                                                <div className='col w-50 h-75   text-start '>
                                                        <div className='w-75 h-100 m-auto grid  '>
                                                                <h1 className='row my-5'>Crypto Currency</h1>
                                                                <p className='row my-5'>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                                                </p>
                                                                <Button variant="info" className='row'>Read More</Button>
                                                        </div></div>
                                                <div className='col w-50 h-100'><img className='h-75 w-75' src={Img} alt="" /></div>
                                        </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className=' w-full h-100 '>
                                        <img src={ExampleCarouselImage} height={527} width={"100%"} alt="" />
                                        <Carousel.Caption className='h-100  w-100 postion-absolute top-0 start-0 grid row'>
                                                <div className='col w-50 h-75   text-start '>
                                                        <div className='w-75 h-100 m-auto grid  '>
                                                                <h1 className='row my-5'>Crypto Currency</h1>
                                                                <p className='row my-5'>Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                                                </p>
                                                                <Button variant="info" className='row'>Read More</Button>
                                                        </div></div>
                                                <div className='col w-50 h-100'><img className='h-75 w-75' src={Img} alt="" /></div>
                                        </Carousel.Caption>
                                </Carousel.Item>
                        </Carousel>
                </div>
        );
}

export default Slider;