import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { createTimeModel, useTimeModel } from 'react-compound-timer'
import Confetti from 'confetti-react'
import Title from './SectionTitle'

const AniBreath = keyframes`
  from{
    opacity:0.4;
    box-shadow: none;
  }
  to{
    opacity:1;
    box-shadow:  20px 20px 60px #079155,
               -20px -20px 60px #079e5d;
  }
`
const StyledWrapper = styled.section`
  width: 100%;
  /* background-color: #eee; */
  padding: 0.3rem 0 1rem 0;
  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .countdown {
      width: 100%;
      /* max-width: 1400px; */
      background: linear-gradient(145deg, #ca3d27, #ca0d00);
      opacity: 0.8;
      padding: 0.3rem 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 0.24rem;
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.35rem;
        width: 1.4rem;
        height: 1.4rem;
        border: 1px solid #ca0d00;
        border-radius: 50%;
        color: red;
        .num {
          font-weight: 800;
          font-size: 0.8rem;
          margin-bottom: 0.1rem;
        }
        .txt {
          font-size: 0.2rem;
        }
      }
      @media screen and (max-width: 768px) {
        /* flex-direction: column; */
        .box {
          width: 0.6rem;
          height: 0.6rem;
          .num {
            font-size: 0.4rem;
            .txt {
              font-size: 0.1rem;
            }
          }
        }
      }
    }

    .cele {
      color: #212121;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
      .flowers {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
      }
      .txt {
        white-space: nowrap;
        font-family: 'SP-F';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        font-size: 0.8rem;
        padding: 0.1rem 0.3rem;
      }
      /* background: linear-gradient(145deg, #ca3d27, #ca0d00); */
    }
  }
`

const deadline = new Date(2021, 8, 15, 0, 0, 0).getTime()
const timer = createTimeModel({
  direction: 'forward',
  startImmediately: true,
  initialTime: Date.now() - deadline,
  timeToUpdate: 1000
})
export default function Welcome() {
  const { value } = useTimeModel(timer)
  return (
    <StyledWrapper>
      <Title title="欢迎参加" />
      <div className="wrapper">
        <div className="countdown">
          <div className="box">
            <span className="num day">{value.d}</span>
            <span className="txt">天</span>
          </div>
          <div className="box">
            <span className="num hour">{value.h}</span>
            <span className="txt">时</span>
          </div>
          <div className="box">
            <span className="num min">{value.m}</span>
            <span className="txt">分</span>
          </div>
          <div className="box">
            <span className="num second">{value.s}</span>
            <span className="txt">秒</span>
          </div>
        </div>
        <div className="cele">
          <div className="flowers">
            <Confetti gravity={0.2} numberOfPieces={150} />
          </div>
          <div className="txt">我们结婚啦!</div>
        </div>
      </div>
    </StyledWrapper>
  )
}
