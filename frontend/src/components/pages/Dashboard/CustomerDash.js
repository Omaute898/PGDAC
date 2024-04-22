import React from 'react'
import DashNavbar from '../../layout/DashNavbar'
import DashMenuBar from './CustomerDashMenuBar'
import { Card, CardTitle, CardGroup, CardBody, Row, Col } from 'reactstrap'
import CustomerFunctions from '../../../Axios/CustomerAxios'

class CustomerDash extends React.Component {

  constructor(props){
    super(props)
    this.state={
      countOfRequest:'',
      countOfEnquiry:'',
      countOfRepair:''
    }
  }
  componentDidMount(){

    const id=sessionStorage.getItem('user')
    const temp=JSON.parse(id)
    

    CustomerFunctions.getCountOfRequest(temp.id).then((res)=>{
      const count=res.data
       this.setState({
         countOfRequest:count
       })
     
    })

    CustomerFunctions.getCountOfRepair(temp.id).then((res)=>{
      const count=res.data
       this.setState({
         countOfRepair:count
       })
     
    })

    CustomerFunctions.getCountOfEnquiry(temp.id).then((res)=>{
      const count=res.data
       this.setState({
         countOfEnquiry:count
       })
     
    })
  }
  render(){
  return (
    <div>
      <DashNavbar />
      <div className="py-4">
        <Row>
          <Col md={12}>
            <DashMenuBar />
          </Col>
          </Row>
          <Row>
          <Col md={12}>
            <CardGroup>
              <Card body inverse color="secondary" className="text-center">
                <CardBody>
                  <p>
                    <i class="fa fa-tasks fa-2x" aria-hidden="true"></i>
                  </p>
                  <br />
                  <CardTitle tag="h5">{this.state.countOfRequest}</CardTitle>
                  <CardTitle tag="h5">New Request</CardTitle>
                </CardBody>
              </Card>
              <div
                dangerouslySetInnerHTML={{
                  __html: ' &nbsp &nbsp',
                }}></div>
              <Card body inverse color="secondary" className="text-center">
                <CardBody>
                  <p>
                    <i class="fa fa-history fa-2x" aria-hidden="true"></i>
                  </p>
                  <br />
                  <CardTitle tag="h5">{this.state.countOfRepair}</CardTitle>
                  <CardTitle tag="h5">Repair History</CardTitle>
                </CardBody>
              </Card>
              <div
                dangerouslySetInnerHTML={{
                  __html: ' &nbsp &nbsp',
                }}></div>
              <Card body inverse color="secondary" className="text-center">
                <CardBody>
                  <p>
                    <i class="fa fa-check-circle fa-2x" aria-hidden="true"></i>
                  </p>
                  <br />
                  <CardTitle tag="h5">{this.state.countOfEnquiry}</CardTitle>
                  <CardTitle tag="h5">Enquiry Submitted</CardTitle>
                </CardBody>
              </Card>
              
            </CardGroup>

           
          </Col>
        </Row>
      </div>
    </div>
  )
 }
}

export default CustomerDash
