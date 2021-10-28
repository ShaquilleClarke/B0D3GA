import React, { Component } from 'react';
import Identicon from 'identicon.js';
import box from '../box.png'

class Navbar extends Component {

  render() {
    const { account } = this.props;
    return (
      <nav className="navbar navbar-dark bg-dark p-0 text-monospace">
        {/* replace with link to your linkedin */}
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://github.com/ShaquilleClarke"
          target="_blank"
          rel="noopener noreferrer"
        >
         
          <img src={box} width="30" height="30" className="align-top" alt="" />
          B0d3g@
        </a>
        <ul className="navbar-nav px-3">
          <li>
              <small id="account">
                <a target="_blank"
                  alt=""
                  className="text-white"
                  rel="noopener noreferrer"
                  href={"https://etherscan.io/address/" + account}>
                  {account ? account.substring(0,6) : '0x0'}...{account ? account.substring(38,42) : '0x0'}  
                </a>
              </small>
              { account
                ? <img
                    alt=""
                    className='ml-2'
                    width='30'
                    height='30'
                    src={`data:image/png;base64,${new Identicon(account, 30).toString()}`}
                  />
                : <span></span>
              }
            </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;