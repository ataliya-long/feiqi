import React from "react";
import { Col, Row } from '@douyinfe/semi-ui';
import Cards from "../Card/Card";


const ListMenu =()=>{
   return(
    <>
   
    <Row gutter={[10, 10]}>
            <Col span={5}>
                <div className="col-content"><Cards></Cards></div>
            </Col>
            <Col span={5}>
                <div className="col-content"><Cards></Cards></div>
            </Col>
            <Col span={5}>
                <div className="col-content"><Cards></Cards></div>
            </Col>
            <Col span={5}>
                <div className="col-content"><Cards></Cards></div>
            </Col>
            <Col span={5}>
                <div className="col-content"><Cards></Cards></div>
            </Col>
            <Col span={5}>
                <div className="col-content"><Cards></Cards></div>
            </Col>
            <Col span={5}>
                <div className="col-content"><Cards></Cards></div>
            </Col>
            <Col span={5}>
                <div className="col-content"><Cards></Cards></div>
            </Col>
        </Row>
    </>
   )
}

export default ListMenu;