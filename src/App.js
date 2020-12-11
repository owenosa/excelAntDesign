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

  function deleteCol(){
    if (span !==10){
      setSpan(span+1)
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
        <Columns span={span} />
        <Columns span={span} />
        <Columns span={span} />
        <Columns span={span} />
        <Columns span={span} />
        <Columns span={span} />
      </>
      </div>
    </body>
  );
}

export default App;
