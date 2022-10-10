import classNames from 'util/classNames';

import React from 'react';

import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { Row, Col, InputGroup, Form, Button } from 'react-bootstrap';

import styles from './Footer.module.scss';
const Footer = () => {
  return (
    <footer className={classNames(styles.footer__container)}>
      <Row className="container mx-auto">
        <Col xs={12} className="d-flex justify-content-center">
          <Image src="/logo.png" width={300} height={100} />
        </Col>
        <Col xs={12} md={6} lg={3} className="font-14 my-4">
          <h4 className="mb-4">Yanns Bisiklet</h4>

          <ul className={styles.footer_ul}>
            <li>
              <i className="me-2">
                <FontAwesomeIcon icon={faMapMarker} />
              </i>
              <span>Konrad Adenauer Cad. No:38 Çankaya ANKARA</span>
            </li>
            <li>
              <i className="me-2">
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <span>0553 716 46 70</span>
            </li>
            <li>
              <i className="me-2">
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <span>darimuhittin@gmail.com</span>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={6} lg={3} className="font-14 my-4">
          <h4 className="mb-4">Kurumsal</h4>
          <ul className={styles.footer_ul}>
            <li>
              <a href="#">Hakkimizda</a>
            </li>
            <li>
              <a href="#">Magaza Fotograflari</a>
            </li>{' '}
            <li>
              <a href="#">Dumblentum espiraso</a>
            </li>{' '}
            <li>
              <a href="#">Lorem ipsum dolor sit amet</a>
            </li>{' '}
            <li>
              <a href="#">Deneme yazisi</a>
            </li>{' '}
            <li>
              <a href="#">Magazamiz</a>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={6} lg={3} className="font-14 my-4">
          <h4 className="mb-4">Musteri Hizmetleri</h4>
          <ul className={styles.footer_ul}>
            <li>
              <a href="#">Alisveris Guvenligi</a>
            </li>
            <li>
              <a href="#">Teknik Bilgiler</a>
            </li>{' '}
            <li>
              <a href="#">Teslimat Kosullari</a>
            </li>{' '}
            <li>
              <a href="#">Iptal ve Iade sartlari</a>
            </li>{' '}
            <li>
              <a href="#">Gizlilik Sozlesmesi</a>
            </li>{' '}
            <li>
              <a href="#">Calisma Saatleri</a>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={6} lg={3} className="font-14 my-4">
          <h4 className="mb-4">Bultenimize Katilin</h4>
          <span className="text-muted">
            Kampanya ve indirimli ürünlerimizden, anında haberdar olmak için bültenimize kayıt olun.
          </span>
          <p className="mt-5">E-Posta Adresinizi Giriniz</p>
          <InputGroup className="mb-3 mt-4">
            <Form.Control
              placeholder="E-Mail Adresiniz"
              aria-label="E-Mail Adresiniz"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Kaydol
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
