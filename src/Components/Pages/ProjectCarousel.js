import React from 'react';

const ProjectCarousel = () => {
    return (
        <div className='container mx-auto'>
            <div class="carousel w-6/12 mx-auto mt-14 flex ">
                <div id="item1" class="carousel-item w-full h-96">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2" class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full h-96">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB" class="w-full" />
                </div>
                <div id="item3" class="carousel-item w-full h-96">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" class="w-full" />
                </div>
                <div id="item4" class="carousel-item w-full h-96">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" class="w-full" />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default ProjectCarousel;