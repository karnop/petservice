import React from 'react';
import Image from "next/image";

function ReviewsPage() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-slate-200 p-4 gap-4">

            <div className="p-14 bg-slate-100 rounded-lg shadow-md h-fit">
                <Image src="/quote.png" alt="quote image" height="40" width="40"/>

                <p className="text-gray-700 text-xl text-center">
                    Absolutely Loved it! Now I can get my dog an evening walk with ease!! The staff is good and the website
                    is beautiful. Good work to the team !
                </p>
                
                <div className="stars flex items-center justify-center gap-1 mt-4">
                  <Image src="/review_full_star.png" alt="review star" height="25" width="25"/>
                  <Image src="/review_full_star.png" alt="review star" height="25" width="25"/>
                  <Image src="/review_full_star.png" alt="review star" height="25" width="25"/>
                  <Image src="/review_full_star.png" alt="review star" height="25" width="25"/>
                  <Image src="/review_half_star.png" alt="review star" height="25" width="25"/>
                </div>

                <div className="flex flex-col items-center justify-center mt-4">
                    <p className="font-bold text-lg text-slate-800">Manav M Sanger</p>
                    <p className="text-slate-700">Delhi, India</p>
                </div>
            </div>

            <div className="p-14 bg-slate-100 rounded-lg shadow-md h-fit">
                <Image src="/quote.png" alt="quote image" height="40" width="40"/>

                <p className="text-gray-700 text-xl text-center">
                    Absolutely Loved it! Now I can get my dog an evening walk with ease!! The staff is good and the website
                    is beautiful. Good work to the team !
                </p>

                <div className="stars flex items-center justify-center gap-1 mt-4">
                    <Image src="/review_full_star.png" alt="review star" height="25" width="25"/>
                    <Image src="/review_full_star.png" alt="review star" height="25" width="25"/>
                    <Image src="/review_full_star.png" alt="review star" height="25" width="25"/>
                    <Image src="/review_full_star.png" alt="review star" height="25" width="25"/>
                    <Image src="/review_half_star.png" alt="review star" height="25" width="25"/>
                </div>

                <div className="flex flex-col items-center justify-center mt-4">
                    <p className="font-bold text-lg text-slate-800">Manav M Sanger</p>
                    <p className="text-slate-700">Delhi, India</p>
                </div>
            </div>

            <div className="p-14 bg-slate-100 rounded-lg shadow-md h-fit">
                <Image src="/quote.png" alt="quote image" height="40" width="40"/>

                <p className="text-gray-700 text-xl text-center">
                    Absolutely Loved it! Now I can get my dog an evening walk with ease!! The staff is good and the website
                    is beautiful. Good work to the team !
                </p>

                <div className="stars flex items-center justify-center gap-1 mt-4">
                    <Image src="/review_full_star.png" alt="review star" height="25" width="25"/>
                    <Image src="/review_full_star.png" alt="review star" height="25" width="25"/>
                    <Image src="/review_full_star.png" alt="review star" height="25" width="25"/>
                    <Image src="/review_full_star.png" alt="review star" height="25" width="25"/>
                    <Image src="/review_half_star.png" alt="review star" height="25" width="25"/>
                </div>

                <div className="flex flex-col items-center justify-center mt-4">
                    <p className="font-bold text-lg text-slate-800">Manav M Sanger</p>
                    <p className="text-slate-700">Delhi, India</p>
                </div>
            </div>

        </section>
    );
}

export default ReviewsPage;