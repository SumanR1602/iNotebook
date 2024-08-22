import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={{ marginTop: "8rem" }}>
                <div className="carousel-inner container text-center">
                    <div className="carousel-item active">
                        <p className='fs-1'>
                            It feels like there are endless ways to use iNotebook… Use it for school, work, life, and beyond.
                        </p>
                        <p className='text-center'>~Alekhya</p>
                    </div>
                    <div className="carousel-item">
                        <p className='fs-1'>
                            iNotebook has revolutionized the way I organize my study notes. It's the perfect tool for keeping everything in one place and accessible from anywhere.
                        </p>
                        <p className='text-center'>~Samantha Lee</p>
                    </div>
                    <div className="carousel-item">
                        <p className='fs-1'>
                            iNotebook's intuitive interface and powerful features have made it an essential part of my daily routine. I can't imagine managing my notes without it.
                        </p>
                        <p className='text-center'>~Ava Martinez</p>
                    </div>
                    <div className="carousel-item">
                        <p className='fs-1'>
                            I appreciate how iNotebook seamlessly integrates with my daily workflow. The clean interface and powerful features make managing my notes and tasks effortless.
                        </p>
                        <p className='text-center'>~Ethan Davis</p>
                    </div>
                    <div className="carousel-item">
                        <p className='fs-1'>
                            Perfect for managing everything from ideas to tasks, all in one place."
                        </p>
                        <p className='text-center'>~Mia Robinson</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
