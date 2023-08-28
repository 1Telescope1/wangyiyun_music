import styled from 'styled-components'


export const RecommendSection = styled.div`
  border: 1px solid #d3d3d3;
  width: 980px;
  background-image: url(${require('@/assets/img/wrap-bg.png')});
  display: flex;
`
export const RecommendLeft = styled.div`
  padding: 20px;
  width: 729px;
`
export const RecommendRight = styled.div`
  margin-left: 1px;
  width: 250px;
`

// export const RecommendWrapper = styled.div`
//   position: relative;
//   background-image: url(${require('@/assets/img/body_bg.jpeg')});
//   background-repeat: no-repeat;
//   background-size: 2166px;
//   background-position: center -8px;

//   height: 1000px;

//   &::before {
//     position: absolute;
//     top: 8px;
//     left: 50%;
//     transform: translate(-716px);
//     width: 225px;
//     height: 120px;
//     background-image: url(${require('@/assets/img/body_bg02.png')});
//     background-repeat: no-repeat;
//     background-size: cover;
//     content: '';
//   }

//   &::after {
//     position: absolute;
//     top: 8px;
//     left: 50%;
//     transform: translate(492px);
//     width: 196px;
//     height: 131px;
//     background: url(${require('@/assets/img/body_bg03.png')});
//     background-repeat: no-repeat;
//     background-size: cover;
//     content: '';
//   }
// `
