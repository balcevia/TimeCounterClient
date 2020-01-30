import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import TableComponent from "../../common/table/Table";
import Button from "../../common/form-controls/Button";
import {StyledMainContainer} from "./StyledMain";
import NewFileDialogContainer from "../../newFileDialog/container/NewFileDialogContainer";

const Main = ({files, onDownloadClick, openNewFileDialogContainer}) => {
  const headers = [
    {field: 'id', title: 'ID'},
    {field: 'filename', title: 'File Name'},
    {field: 'creatorName', title: 'Creator Name'},
    {filed: 'isPublic', title: 'Access', valueRenderer: (v) => v.isPublic ? "Public" : "Private"}
  ];

  const action = {
    icon: <ArrowDownwardIcon fontSize="default"/>,
    onClick: onDownloadClick
  };

  return (
    <StyledMainContainer>
      <TableComponent headers={headers} data={files} action={action}/>
      <Button label="Add New File" onClick={openNewFileDialogContainer}/>
      <NewFileDialogContainer/>
    </StyledMainContainer>
  )
};

export default Main;