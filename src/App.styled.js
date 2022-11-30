import styled from "styled-components";

export const Main = styled.main`
  background-color: #c5e4e8;
  width: 100%;
  height: 100vh;
  border: 1px solid #c5e4e8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }

  h1 {
    color: #55787a;
    margin: 80px 0 50px;

    @media (max-width: 768px) {
      margin: 140px 0 40px;
    }

    @media (max-width: 1279px) {
      margin: 183px 0 50px;
    }
  }

  div {
    width: 850px;
    height: 400px;
    background-color: #ffffff;
    border-radius: 10px;
    margin: 20px auto 30px;
    display: flex;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100vw;
      height: 100vh;
      gap: 20px;
      margin: 0;
    }

    @media (max-width: 1279px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100vw;
      height: 100vh;
      gap: 20px;
      margin: 0;
    }

    .formContainer {
      width: 380px;
      height: 360px;
      display: flex;
      flex-direction: column;

      @media (max-width: 768px) {
        width: 330px;
        height: 100vh;
      }
      @media (max-width: 1279px) {
        width: 330px;
        height: 100vh;
      }

      form {
        position: relative;
        display: flex;
        flex-direction: column;
        @media (max-width: 768px) {
          width: 100%;
          height: 400px;
        }

        @media (max-width: 1279px) {
          width: 100%;
          height: 400px;
        }
        .user {
          position: absolute;
          top: 92%;
          left: 7%;
          font-size: 16px;
          font-weight: 500;
          @media (max-width: 768px) {
            top: 93%;
            left: 4%;
          }
          @media (max-width: 1279px) {
            top: 93%;
            left: 4%;
          }
        }
        span {
          position: absolute;
          top: 12%;
          left: 7%;
          font-size: 16px;
          color: #c1d0ce;
          font-weight: 500;
          @media (max-width: 768px) {
            top: 11%;
            left: 4%;
          }
          @media (max-width: 1279px) {
            top: 11%;
            left: 4%;
          }
        }
        label {
          margin: 10px 0 0 15px;
          color: #a4aaad;
          font-size: 16px;
          font-weight: 700;

          @media (max-width: 768px) {
            margin: 10px 0 0;
          }
          @media (max-width: 1279px) {
            margin: 10px 0 0;
          }
        }
        input {
          border: none;
          width: 350px;
          height: 40px;
          border-radius: 5px;
          padding: 10px;
          text-align: right;
          margin: 5px auto 0;
          font-size: 20px;
          font-weight: 700;
          background-color: #f3f8fa;
          color: #345e61;
          @media (max-width: 768px) {
            width: 100%;
          }
          @media (max-width: 1279px) {
            width: 100%;
          }

          &:focus {
            outline: 3px solid #2bb9a6;
          }
        }

        .selectTip {
          width: 350px;
          height: 150px;
          display: flex;
          flex-direction: column;
          margin-top: 25px;

          @media (max-width: 768px) {
            width: 100%;
          }
          @media (max-width: 1279px) {
            width: 100%;
          }

          p {
            color: #a4aaad;
            font-size: 16px;
            font-weight: 700;
            margin-bottom: -3px;

            @media (max-width: 768px) {
              margin-left: -213px;
              margin-bottom: 0;
            }
            @media (max-width: 1279px) {
              margin-left: -213px;
              margin-bottom: 0;
            }
          }

          .buttonContainer {
            margin-bottom: -5px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: 7px;

            @media (max-width: 768px) {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 9px;
            }
            @media (max-width: 1279px) {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 9px;
            }

            .button {
              width: 110px;
              height: 50px;
              border-radius: 5px;
              background-color: #0a474c;
              border: none;
              color: #bddfe3;
              font-size: 20px;
              font-weight: 700;
              text-align: center;
              cursor: pointer;
              @media (max-width: 768px) {
                width: 150px;
              }
              @media (max-width: 1279px) {
                width: 160px;
              }
              &:hover {
                background-color: #2dc2ae;
                color: #105d5d;
              }
            }
            input {
              width: 110px;
              height: 50px;
              border-radius: 5px;
              margin-top: 0.9px;
              @media (max-width: 768px) {
                width: 150px;
                height: 50px;
                margin-left: 0.09px;
                margin-top: 0.9px;
              }

              @media (max-width: 1279px) {
                width: 160px;
                height: 50px;
                margin-left: 0.09px;
                margin-top: 0.9px;
              }
            }
          }
        }

        .danger {
          width: 350px;
          height: 40px;
          border-radius: 5px;
          border: 3px solid #e50f01;
          @media (max-width: 768px) {
            width: 100%;
          }
          @media (max-width: 1279px) {
            width: 100%;
          }
          /* &:focus {
                    outline: 3px solid #2bb9a6;
                }  */
        }

        .numOfPeople_head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 350px;
          height: 30px;
          margin-bottom: -1px;
          margin-top: -5px;

          @media (max-width: 768px) {
            margin-top: 83px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
          }
          @media (max-width: 1279px) {
            margin-top: 83px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
          }

          .is-danger {
            color: #e50f01;
            font-size: 16px;
            font-weight: 700;
            margin-bottom: -4px;
          }

          label {
            margin-left: -1px;
          }
        }
        .Input_people {
          border: none;
          width: 350px;
          height: 40px;
          border-radius: 5px;
          padding: 10px;
          text-align: right;
          margin: 5px auto 0;
          font-size: 20px;
          font-weight: 700;
          background-color: #f3f8fa;
          color: #345e61;
          @media (max-width: 768px) {
            width: 100%;
          }
          @media (max-width: 1279px) {
            width: 100%;
          }

          &:focus {
            outline: 3px solid #2bb9a6;
          }
        }
      }
    }

    .TotalContainer {
      width: 380px;
      height: 360px;
      border: 1px solid;
      background-color: hsl(185, 77%, 17%);
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: 768px) {
        width: 330px;
        height: 537px;
        margin-bottom: 190px;
      }
      @media (max-width: 1279px) {
        width: 330px;
        height: auto;
        margin-bottom: 500px;
      }

      .Tip {
        width: 320px;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: none;
        background-color: hsl(185, 77%, 17%);
        border: none;

        @media (max-width: 768px) {
          flex-direction: row;
          margin: 20px 30px;
          width: 300px;
        }
        @media (max-width: 1279px) {
          flex-direction: row;
          margin: 20px 30px;
          width: 300px;
        }

        span {
          font-size: 36px;
          font-weight: bold;
          color: #2bb9a6;
          word-break: break-all;
        }

        p {
          color: #ffffff;
          font-size: 16px;
          font-weight: bold;

          span {
            font-size: 16px;
            color: #41767c;
            font-weight: normal;
          }
        }
      }

      .Tip2 {
        width: 320px;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: none;
        background-color: hsl(185, 77%, 17%);
        border: none;

        @media (max-width: 768px) {
          flex-direction: row;
          margin: -20px 30px;
          width: 300px;
        }
        @media (max-width: 1279px) {
          flex-direction: row;
          margin: -20px 30px;
          width: 300px;
        }

        span {
          font-size: 36px;
          font-weight: bold;
          color: #2bb9a6;
          word-break: break-all;
        }

        p {
          color: #ffffff;
          font-size: 16px;
          font-weight: bold;

          span {
            font-size: 16px;
            color: #41767c;
            font-weight: normal;
          }
        }
      }

      button {
        background-color: hsl(173, 61%, 77%);
        width: 320px;
        height: 40px;
        border-radius: 5px;
        color: hsl(185, 77%, 17%);
        margin-top: 80px;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
        border: none;

        @media (max-width: 768px) {
          width: 300px;
          margin-top: 40px;
        }
        @media (max-width: 1279px) {
          width: 300px;
          margin-top: 40px;
        }
      }
    }
  }
`;
