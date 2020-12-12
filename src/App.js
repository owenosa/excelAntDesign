import './App.css';
import 'antd/dist/antd.css';
import { PlusCircleTwoTone, DeleteTwoTone, RightOutlined, DownOutlined, MinusCircleTwoTone  } from '@ant-design/icons'
import { Row, Col } from 'antd';
import { useState, useRef } from 'react';

import Columns from './Columns'

function App() {
  // State Hooks
  const [span, setSpan] = useState(4)
  
  // functions to resize columns span on addition or deletion 
  function addCol(){
    if (span !== 2){
      setSpan(span-1)
    }
  }

  const col = useRef();

  function deleteCol(){
    if (span !==10){
      setSpan(span+1)
      col.current.style.display = "none"
    }
  }
  ////////////////////////////////////////////////////////////////////////////////////

  return (
    <body>
        <div className="app" >
          <div className="top">
            <p>ADD CRITERIA <DownOutlined /></p>
          </div>
    <>
        <Row className="row">
          <Col id="sampleCol" className="column" span={span}> <PlusCircleTwoTone className="addCol" style={{ fontSize: '26px' }} onClick={addCol}/> <br /> <p>Add New Vendor</p> </Col>
          <Col className="column headCol"  span={span}> Google <DeleteTwoTone className="deleteCol" onClick={deleteCol} /> </Col>
          <Col className="column headCol" span={span}> DropBox <DeleteTwoTone className="deleteCol" onClick={deleteCol} /> </Col>
          <Col className="column headCol" span={span}> GitHub <DeleteTwoTone className="deleteCol" onClick={deleteCol} /> </Col>
          <Col className="column headCol" span={span}> Git <DeleteTwoTone className="deleteCol" onClick={deleteCol} /> </Col>
        </Row>
        <Columns span={span} title="Overall Score"/>
        <Columns span={span} title= "Product Description"/>
        <Columns span={span} title = "Funding History" />
        <Columns span={span} title="Pricing"/>
        <Columns span={span} title="Features"/>
        <Columns span={span} title="Customer Case Studies"/>
      </>
      </div>
    </body>
  );
}

export default App;
