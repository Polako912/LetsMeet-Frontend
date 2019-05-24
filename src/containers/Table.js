import React, { Component } from 'react';


const Table = ({ events }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Region</th>
            <th>Memory</th>
            <th>CPUs</th>
            <th>Disk Size</th>
          </tr>
        </thead>
        <tbody>
          { events.map( (droplet) => {
             return (
              <tr>
                <td>{ droplet.id }</td>
                <td>{ droplet.name }</td>
                <td>{ droplet.region.slug}</td>
                <td>{ droplet.memory }</td>
                <td>{ droplet.vcpus }</td>
                <td>{ droplet.disk }</td>
              </tr>
            )
           }) }
        </tbody>
      </table>
    );
   } 
   export default Table

  // render() {
  //   return (
  //     <ListGroup>
  //       <ListGroupItem>
  //         <Container>
  //           <ListGroupItem>
  //             <Row>
  //               <Col>
  //                 <ul>
  //                   {this.state.events.map(event =><li> {event.name} </li>)}
  //                 </ul>
  //               </Col>
  //             </Row>
  //           </ListGroupItem>
  //           <ListGroupItem>
  //             <Row>
  //               <Col>
  //                 {this.state.events.map(events => {events.date})}
  //               </Col>
  //               <Col>
  //                 {this.state.events.map(events => {events.place})}
  //               </Col>
  //               <Col>
  //                 {this.state.events.map(events => {events.size})}
  //               </Col>
  //             </Row>
  //           </ListGroupItem>
  //         </Container>
  //       </ListGroupItem>
  //     </ListGroup>
  //   );
  // }
