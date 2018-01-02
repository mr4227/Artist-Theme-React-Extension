/*global chrome*/
import React, { Component } from 'react'
import './App.css'
import ReactHowler from 'react-howler'
import Audio from './audio/audio.js'

class TrackSamples extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playingSample: false,
      playingSampleTwo: false
    }
    this.handleAKey = this.handleAKey.bind(this)
  }

  componentDidMount() {
    window.addEventListener('keypress', this.handleAKey, false)
  }

  handleAKey(event) {
    if (event.key === 'a') {
      if (this.state.playingSample === true) {
        this.audio.stop()
        this.audio.play()
      } else {
        this.setState({
          playingSample: true
        })
      }
    }
    if (event.key === 's') {
      let audioStartPoint = 60 / 84 * 1
      if (this.state.playingSample === true) this.audio.seek(audioStartPoint)
      else {
        this.setState({
          playingSample: true
        })
        this.audio.seek(audioStartPoint)
      }
    }
    if (event.key === 'd') {
      let audioStartPoint = 60 / 84 * 2
      if (this.state.playingSample === true) this.audio.seek(audioStartPoint)
      else {
        this.setState({
          playingSample: true
        })
        this.audio.seek(audioStartPoint)
      }
    }
    if (event.key === 'f') {
      let audioStartPoint = 60 / 84 * 3
      if (this.state.playingSample === true) this.audio.seek(audioStartPoint)
      else {
        this.setState({
          playingSample: true
        })
        this.audio.seek(audioStartPoint)
      }
    }
    if (event.key === 'g') {
      let audioStartPoint = 60 / 84 * 4
      if (this.state.playingSample === true) this.audio.seek(audioStartPoint)
      else {
        this.setState({
          playingSample: true
        })
        this.audio.seek(audioStartPoint)
      }
    }
    if (event.key === 'h') {
      let audioStartPoint = 60 / 84 * 5
      if (this.state.playingSample === true) this.audio.seek(audioStartPoint)
      else {
        this.setState({
          playingSample: true
        })
        this.audio.seek(audioStartPoint)
      }
    }
    if (event.key === 'j') {
      let audioStartPoint = 60 / 84 * 6
      if (this.state.playingSample === true) this.audio.seek(audioStartPoint)
      else {
        this.setState({
          playingSample: true
        })
        this.audio.seek(audioStartPoint)
      }
    }

    if (event.key === 'k') {
      if (this.state.playingSample === true) {
        this.audio.stop()
        this.setState({
          playingSample: false
        })
      }
    }
    if (event.key === 'l') {
      this.setState({
        playingSampleTwo: true
      })
    }
  }

  render() {
    return (
      <div>
        <ReactHowler
          playing={this.state.playingSample}
          ref={ref => (this.audio = ref)}
          src={Audio.one}
        />
        <ReactHowler
          playing={this.state.playingSampleTwo}
          ref={ref => (this.audioTwo = ref)}
          src={Audio.two}
        />
      </div>
    )
  }
}
export default TrackSamples
