import userEvent from "@testing-library/user-event";
import React from "react";
import { useState, useRef, useEffect } from 'react'



const CounterArea = () => {
  {/* Timer Code starts */ }
  const [timerDays, settimerDays] = useState(null);
  const [timerHours, settimerHours] = useState(null)
  const [timerMinutes, settimerMinutes] = useState(null)
  const [timerSeconds, settimerSeconds] = useState(null)
  const [countDown, setcountDown] = useState()
  
  let interval = useRef()

  const startTimer = () => {
    const countdownDate = new Date('September 10, 2022 00:00:00').getTime();
     interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)
      if (distance < 0) {
        clearInterval(interval.current)
      }
      else {
        settimerDays(days)
        settimerHours(hours)
        settimerMinutes(minutes)
        settimerSeconds(seconds)
      }
    }, 1000)
  }
  useEffect(() => {

    startTimer();

    return () => {
      clearInterval(interval.current)
    }
  })
  
  
  {/* Timer Code ends */ }
  return (
    <section className="counterArea">
      <div className="container">
        <div className="countSpace" data-aos="fade-up" data-aos-duration="">
          <div className="countSec">
            <div className="countGrid">
              <div className="counterItem">
                <p>NFB PAYOUT AMOUNT:</p>
                <h3 className='text-xl'> $20,000,000 </h3>
               
              </div>
              <div className="counterItem">
                <p>GUARANTEE FUND:</p>
                <h3> $20,000,000 </h3>
              </div>
              <div className="counterItem">
                <p>NFBS SOLD:</p>
                <h3> 380/500 </h3>
              </div>
              <div className="counterItem">
                <p>MIN. GUARANTEED PAYOUT/NFB:</p>
                <h3> $52,631.58 </h3>
              </div>
              <div className="counterItem">
                <p>NFB PAYOUT IN:</p>
                <h3> 5y 364d 12h 34m </h3>
              </div>
            </div>
            <div className="countDownArea">
              <div className="counters ">
                <p>NFB Quarterly Payout in</p>
                <div className="contNum">
                  <div className="counterBlock">
                    <p>Days</p>
                    {timerDays == null ? <p>''</p> : <h3 id="days">{timerDays}</h3>}
                  </div>
                  <div className="counterBlock">
                    <p>Hours</p>
                    {timerHours==null ?<p>''</p>:<h3 id="hours">{timerHours}</h3>}
                  </div>
                  <div className="counterBlock">
                    <p>Minutes</p>
                    {timerMinutes == null ? <p>''</p> : <h3 id="minutes">{timerMinutes}</h3>}
                  </div>
                  <div className="counterBlock">
                    <p>Seconds</p>
                    {timerSeconds == null ? <p>''</p> : <h3 id="seconds">{timerSeconds}</h3>}
                  </div>
                </div>
              </div>
              <div className="counters">
                <p>Estimated Quarterly Reward/NFB</p>
                <h3>$5,468.27</h3>
              </div>
            </div>
            <div className="quote">
              <div className="quoteText">
                <h4>
                  {" "}
                  "They say money can’t buy happiness but it sure as hell buys
                  everything else."{" "}
                </h4>
                <p>- MAD MONEY</p>
              </div>
            </div>
            <div className="updatesField">
              {/* <form
                action="https://cinemadraft.us14.list-manage.com/subscribe/post?u=fcd503faf1285a57eea370664&amp;id=e3718094a2"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                novalidate
              >
                <div className="form-group">
                  {" "}
                  <input
                    placeholder="Enter email for NFB updates from CinemaDraft"
                    type="email"
                    value=""
                    name="EMAIL"
                    className="required email form-control"
                    id="mce-EMAIL"
                    required
                  />{" "}
                  <input
                    type="submit"
                    value="Subscribe"
                    name="Subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />{" "}
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style="color: #fff; display:none"
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style="color: #fff; display:none"
                  ></div>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterArea;
