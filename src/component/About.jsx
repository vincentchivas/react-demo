import React from 'react';
import { Row, Col } from 'antd'

const About = React.createClass({
    render() {
        return <div>
            <Row className="testRow">
                <Col span="12">.col-12</Col>
                <Col span="12">.col-12</Col>
            </Row>
            <Row className="testRow">
                <Col span="8">.col-8</Col>
                <Col span="8">.col-8</Col>
                <Col span="8" className="testCol">.col-8</Col>
            </Row>
            <Row className="testRow">
                <Col span="6">.col-6</Col>
                <Col span="6">.col-6</Col>
                <Col span="6">.col-6</Col>
                <Col span="6">.col-6</Col>
            </Row>
        </div>
    }
});

export default About;