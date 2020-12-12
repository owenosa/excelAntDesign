import React from 'react'
import './App.css';
import 'antd/dist/antd.css';
import { PlusCircleTwoTone, DeleteTwoTone, RightOutlined, DownOutlined, MinusCircleTwoTone  } from '@ant-design/icons'
import { Row, Col } from 'antd';
import { useState, useRef } from 'react';

const Columns = ({span, title}) => {
////////////////////////////////////////////////////////////////////////////////////
// UseRefs to delete Rows
  const row = useRef();
  function deleteRow(){
    row.current.style.display = "none"
  }


////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>
            <Row className="row" ref={row}>
                <Col id="sampleCol" className="column" span={span}> {title} <MinusCircleTwoTone onClick={deleteRow} twoToneColor='red' style={{ cursor: 'pointer' }} /></Col>
                <Col className={`column one`} span={span}></Col>
                <Col className={`column two`} span={span}></Col>
                <Col className={`column three`} span={span}></Col>
                <Col className={`column four`} span={span}></Col>
            </Row>
        </>
    )
}

export default Columns
