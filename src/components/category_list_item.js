import React from 'react';

const CategoryListItem = (props) => {
  return (
    <li className="list-group-item">
      <ul>
        <li>{`Title: ${props.category.title}`}</li>
        <li>{`Budget Limit: ${props.category.budgetLimit}`}</li>
        <li>{`isActive: ${props.category.isActive}`}</li>
      </ul>
    </li>
  );
};

export default CategoryListItem;
