import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-bootstrap';

const Footer = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'> &copy; Dark secrets Fragrance</Col>
          <Col className='d-flex justify-content-center '>
            <Row className='align-self-center'>
              <Col className='d-flex '>
                {/* <a href='https://www.instagram.com/darksecretsfragrances/'> */}
                <i
                  className='fab fa-instagram-square'
                  style={{
                    fontSize: 30,
                    color: 'black',
                  }}
                  onClick={() =>
                    openInNewTab(
                      'https://www.instagram.com/darksecretsfragrances/'
                    )
                  }
                ></i>
                {/* </a> */}
              </Col>
              <Col>
                <i
                  className='fab fa-whatsapp-square'
                  style={{
                    fontSize: 30,
                    color: 'black',
                  }}
                  onClick={() =>
                    openInNewTab(
                      'https://api.whatsapp.com/send?phone=233245826173&text=Hi,%20thank%20you%20for%20vsiting%20our%20website.%20How%20may%20we%20help%20you%20today?'
                    )
                  }
                ></i>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
