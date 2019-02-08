import React, { Component } from "react";
import { connect } from "react-redux";

export class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => (
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button className="ui button primary">Select</button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    ));
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => ({
  songs: state.songs
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList);
