import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { Row, Col, Button, Card, CardHeader, CardFooter, CardBlock, Form } from 'reactstrap'

class Forms extends PureComponent {
  static propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
    history: propTypes.object.isRequired,
    pristine: propTypes.any.isRequired,
    submitting: propTypes.any.isRequired,
    reset: propTypes.any.isRequired
  }

  render() {
    const { title, children, history, pristine, submitting, reset, handleSubmit } = this.props
    return (
      <Row>
        <Col xs="12" md="12">
          <Form className="form-horizontal" onSubmit={handleSubmit}>
            <Card>
              <CardHeader>{title}</CardHeader>
              <CardBlock className="card-body">{children}</CardBlock>
              <CardFooter className="text-right">
                <Button size="sm" type="button" className="ml-1" onClick={history.goBack}>
                  Go Back
                </Button>
                <Button
                  size="sm"
                  className="ml-1"
                  color="danger"
                  type="button"
                  disabled={pristine || submitting}
                  onClick={reset}
                >
                  <i className="fa fa-ban" /> Reset
                </Button>
                <Button type="submit" disabled={pristine || submitting} size="sm" className="ml-1" color="success">
                  <i className="fa fa-check" /> Submit
                </Button>
              </CardFooter>
            </Card>
          </Form>
        </Col>
      </Row>
    )
  }
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
Forms = reduxForm({
  form: 'initializeFromState', // a unique identifier for this form
  enableReinitialize: true
})(Forms)

const mapStateToProps = state => ({
  initialValues: state.initialValues // pull initial values from roomType reducer
})

// You have to connect() to any reducers that you wish to connect to yourself
export default withRouter(connect(mapStateToProps)(Forms))
