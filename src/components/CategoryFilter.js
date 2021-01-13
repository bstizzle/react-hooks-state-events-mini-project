import React from "react";

function CategoryFilter({categories, selectedCategory, onSetCategory}) {


  const allCategories = categories.map((category) => {
    const isSelected = (category === selectedCategory ? "selected" : null)

    return(
      <button
        onClick={() => onSetCategory(category)}
        key={category}
        className={isSelected}
      >
        {category}
      </button>
    );
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {allCategories}
    </div>
  );
}

export default CategoryFilter;
