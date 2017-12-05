import React from 'react'
import propTypes from 'prop-types'
import { Card, CardHeader, CardBlock, Table, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const TableView = props => (
  <Card>
    <CardHeader>
      <i className="fa fa-align-justify" /> {props.name}
    </CardHeader>
    <CardBlock className="card-body">
      <Table responsive>{props.children}</Table>
      <div className="d-flex justify-content-between">
        <Pagination className="pagination--dark">
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
        </Pagination>
        {props.handleAddClick ? (
          <Button color="success mb-3" onClick={props.handleAddClick}>
            Add New
          </Button>
        ) : null}
      </div>
    </CardBlock>
  </Card>
)

export default TableView

TableView.propTypes = {
  name: propTypes.string,
  handleAddClick: propTypes.func,
  children: propTypes.node
}
