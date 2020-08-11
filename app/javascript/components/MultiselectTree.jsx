import React from 'react'
import ReactDOM from 'react-dom'
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'

const Multiselect = ({data, setData}) => {
  const onChange = (currentNode, selectedNodes) => {
    setData(selectedNodes);
  }
  return (
    <React.Fragment>
       <DropdownTreeSelect
        keepTreeOnSearch
        data={data}
        onChange={onChange}
       />
    </React.Fragment>
  );
}

const HiddenNodes = ({selectedNodes}) => {
  return (
    <>
       <input
       type="hidden"
       name={"event_type"}
       value={JSON.stringify(selectedNodes)} /> 
    </>
  )
}

const renderNode = (selected) => {
  return ReactDOM.render(<HiddenNodes selectedNodes={selected}/>, document.getElementById('hiddenNode'));
}

const MultiselectTree = ({ data }) => {
  const getData = (res) => {
    return renderNode(res)
  }
  return (
    <React.Fragment>
       <Multiselect data={data} setData={getData}/>
       <div id={"hiddenNode"} />
    </React.Fragment>
  );
}


export default MultiselectTree
