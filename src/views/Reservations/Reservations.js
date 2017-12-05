import React from 'react'
import TableView from './../../components/Table/Table'
import { Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { ButtonGroup } from 'reactstrap'

const Reservations = () => (
  <div className="animated fadeIn">
    <Row>
      <Col xs="12" lg="12">
        <TableView name="Reservations">
          <thead>
            <tr>
              <th>Username</th>
              <th>Date registered</th>
              <th>Date registered</th>
              <th>Date registered</th>
              <th>Date registered</th>
              <th>Date registered</th>
              <th>Date registered</th>
              <th>Date registered</th>
              <th>Date registered</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Samppa Nori</td>
              <td>2012/01/01</td>
              <td>2012/01/01</td>
              <td>2012/01/01</td>
              <td>2012/01/01</td>
              <td>2012/01/01</td>
              <td>2012/01/01</td>
              <td>2012/01/01</td>
              <td>2012/01/01</td>
              <td>Member</td>
              <td>
                <ButtonGroup>
                  <Link to="/form" className="btn btn-primary btn-sm">
                    <i className="fa fa-pencil" />
                  </Link>
                  <Link to="/form" className="btn btn-danger btn-sm">
                    <i className="fa fa-trash" />
                  </Link>
                </ButtonGroup>
              </td>
            </tr>
          </tbody>
        </TableView>
      </Col>
    </Row>
  </div>
)

export default Reservations
