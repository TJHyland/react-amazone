import React from 'react';
import { Link } from 'react-router-dom';

const DepartmentList = ({title, id}) => (
  <>
  <li><Link to={{ pathname: `/department/${id}`, state: { id, title } }} >{ title }</Link></li>
  </>
)

export default DepartmentList;