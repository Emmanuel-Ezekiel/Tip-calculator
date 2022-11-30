import styled from 'styled-components';

export const Main = styled.main`
background-color: #c5e4e8;
width: 100%;
height: 100vh;
border: 1px solid #c5e4e8;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1 {
  color: #55787a;
  margin: 80px 0 50px;
}

div {
  width: 850px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 20px auto 30px;
  display: flex;

  .formContainer {
    width: 380px;
    height: 360px;
    display: flex;
    flex-direction: column;
  
   
    form {

        position: relative;
        display: flex;
        flex-direction: column;
            .user {
                position: absolute;
                top: 92%;
                left: 7%;
                font-size: 16px;
                font-weight: 500;
            }
            span {
                position: absolute;
                top: 12%;
                left: 7%;
                font-size: 16px;
                color: #c1d0ce;
                font-weight: 500;
            }
            label {
                margin: 10px 0 0 15px;
                color: #a4aaad;
                font-size: 16px;
                font-weight: 700;
            }
            input {
                border: none;
                width: 350px;
                height: 40px;
                border-radius: 5px;
                padding: 15px;
                text-align:right ;
                margin: 5px auto 0;
                font-size: 20px;
                font-weight: 700;
                background-color: #f3f8fa;
                color: #345e61;

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

                p {
                    color: #a4aaad;
                    font-size: 16px;
                    font-weight: 700;
                    margin-bottom: -3px;
                }
                .buttonContainer {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 7px;
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
                    }
                    input {
                        width: 110px;
                        height: 50px;
                        border-radius: 5px;
                        margin-top: 0.9px;
                    }
                    
                }
                
            }
            
        
    }


  }

  .TotalContainer {
    width: 380px;
    height: 360px;
    border: 1px solid;
    background-color: hsl(185,77%,17%);
    display: flex;
    flex-direction: column;
    align-items: center;

    .Tip {
      width: 320px;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: none;
      background-color: hsl(185,77%,17%);
      border: none;

      span {
        font-size: 36px;
        font-weight: bold;
        color: #2bb9a6;
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
      background-color: hsl(173,61%,77%);
      width: 320px;
      height: 40px;
      border-radius: 5px;
      color: hsl(185,77%,17%);
      margin-top: 80px;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
    }
  }
}
`;