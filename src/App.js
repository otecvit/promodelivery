import React, { Component } from 'react';
import { Layout, Menu, Button, Row, Col } from 'antd';
import { ReactComponent as Logo } from '../src/logo.svg';
import SliderImage from './img/slider-image.png';
import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {

  render () {
    return (
      <Layout>
        <Header className="topBar" style={{ background: '#fff' }}>
          <Row gutter={20} style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Col span={6}>
              <div style={{ width: 90 }}><Logo /></div>
            </Col>
            <Col span={14}>
            <Menu
              theme="light"
              mode="horizontal"
              style={{ borderBottom: 'none', textAlign: 'right', lineHeight: '62px' }}
            >
              <Menu.Item key="1">Возможности</Menu.Item>
              <Menu.Item key="2">Стоимость</Menu.Item>
              <Menu.Item key="3">База знаний</Menu.Item>
              <Menu.Item key="4">Вход</Menu.Item>
            </Menu>
            </Col>
            <Col span={4}>  
              <Button type="primary">Попробовать бесплатно</Button>
            </Col>
          </Row>
            
        </Header>
        <Content style={{ marginTop: 64, backgroundColor: '#fff' }}>
        <div style={{ background: '#fff', width: '100%', margin: '0 auto', paddingTop: '80px', paddingBottom: '140px' }}>
            <Row>
              <Col lg={12} md={24}>
                <div className="background">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 634 838" preserveAspectRatio="none"><path fill="#ee5252" d="M1,8,265,0h26C570.21,327.56,634.27,569.3,634,642l-3,8c-26,40-454.21,148.18-454.1,148.58L0,838"></path></svg>
                  <img src={SliderImage} alt=""/>
                </div>
              </Col>
              <Col lg={12} md={24}>
                <div className="slider-content">
                  <h1>Простая настройка и управление Вашей системой онлайн-заказов</h1>
                  <p>Deliveryserv делает управление мобильными приложениями простым, быстрым и эффективным</p>
                  <p>Нажимая "Начать бесплатно", вы принимаете Пользовательское соглашение и даете согласие на обработку персональных данных</p>
                </div>
                <div></div>
              </Col>
            </Row>
          </div>
          <div style={{ background: '#fff', padding: 24, minHeight: 380, maxWidth: 1200, margin: '0 auto' }}>
            <Row>
              <Col span={12}>
                sdasd              
              </Col>
              <Col span={12}>
                sdfgsdf
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    );
  }

}

export default App;
