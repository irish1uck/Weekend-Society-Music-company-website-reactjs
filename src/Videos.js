import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import './Videos.css';
import ReactPlayer from "react-player";

function Videos() {
    return (
        <div className='videos__page'>
            <div className='videos__header'>
                <Header />
            </div>
            <div className='videos__container'>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <div className='videoTitle'>Crazy In Love</div>
                        <ReactPlayer className='video' url='https://vimeo.com/560991462' />
                    </div>
                    <div className='videos__video'>
                        <div className='videoTitle'>Shut Up And Dance</div>
                        <ReactPlayer className='video' url='https://vimeo.com/557864630' />
                    </div>
                </div>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <div className='videoTitle'>Don't Stop Believin'</div>
                        <ReactPlayer className='video' url='https://vimeo.com/560094415' />
                    </div>
                    <div className='videos__video'>
                        <div className='videoTitle'>You Shook Me All Night Long</div>
                        <ReactPlayer className='video' url='https://vimeo.com/555427896' />
                    </div>
                </div>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <div className='videoTitle'>Can't Stop The Feelin'</div>
                        <ReactPlayer className='video' url='https://vimeo.com/561555897' />
                    </div>
                    <div className='videos__video'>
                        <div className='videoTitle'>Fly Me To The Moon</div>
                        <ReactPlayer className='video' url='https://vimeo.com/561558104' />
                    </div>
                </div>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <div className='videoTitle'>Don't Start Now</div>
                        <ReactPlayer className='video' url='https://vimeo.com/563801264' />
                    </div>
                    <div className='videos__video'>
                        <div className='videoTitle'>If I Ain't Got You</div>
                        <ReactPlayer className='video' url='https://vimeo.com/563801725' />
                    </div>
                </div>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <div className='videoTitle'>September</div>
                        <ReactPlayer className='video' url='https://vimeo.com/563807130' />
                    </div>
                    <div className='videos__video'>
                        <div className='videoTitle'>I Want You Back</div>
                        <ReactPlayer className='video' url='https://vimeo.com/567150898' />
                    </div>
                </div>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <div className='videoTitle'>Signed, Sealed, Delivered</div>
                        <ReactPlayer className='video' url='https://vimeo.com/567151670' />
                    </div>
                    <div className='videos__video'>
                        <div className='videoTitle'>Raise Your Glass</div>
                        <ReactPlayer className='video' url='https://vimeo.com/567151151' />
                    </div>
                </div>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <div className='videoTitle'>Shake Your Body Down</div>
                        <ReactPlayer className='video' url='https://vimeo.com/576976080' />
                    </div>
                    <div className='videos__video'>
                        <div className='videoTitle'>Kiss</div>
                        <ReactPlayer className='video' url='https://vimeo.com/576975855' />
                    </div>
                </div>
                <div className='videos__row'>
                    <div className='videos__video'>
                        <div className='videoTitle'>I Wanna Dance With Somebody</div>
                        <ReactPlayer className='video' url='https://vimeo.com/576975954' />
                    </div>
                    <div className='videos__video'>
                        <div className='videoTitle'>That's What I Like</div>
                        <ReactPlayer className='video' url='https://vimeo.com/576981766' />
                    </div>
                </div>
            </div>
            <div className='videos__footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Videos;