import React from 'react';
import mountain1 from '../assets/mountain1.jpg';
import mountain2 from '../assets/mountain2.jpg';
import mountain3 from '../assets/mountain3.jpg';

const Home = () => {
    return (
        <div className="container">
            <h1 className="mt-4"> This is My Home Page</h1>
            <p>Welcome to My blog! Here you'll find a variety of articles and resources.</p>
            <div className="row mt-4">
                <div className="col-md-4">
                    <img src={mountain1} alt="Mountain 1" className="img-fluid mb-3"/>
                    <h2>The Tranquil Beauty of Mountain</h2>
                    <p>Known for its tranquil beauty and serene environment. Unlike the more rugged peaks, Mountain 2 offers gentle slopes and lush greenery, making it a perfect destination for those looking to reconnect with nature. The mountain is home to a variety of flora and fauna, and its trails are lined with vibrant wildflowers. Visitors can enjoy peaceful walks, scenic picnics, and breathtaking views that stretch as far as the eye can see. Mountain 2 is a sanctuary for nature lovers and a perfect escape from the hustle and bustle of city life..</p>
                </div>
                <div className="col-md-4">
                    <img src={mountain2} alt="Mountain 2" className="img-fluid mb-3"/>
                    <h2>The Adventure of Mountain</h2>
                    <p>With its steep cliffs and challenging trails, it attracts thrill-seekers and adventure enthusiasts from around the globe. The mountain offers a variety of outdoor activities, from rock climbing and mountain biking to zip-lining and paragliding. Each turn presents a new challenge and a new opportunity to push your limits. For those who crave excitement and an adrenaline rush, Mountain 3 is the ultimate destination. Embrace the adventure and create memories that will last a lifetime.</p>
                </div>
                <div className="col-md-4">
                    <img src={mountain3} alt="Mountain 3" className="img-fluid mb-3"/>
                    <h2>The Majestic Peaks of Mountain</h2>
                    <p>Unlike the more rugged peaks, Mountain 2 offers gentle slopes and lush greenery, making it a perfect destination for those looking to reconnect with nature. The mountain is home to a variety of flora and fauna, and its trails are lined with vibrant wildflowers. Visitors can enjoy peaceful walks, scenic picnics, and breathtaking views that stretch as far as the eye can see. Mountain 2 is a sanctuary for nature lovers and a perfect escape from the hustle and bustle of city life.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;