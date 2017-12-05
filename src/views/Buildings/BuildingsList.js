import React from 'react'
import TableView from './../../components/Table/Table'
import { Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { ButtonGroup } from 'reactstrap'
import Loading from './../../components/Loading/Loading'
import dateConverter from './../../utils/dateConverter'

const Buildings = ({ handleAddClick, buildings, onDeleteBuilding }) => (
  <div className="animated fadeIn">
    <Row>
      <Col xs="12" lg="12">
        {buildings ? (
          <TableView name="Buildings" handleAddClick={handleAddClick}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Address</th>
                <th>Created Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {buildings.map(building => (
                <tr key={building.id}>
                  <td>{building.name}</td>
                  <td>{building.description}</td>
                  <td>{building.address}</td>
                  <td>{dateConverter.utcToLocal(building.createDate)}</td>
                  <td>
                    <ButtonGroup>
                      <Link to={`/building/form/${building.id}`} className="btn btn-primary btn-sm">
                        <i className="fa fa-pencil" />
                      </Link>
                      <Button className="btn btn-danger btn-sm" onClick={() => onDeleteBuilding(building.id)}>
                        <i className="fa fa-trash" />
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </TableView>
        ) : (
          <Loading />
        )}
      </Col>
    </Row>
  </div>
)

export default Buildings
