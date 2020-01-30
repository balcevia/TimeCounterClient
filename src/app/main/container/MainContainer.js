import React from 'react';
import Main from "../component/Main";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import filesOperations from '../duck/operations';
import dialogOperations from '../../common/dialog/duck/operations';
import {DialogNames} from "../../constants";

class MainContainer extends React.PureComponent {

  componentDidMount() {
    this.props.filesOperations.fetchFiles();
  }

  onDownloadClick = (row) => {
    filesOperations.fetchFile(row.id);
  };

  openNewFileDialogContainer = () => {
    this.props.dialogOperations.open(DialogNames.NewFileDialog)
  };

  render() {
    return (<Main files={this.props.files} onDownloadClick={this.onDownloadClick} openNewFileDialogContainer={this.openNewFileDialogContainer}/>)
  }
}

const mapStateToProps = (state) => ({
  files: state.files.list
});

const mapDispatchToProps = (dispatch) => ({
  filesOperations: bindActionCreators(filesOperations, dispatch),
  dialogOperations: bindActionCreators(dialogOperations, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)