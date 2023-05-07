import { css, keyframes } from "@emotion/react"
import { firstChart } from "@src/styles"

export const CircleProgressBar = () => {
  return (
    <div css={wrapper}>
      <span css={innerSpace}/>
    </div>
  )
}

const circleAnimation = (color : string) => keyframes`
  0%{background : conic-gradient(${color} 0% 0%, #ffffff 0% 100%)}
  6%{background : conic-gradient(${color} 0% 5%, #ffffff 0% 100%)}
  12%{background : conic-gradient(${color} 0% 10%, #ffffff 0% 100%)}
  18%{background : conic-gradient(${color} 0% 15%, #ffffff 0% 100%)}
  25%{background : conic-gradient(${color} 0% 20%, #ffffff 0% 100%)}
  33%{background : conic-gradient(${color} 0% 25%, #ffffff 0% 100%)}
  38%{background : conic-gradient(${color} 0% 30%, #ffffff 0% 100%)}
  44%{background : conic-gradient(${color} 0% 35%, #ffffff 0% 100%)}
  50%{background : conic-gradient(${color} 0% 40%, #ffffff 0% 100%)}
  56%{background : conic-gradient(${color} 0% 45%, #ffffff 0% 100%)}
  62%{background : conic-gradient(${color} 0% 50%, #ffffff 0% 100%)}
  68%{background : conic-gradient(${color} 0% 55%, #ffffff 0% 100%)}
  75%{background : conic-gradient(${color} 0% 60%, #ffffff 0% 100%)}
  82%{background : conic-gradient(${color} 0% 65%, #ffffff 0% 100%)}
  88%{background : conic-gradient(${color} 0% 70%, #ffffff 0% 100%)}
  94%{background : conic-gradient(${color} 0% 75%, #ffffff 0% 100%)}
  100%{background : conic-gradient(${color} 0% 80%, #ffffff 80% 100%)}
`

const wrapper = css`
  position: relative;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  transition: 0.3s;

  animation: ${circleAnimation(firstChart)} 0.3s forwards;
`

const innerSpace = css`
  background: #fff;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  text-align: center;
`