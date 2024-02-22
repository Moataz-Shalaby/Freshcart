import React from 'react'
import style from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="row">
          <div className="col-sm-12 py-3">
            <div className="copyright-box">
              <p className="copyright text-center">
                © Copyright
                <strong> Fresh Cart </strong>. All Rights Reserved
              </p>
              <div className="design text-center p-0 m-0">
                <span>Designed by</span>
                <Link to={"https://react.dev/"} target="_blank">
                  {" "}
                  React{" "}
                </Link>
                <div className="support pt-1">
                  <span>Learning and supported by</span>
                  <Link to={"https://ecommerce.routemisr.com/"} target="_blank">
                    {" "}
                    RouteEgypt{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
