import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button, ButtonGroup } from 'reactstrap'
import TableView from './../../components/Table/Table'
import dateConverter from './../../utils/dateConverter'
import Loading from './../../components/Loading/Loading'

const RoomTypes = (roomTypes, handleAddClick, onDeleteRoomType) =>
  roomTypes ? (
    <Col xs="12" lg="12">
      <TableView name="Room Types" handleAddClick={() => handleAddClick('/roomType/form')}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Created Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {roomTypes.map((roomType, index) => (
            <tr key={roomType.id}>
              <td>{roomType.name}</td>
              <td>{roomType.description}</td>
              <td>{dateConverter.utcToLocal(roomType.createDate)}</td>
              <td>
                <ButtonGroup>
                  <Link to={`/roomType/form/${roomType.id}`} className="btn btn-primary btn-sm">
                    <i className="fa fa-pencil" />
                  </Link>
                  <Button className="btn btn-danger btn-sm" onClick={() => onDeleteRoomType(roomType.id)}>
                    <i className="fa fa-trash" />
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </TableView>
    </Col>
  ) : (
    <Loading />
  )

const RoomOptions = (roomOptions, handleAddClick, onDeleteRoomOption) =>
  roomOptions ? (
    <Col xs="12" lg="12">
      <TableView name="Room Options" handleAddClick={() => handleAddClick('/roomOption/form')}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Created Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {roomOptions.map((roomOption, index) => (
            <tr key={roomOption.id}>
              <td>{roomOption.name}</td>
              <td>{roomOption.description}</td>
              <td>{dateConverter.utcToLocal(roomOption.createDate)}</td>
              <td>
                <ButtonGroup>
                  <Link to={`/roomOption/form/${roomOption.id}`} className="btn btn-primary btn-sm">
                    <i className="fa fa-pencil" />
                  </Link>
                  <Button className="btn btn-danger btn-sm" onClick={() => onDeleteRoomOption(roomOption.id)}>
                    <i className="fa fa-trash" />
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </TableView>
    </Col>
  ) : (
    <Loading />
  )

const Rooms = ({ roomTypes, roomOptions, handleAddClick, onDeleteRoomType, onDeleteRoomOption }) => {
  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" lg="12">
          <TableView name="Rooms" handleAddClick={() => handleAddClick('/room/form')}>
            <thead>
              <tr>
                <th>Username</th>
                <th>Date registered</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Samppa Nori</td>
                <td>2012/01/01</td>
                <td>Member</td>
                <td>
                  <ButtonGroup>
                    <Link to="/form" className="btn btn-primary btn-sm">
                      Edit
                    </Link>
                    <Link to="/form" className="btn btn-danger btn-sm">
                      Delete
                    </Link>
                  </ButtonGroup>
                </td>
              </tr>
            </tbody>
          </TableView>
        </Col>
        {RoomTypes(roomTypes, handleAddClick, onDeleteRoomType)}
        {RoomOptions(roomOptions, handleAddClick, onDeleteRoomOption)}
      </Row>
    </div>
  )
}

export default Rooms
