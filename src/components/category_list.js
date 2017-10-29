import React from 'react';

import CategoryListItem from './category_list_item';

const CategoryList = (props) => {
  const categoryListItems = props.categories.map((category, index) => {
    return <CategoryListItem key={index} category={category} />;
  });

  return (
    <div className="col-md-4">
      <h5>List of categories</h5>
      <ul className="list-group">
        {categoryListItems}
      </ul>
    </div>
  );
};

export default CategoryList;
