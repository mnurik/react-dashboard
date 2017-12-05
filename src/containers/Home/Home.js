import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Aside from '../../components/Aside/Aside'
import Footer from '../../components/Footer/Footer'

import Dashboard from '../../views/Dashboard/Dashboard'
import Reservations from '../../views/Reservations/Reservations'
import Form from '../../views/Form/Form'
import BuildingFormContainer from '../Building/BuildingFormContainer'
import BuildingListContainer from '../Building/BuildingListContainer'
import RoomList from '../../containers/Room/RoomListContainer'
import RoomTypeFormContainer from '../../containers/Room/RoomTypeFormContainer'
import RoomOptionFormContainer from '../../containers/Room/RoomOptionFormContainer'

const Home = props => (
  <div className="app">
    <Header />
    <div className="app-body">
      <Sidebar {...props} />
      <main className="main">
        <Breadcrumb />
        <Container fluid>
          <Switch>
            <Route exact path="/dashboard" name="Dashboard" component={Dashboard} />
            <Route path="/reservation/list" name="Reservations" component={Reservations} />
            <Route path="/form" name="Form" component={Form} />
            <Route path="/building/form/:buildingId?" name="Building Form" component={BuildingFormContainer} />
            <Route path="/building" name="Building List" component={BuildingListContainer} />
            <Route path="/room/list" name="Rooms" component={RoomList} />
            <Route path="/roomType/form/:roomTypeId?" name="Room Type Form" component={RoomTypeFormContainer} />
            <Route path="/roomOption/form/:roomOptionId?" name="Room Option Form" component={RoomOptionFormContainer} />
          </Switch>
        </Container>
      </main>
      <Aside />
    </div>
    <Footer />
  </div>
)

export default Home
