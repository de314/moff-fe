import React from 'react'
import _ from 'lodash';
import faker from 'faker'

import { connect } from 'react-redux'
import { compose, withProps } from 'recompose'

import UsersTable from 'components/users/UsersTable'

const data = _.range(100).map(i => ({
  id: `${i}`,
  name: faker.name.findName(),
  email: faker.internet.email(),
  regDate: faker.date.past().getTime()
}))

let UsersPage = () => (
  <div className="UsersPage">
    <h1 className="mb-6">Users</h1>
    <UsersTable users={data} />
  </div>
)

UsersPage = compose(
  connect(
    state => ({})
  ),
  withProps(props => ({}))
)(UsersPage)

export default UsersPage
