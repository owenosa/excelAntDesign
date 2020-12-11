import './App.css';
import 'antd/dist/antd.css';
import { PlusCircleTwoTone, DeleteTwoTone, RightOutlined, DownOutlined, MinusCircleTwoTone  } from '@ant-design/icons'
import { Row, Col } from 'antd';
import { useState, useRef } from 'react';

function App() {
  // State Hooks
  const [span, setSpan] = useState(4)
  const [leaf, setLeaf] = useState(false)
////////////////////////////////////////////////////////////////////////////////////
  // functions to resize columns span on addition or deletion 
  function addCol(){
    if (span !== 2){
      setSpan(span-1)
    }
  }

  function deleteCol(){
    if (span !==10){
      setSpan(span+1)
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////
  // functions to set Leaf Dropdown from active to not active
  function leafActive(){
    setLeaf(true)
  }

  function leafNotActive(){
    setLeaf(false)
  }
  
  ////////////////////////////////////////////////////////////////////////////////////
  // UseRefs to delete Rows
  const row1 = useRef();
  function deleteRow1(){
    row1.current.style.display = "none"
  }

  const row2 = useRef();
  function deleteRow2(){
    row2.current.style.display = "none"
  }

  const row3 = useRef();
  function deleteRow3(){
    row3.current.style.display = "none"
  }

  const row4 = useRef();
  function deleteRow4(){
    row4.current.style.display = "none"
  }

  const row5 = useRef();
  function deleteRow5(){
    row5.current.style.display = "none"
  }

  const row6 = useRef();
  function deleteRow6(){
    row6.current.style.display = "none"
  }
////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <body>
        <div className="app" >
          <div className="top">
            <p>ADD CRITERIA <DownOutlined /></p>
          </div>
    <>
        <Row className="row">
          <Col id="sampleCol" className="column" span={span}> <PlusCircleTwoTone className="addCol" style={{ fontSize: '26px' }} onClick={addCol}/> <br /> <p>Add New Vendor</p> </Col>
          <Col className="column headCol"  span={span}>Google <DeleteTwoTone className="deleteCol" onClick={deleteCol}/> </Col>
          <Col className="column headCol" span={span}>DropBox <DeleteTwoTone className="deleteCol" onClick={deleteCol}/> </Col>
          <Col className="column headCol" span={span}>GitHub <DeleteTwoTone className="deleteCol" onClick={deleteCol}/> </Col>
          <Col className="column headCol" span={span}>GitHub <DeleteTwoTone className="deleteCol" onClick={deleteCol}/> </Col>
        </Row>
        <Row className="row" ref={row1}>
          <Col id="sampleCol" className="column" span={span}>Overall Score <MinusCircleTwoTone onClick={deleteRow1} twoToneColor='red' style={{ cursor: 'pointer' }}/> </Col>
          <Col className="column" span={span}></Col>
          <Col className="column" span={span}></Col>
          <Col className="column" span={span}></Col>
          <Col className="column" span={span}></Col>
        </Row>
        <Row className="row" ref={row2}>
          <Col id="sampleCol" className="column" span={span}>Product Description <MinusCircleTwoTone onClick={deleteRow2} twoToneColor='red' style={{ cursor: 'pointer' }}/> </Col>
          <Col className="column"  span={span}></Col>
          <Col className="column" span={span}></Col>
          <Col className="column" span={span}></Col>
          <Col className="column" span={span}></Col>
        </Row>
        <Row className="row" ref={row3}>
          <Col id="sampleCol" className="column" span={span}> {!leaf ? <RightOutlined className="downArrow" onClick={leafActive}/> : <DownOutlined className="downArrow" onClick={leafNotActive}/> } &nbsp; Funding History <MinusCircleTwoTone onClick={deleteRow3}twoToneColor='red' style={{ cursor: 'pointer' }}/></Col>
          <Col className="column"  span={span}></Col>
          <Col className="column" span={span}></Col>
          <Col className="column" span={span}></Col>
          <Col className="column" span={span}></Col>
        </Row>
        <Row className="row" ref={row4}>
          <Col id="sampleCol" className="column" span={span}>Pricing <MinusCircleTwoTone onClick={deleteRow4}  twoToneColor='red' style={{ cursor: 'pointer' }}/></Col>
          <Col className="column"  span={span}></Col>
          <Col className="column" span={span}></Col>
          <Col className="column" span={span}></Col>
          <Col className="column" span={span}></Col>
        </Row>
        <Row className="row" ref={row5}>
          <Col id="sampleCol" className="column" span={span}>Features <MinusCircleTwoTone onClick={deleteRow5} twoToneColor='red' style={{ cursor: 'pointer' }}/></Col>
          <Col className="column" span={span}></Col>
          <Col className="column" span={span}></Col>
          <Col className="column" span={span}></Col>
          <Col className="column" span={span}></Col>
        </Row>
        <Row className="row" ref={row6}>
          <Col id="sampleCol" className="column" span={span}>Customer Case Studies <MinusCircleTwoTone onClick={deleteRow6} twoToneColor='red' style={{ cursor: 'pointer' }} /></Col>
          <Col className="column"  span={span}></Col>
          <Col className="column" span={span}></Col>
          <Col className="column" span={span}></Col>
          <Col className="column" span={span}></Col>
        </Row>
      </>
      </div>
    </body>
  );
}

export default App;