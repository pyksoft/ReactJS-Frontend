import React from "react";
import { Link } from 'react-router-dom';

class ChatActions extends React.Component {
  render() {
    return (
      <div className="chat__actions">
        <div className="form-chat">
          <form action="?" method="post">

            <Link to="/" className="form__ico">
              <i className="ico-face" />
            </Link>

            <div className="form__row">
              <label htmlFor="field-message" className="form__label" hidden>
                Message
              </label>
              <div className="form__controls">
                <input
                  type="text"
                  className="field"
                  name="field-message"
                  id="field-message"
                  defaultValue=""
                  placeholder="Your message"
                />
              </div>

            </div>

            <div className="form__actions">
              <button type="submit" className="btn form__btn btn--block">
                <i className="ico-arrow" />
              </button>
            </div>

          </form>
        </div>

      </div>
    );
  }
}

export default ChatActions;
