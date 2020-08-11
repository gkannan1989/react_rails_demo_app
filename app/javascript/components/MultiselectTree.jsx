import React from 'react'
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'

class MultiselectTree extends React.Component  {

  onChange(currentNode, selectedNodes) {
    console.log('onChange::', currentNode, selectedNodes)
  }

  render() {
    return (
      <React.Fragment>
        <DropdownTreeSelect
          data={this.props.data}
          onChange={this.onChange}
         />
      </React.Fragment>
    );
  }
}

export default MultiselectTree
