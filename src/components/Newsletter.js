import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "styled-components"
import Background2 from "./Background2"
import { useScroll } from "./useScroll"
import { motion } from "framer-motion"
import { scrollAnimation, titleAnim, fade } from "../animations/animations"

const Newsletter = () => {
  const [state, setState] = useState({
    email: "",
    message: "Subscribe to receive news, offers, updates and much more:",
  })

  const [element, controls] = useScroll()

  const changeEmailHandler = e => {
    setState({ email: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setState({ message: "Thank you for subscribing to our Newsletter!" })
    addToMailchimp(state.email) // listFields are optional if you are only capturing the email address.
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })

    setState({ email: "" })
  }

  return (
    <Background2>
      <Wrapper
        ref={element}
        variants={scrollAnimation}
        animate={controls}
        id="contact"
      >
        <div className="section-center">
          <div className="news">
            <div className="letter">
              <motion.div className="form">
                <div className="hide">
                  <motion.p variants={titleAnim}>{state.message}</motion.p>
                </div>

                <motion.form
                  variants={fade}
                  className="subscribe"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    value={state.email}
                    onChange={changeEmailHandler}
                    name="EMAIL"
                    id="mce-EMAIL"
                    className="subscribe-email"
                    placeholder="Your Email"
                    required
                  />
                  <button className="btn_send" type="submit">
                    Subscribe
                  </button>
                </motion.form>
              </motion.div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Background2>
  )
}

const Wrapper = styled(motion.section)`
  width: 100vw;

  .news {
    .letter {
      .form {
        background-color: white;
        position: absolute;
        max-width: var(--max-width);
        width: var(--max-width);
        margin: 0 auto;
        bottom: -25%;
        left: 50%;
        transform: translate(-50%, 0%);

        .hide {
          overflow: hidden;
          p {
            padding-top: 2rem;
            margin-bottom: 0;
            text-align: center;
          }
        }

        form {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-bottom: 1rem;
          height: 100px;
          max-width: 350px;
          margin: 0 auto;
          position: relative;
          background-color: white;

          input {
            font-size: 18px;
          }

          .btn_send {
            border: none;
            outline: none;
            text-decoration: none;
            z-index: 1;
            position: absolute;
            right: 0;
            padding: 12px 12px;
            transition: all 0.3s ease;
            background: #333;
            color: var(--clr-primary-6);
            height: 50px;
            &:hover {
              cursor: pointer;
              background: gray;
              color: var(--clr-primary-7);
              background: #444;
            }
          }

          .subscribe-email {
            border: 1px solid var(--clr-primary-6);
            height: 50px;
            background-color: #fff;
            position: relative;
            z-index: 1;
            font-size: 15px;
            color: #6b749f;
            outline: none;
            margin-bottom: 0;
            line-height: 21px;
            max-width: 380px;
            width: 100%;
            padding: 1px 59px 0px 12px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 414px) {
    .news {
      .letter {
        .form {
          width: 85%;
          bottom: -25%;
          left: 50%;

          p {
            padding: 1rem 1rem 0 1rem;
          }

          form {
            width: 80vw;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .news {
      .letter {
        .form {
          width: 85%;
          bottom: -18%;
          left: 50%;

          p {
            padding: 1rem 1rem 0 1rem;
          }

          form {
            width: 80vw;
          }
        }
      }
    }
  }
`

export default Newsletter
