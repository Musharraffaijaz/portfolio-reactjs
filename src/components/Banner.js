import { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import headerImg1 from "../assets/img/c1.png";
import headerImg2 from "../assets/img/c2.png";
import headerImg3 from "../assets/img/c3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from 'react-bootstrap-icons';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "UI/UX Designer", "Graphic Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
  
              <div className=''>
                <h1>{`Hi! I'm Musharaf Aijaz   `} <span className="txt-rotate" dataPeriod="1000" data-rotate='["Web Developer", "UI/UX Designer", "Graphic Designer"  ]'><span className="wrap">{text}</span></span></h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>
          </Col>



          <Col >

    <Carousel indicators={false} controls={false} >
      <Carousel.Item interval={1000} >
      <img src={headerImg3} alt="Header Image" style={{borderRadius: '10px'}}/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src={headerImg2} alt="Header Image" style={{borderRadius: '10px'}}/>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src={headerImg1} alt="Header Image" style={{borderRadius: '10px'}}/>
      </Carousel.Item>
    </Carousel>
       

          </Col>
        </Row>
      </Container>
    </section>
  )
}
