import React from 'react'
import {Row, Col} from 'reactstrap'
import './ChatArea.css'

const ChatArea = (props) => {
  return (
    <div className="chat">
      <div className="chat-history">
        <ul>
            <Row>
              <Col className="message-data text-right">
                <Row>
                  <Col md={{size: 8, offset: 3}}>
                    <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
                    <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <div className="message other-message float-right">
                Hi Vincent, how are you? How is the project coming along?
              </div>
            </Row>

          <li>
            <div className="message-data">
              <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
              <span className="message-data-time">10:12 AM, Today</span>
            </div>
            <div className="message my-message">
              Are we meeting today? Project has been already finished and I have results to show you.
            </div>
          </li>

          <li>
            <div className="message-data">
              <span className="message-data-name"><i className="fa fa-circle online"></i> Vincent</span>
              <span className="message-data-time">10:31 AM, Today</span>
            </div>
            <i className="fa fa-circle online"></i>
            <i className="fa fa-circle online" style={{color: "#AED2A6"}}></i>
            <i className="fa fa-circle online" style={{color: "#DAE9DA"}}></i>
          </li>

        </ul>

      </div> {/* end chat-history */}

      <div className="chat-message clearfix">
        <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>

        <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
        <i className="fa fa-file-image-o"></i>

        <button>Send</button>

      </div> {/* end chat-message */}

    </div>
  )
}

export default ChatArea
