import{q as e,R as t,D as a,a as s}from"./vendor.d25f2911.js";const i=e.svg`
  --secondary: #fff;
  #teabag {
    transform-origin: top center;
    transform: rotate(3deg);
    animation: swing 2s infinite
  }
  #steamL {
    stroke-dasharray: 13;
    stroke-dashoffset: 13;
    animation: steamLarge 2s infinite
  }
  #steamR {
    stroke-dasharray: 9;
    stroke-dashoffset: 9;
    animation: steamSmall 2s infinite
  }
  @keyframes swing {
    50% {
      transform: rotate(-3deg)
    }
  }
  @keyframes steamLarge {
    0% {
      stroke-dashoffset: 13;
      opacity: .6
    }
    100% {
      stroke-dashoffset: 39;
      opacity: 0
    }
  }
  @keyframes steamSmall {
    10% {
      stroke-dashoffset: 9;
      opacity: .6
    }
    80% {
      stroke-dashoffset: 27;
      opacity: 0
    }
    100% {
      stroke-dashoffset: 27;
      opacity: 0
    }
  }

`,r=()=>t.createElement(i,{className:"tea",width:"148",height:"192",viewBox:"0 0 37 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M27.0819 17H3.02508C1.91076 17 1.01376 17.9059 1.0485 19.0197C1.15761 22.5177 1.49703 29.7374 2.5 34C4.07125 40.6778 7.18553 44.8868 8.44856 46.3845C8.79051 46.79 9.29799 47 9.82843 47H20.0218C20.639 47 21.2193 46.7159 21.5659 46.2052C22.6765 44.5687 25.2312 40.4282 27.5 34C28.9757 29.8188 29.084 22.4043 29.0441 18.9156C29.0319 17.8436 28.1539 17 27.0819 17Z",stroke:"var(--secondary)",strokeWidth:"2"}),t.createElement("path",{d:"M29 23.5C29 23.5 34.5 20.5 35.5 25.4999C36.0986 28.4926 34.2033 31.5383 32 32.8713C29.4555 34.4108 28 34 28 34",stroke:"var(--secondary)",strokeWidth:"2"}),t.createElement("path",{id:"teabag",fill:"var(--secondary)",fillRule:"evenodd",clipRule:"evenodd",d:"M16 25V17H14V25H12C10.3431 25 9 26.3431 9 28V34C9 35.6569 10.3431 37 12 37H18C19.6569 37 21 35.6569 21 34V28C21 26.3431 19.6569 25 18 25H16ZM11 28C11 27.4477 11.4477 27 12 27H18C18.5523 27 19 27.4477 19 28V34C19 34.5523 18.5523 35 18 35H12C11.4477 35 11 34.5523 11 34V28Z"}),t.createElement("path",{id:"steamL",d:"M17 1C17 1 17 4.5 14 6.5C11 8.5 11 12 11 12",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"var(--secondary)"}),t.createElement("path",{id:"steamR",d:"M21 6C21 6 21 8.22727 19 9.5C17 10.7727 17 13 17 13",stroke:"var(--secondary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),n=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  opacity: 1;
  transition: all .8s .5s;
  position: absolute;
  top: 0;
  &.hide {
    z-index: -1;
    opacity: 0;
    transform: translateY(-30px);
    transition: all 1s .5s;
    .tea {
      animation: hideTea 1.2s both;
    }
    button {
      animation: hideButton 0.5s both;
    }
  }
  .tea {
    margin-top: 25vh;
  }
  button {
    color: #486e88;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    padding: 5px 20px;
    margin-top: 50px;
    font-size: 18px;
    transform: translateX(-10px);
    cursor: pointer;
    transition: all .3s;
    &:hover {
      opacity: .7;
    }
  }
  @keyframes hideButton {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      z-index: -1;
    }
  }
  @keyframes hideTea {
    32% {
      z-index: 10;
      transform: translateY(0);
    }
    60% {
      opacity: 1;
      transform: translateY(18px);
    }
    100% {
      opacity: 0;
      z-index: -1;
      transform: translateY(-100px);
    }
  }
`,o=e=>t.createElement(n,{className:e.isStart?"hide":""},t.createElement(r,null),t.createElement("button",{onClick:()=>e.setStart(!0)},"start")),l=e.img`
  width: 50px !important;
  height: 50px !important;
  opacity: .5 !important;
  transition: opacity .4s ease;
  animation: change .4s ease infinite alternate-reverse;
  &.done {
    opacity: 0 !important;
  }
  @keyframes change {
    to {
      transform: scale(1.1);
    }
  }
`,c=t.forwardRef(((e,s)=>{const[i,r]=a.exports.useState(!0),[n,o]=a.exports.useState(!1);return a.exports.useImperativeHandle(s,(()=>({isDone:i,setDone:r,mark:n,setMark:o}))),t.createElement(l,{src:"click.png",className:"click "+(i?"done":"")})})),p=e.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 20vw !important;
  .man {
    position: relative;
    .people {
      width: 200px;
      opacity: 0;
      &.visible {
        animation: show 1s 1s both;
      }
      &.inVisible {
        cursor: pointer;
      }
    }
    .leaf1 {
      position: absolute;
      top: 165px;
      left: 140px;
      width: 74px;
      opacity: 0;
      transition: all .8s .8s;
      &.visible {
        opacity: 1;
      }
    }
    .click {
      position: absolute;
      top: 190px;
      left: 170px;
    }
  }
  .text {
    p {
      max-width: 22vw;
      &.text1 {
        opacity: 0;
        margin-bottom: 80px;
        &.visible {
          animation: arise 1s 2s both;
        }
      }
      &.text2 {
        opacity: 0;
        &.visible {
          animation: arise 1s 1.8s both;
        }
      }
    }
  }
  .pot {
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s 2.8s;
    &.visible {
      transform: translateX(0);
      cursor: pointer;
      opacity: 1;
    }
    &.off {
      cursor: default;
    }
    .lid {
      width: 76.8px;
      margin-bottom: 4px;
      transform: translateX(44px);
      transition: all .4s .8s ease;
      &.off {
        transform: translate(55px, 26px) rotate(25.8deg)
      }
    }
    .potBody {
      width: 172.8px;
    }
    .click {
      position: absolute;
      top: 100px;
      left: 170px;
    }
  }
  @keyframes show {
    from {
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes arise {
    from {
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes show2 {
    from {
      transform: translate(50px, 20px);
    }
    to {
      opacity: 1;
      transform: translate(0, 20px);
    }
  }
`,m=e=>{const s=a.exports.useRef(null),i=a.exports.useRef(null),[r,n]=a.exports.useState(!1),[o,l]=a.exports.useState(!1),[m,d]=a.exports.useState(!1),[x,f]=a.exports.useState(!1);return a.exports.useEffect((()=>{e.isStart&&setTimeout((()=>{s.current.mark||s.current.setDone(!1)}),3e3)}),[e.isStart]),t.createElement(p,{className:"page"},t.createElement("div",{className:"man"},t.createElement("img",{src:"people.png",alt:"",className:`people ${e.isStart?"visible":""} ${r?"":"inVisible"}`,onClick:()=>{n(!0),l(!0),d(!0),s.current.setDone(!0),s.current.setMark(!0),setTimeout((()=>{i.current.mark||i.current.setDone(!1)}),4e3)}}),t.createElement("img",{src:"leaf1.png",alt:"",className:"leaf1 "+(r?"visible":"")}),t.createElement(c,{ref:s})),t.createElement("div",{className:"text"},t.createElement("p",{className:"text1 "+(e.isStart?"visible":"")},"中国茶文化是中国制茶、饮茶文化。中国是茶的故乡，中国人发现并利用茶，据说始于神农时代，至今已有4700多年了。"),t.createElement("p",{className:"text2 "+(o?"visible":"")},"直到现在，汉族还有民以茶代礼的风俗，其中的潮州工夫茶作为中国茶文化的古典流派，集中了中国茶道文化的精粹，作为中国茶道的代表入选国家级非物质文化遗产。")),t.createElement("div",{className:`pot ${m?"visible":""} ${x?"off":""}`,onClick:()=>{f(!0),i.current.setDone(!0),i.current.setMark(!0),setTimeout((()=>e.setDownVisible(!0)),1600)}},t.createElement("img",{src:"lid.png",alt:"",className:"lid "+(x?"off":"")}),t.createElement("img",{src:"pot.png",alt:"",className:"potBody"}),t.createElement(c,{ref:i})))},d=e.div`
  position: relative;
  text-align: center;
  .text1 {
    margin: 40px 0 60px;
  }
  .text2 {
    opacity: 0;
    margin: 90px 0 60px;
    &.visible {
      animation: arise 1s 2.4s ease both;
    }
  }
  img {
    width: 60px;
    opacity: 0;
    &.knife {
      width: 87px;
      margin-right: 40px;
      &.visible {
        animation: arise 1s .8s ease both;
      }
    }
    &.hand {
      width: 63px;
      margin-right: 40px;
      &.visible {
        animation: arise 1s 1.1s ease both;
      }
    }
    &.car {
      width: 75px;
      &.visible {
        animation: arise 1s 1.4s ease both;
      }
    }
    &.tree {
      width: 75px;
      &.visible {
        cursor: pointer;
        animation: arise 1s 3.4s ease both;
      }
    }
    &.ban {
      width: 200px;
      position: absolute;
      top: -53px;
      left: 50%;
      transform: translateX(-50%);
      transition: all .4s .8s ease-out;
      z-index: -1;
      &.visible {
        z-index: 1;
        opacity: 1;
        transform: translateX(-50%) scale(.55);
      }
    }
  }
  .wrapper {
    position: relative;
    .click {
      position: absolute;
      top: 60px;
      left: 54%;
    }
  }
  @keyframes arise {
    from {
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,x=e=>{const s=a.exports.useRef(null),[i,r]=a.exports.useState(!1);return a.exports.useEffect((()=>{e.isPage2Visited&&setTimeout((()=>{s.current.mark||s.current.setDone(!1)}),4400)}),[e.isPage2Visited]),t.createElement(d,{className:"page"},t.createElement("p",{className:"text1"},"通常，茶叶的采摘方法有：刀割法、手摘法、 机采法。"),t.createElement("img",{src:"knife.png",alt:"",className:"knife "+(e.isPage2Visited?"visible":"")}),t.createElement("img",{src:"hand.png",alt:"",className:"hand "+(e.isPage2Visited?"visible":"")}),t.createElement("img",{src:"car.png",alt:"",className:"car "+(e.isPage2Visited?"visible":"")}),t.createElement("p",{className:"text2 "+(e.isPage2Visited?"visible":"")},"茶树属四季常青而隔年交替落叶的植物，因此，合理做好鲜叶的采摘与留养，是持续长久确保茶树生长茂盛和优质丰产丰收的关键。",t.createElement("br",null),"“掠夺式”的采摘或过盛的留叶均不利于茶叶生产与发展。"),t.createElement("div",{className:"wrapper"},t.createElement("img",{src:"tree.png",alt:"",className:"tree "+(e.isPage2Visited?"visible":""),onClick:()=>{r(!0),s.current.setDone(!0),s.current.setMark(!0),setTimeout((()=>e.setDownVisible(!0)),1600)}}),t.createElement("img",{src:"ban.png",alt:"",className:"ban "+(i?"visible":"")}),t.createElement(c,{ref:s})))},f=e.div`
  text-align: center;
  position: relative;
  .text1 {
    margin-top: 100px;
  }
  .text2 {
    opacity: 0;
    &.visible {
      animation: arise .8s .8s ease both;
    }
  }
  .text3 {
    font-size: 22px;
    margin: 90px 0 40px;
    opacity: 0;
    transition: opacity .4s 1.8s ease;
    z-index: -1;
    &.visible {
      opacity: 1;
      z-index: 1;
      cursor: pointer;
    }
    &.done {
      cursor: default;
    }
  }
  .text4 {
    margin-bottom: 6px;
    span {
      margin-right: 46px;
      &:last-child {
        margin: 0;
      }
    }
  }
  .text5 {
    margin-top: 4px;
    opacity: 0;
    transition: opacity .8s 2.1s ease;
    &.visible {
      opacity: 1;
    }
    span {
      margin-right: 430px;
      &:last-child {
        margin: 0;
      }
    }
  }
  img {
    width: 500px;
    height: 25px;
  }
  .mask {
    position: absolute;
    top: 420px;
    left: 50%;
    transform: translateX(-50%);
    width: 520px;
    height: 100px;
    background: #486e88;
    transition: all 2s .8s ease;
    &.visible {
      transform: translate(25vw);
    }
  }
  .wrapper {
    position: relative;
    .click {
      position: absolute;
      top: 10px;
      left: 56%;
      z-index: 2;
    }
  }
  @keyframes arise {
    from {
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,u=e=>{const s=a.exports.useRef(null),[i,r]=a.exports.useState(!1);return a.exports.useEffect((()=>{e.isPage3Visited&&setTimeout((()=>{s.current.done||s.current.setDone(!1)}),2600)}),[e.isPage3Visited]),t.createElement(f,{className:"page"},t.createElement("p",{className:"text1"},"我国的茶叶分类上，依据品种及加工工艺的不同一般将其归为六大类：绿茶、红茶、白茶、青茶、黄茶、黑茶。其中青茶又叫乌龙茶。"),t.createElement("p",{className:"text2 "+(e.isPage3Visited?"visible":"")},"这些茶类依据发酵程度又可再分类：不发酵茶（绿茶）、轻发酵茶（黄茶、白茶）、半发酵茶（青茶）、全发酵茶（红茶）、后发酵茶（黑茶）。"),t.createElement("div",{className:"wrapper"},t.createElement("p",{className:`text3 ${e.isPage3Visited?"visible":""} ${i?"done":""}`,onClick:()=>{r(!0),s.current.setDone(!0),s.current.setMark(!0),setTimeout((()=>e.setDownVisible(!0)),2900)}},"发酵程度"),t.createElement(c,{ref:s})),t.createElement("p",{className:"text4"},t.createElement("span",null,"绿茶"),t.createElement("span",null,"白茶"),t.createElement("span",null,"黄茶"),t.createElement("span",null,"青茶"),t.createElement("span",null,"红茶"),t.createElement("span",null,"黑茶")),t.createElement("img",{src:"arrow.png",alt:""}),t.createElement("p",{className:"text5 "+(i?"visible":"")},t.createElement("span",null,"0%"),t.createElement("span",null,"100%")),t.createElement("div",{className:"mask "+(i?"visible":"")}))},g=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 180px 200px !important;
  .title {
    margin-bottom: 80px;
  }
  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
    .text1 {
      opacity: 0;
      &.visible {
        animation: arise .8s .8s ease both;
      }
    }
    .text2 {
      opacity: 0;
      &.visible {
        animation: arise .8s 3.3s ease both;
      }
    }
    .step {
      display: flex;
      align-items: center;
      margin-top: 40px;
    }
    img {
      margin-right: 26px;
      opacity: 0;
      &.visible {
        opacity: 1;
      }
    }
    .add1, .add2 {
      width: 25px;
    }
    .cup {
      width: 90px;
      cursor: pointer;
      &.done {
        cursor: default;
      }
    }
    .water {
      width: 55px;
    }
    .leaf {
      width: 60px;
    }
    .top {
      position: relative;
      .cup {
        &.visible {
          opacity: 0;
          animation: arise .8s 1.6s ease both;
        }
      }
      .add1 {
        transition: opacity .8s .8s ease;
      }
      .water {
        transition: opacity .8s 1.3s ease;
      }
      .add2 {
        transition: opacity .8s 1.8s ease;
      }
      .leaf {
        transition: opacity .8s 2.3s ease;
      }
      .click {
        position: absolute;
        top: 130px;
        left: 90px;
      }
    }
    .bottom {
      position: relative;
      .cup {
        &.visible {
          opacity: 0;
          animation: arise .8s 4.1s ease both;
        }
      }
      .add1 {
        transition: opacity .8s .8s ease;
      }
      .leaf {
        transition: opacity .8s 1.3s ease;
      }
      .add2 {
        transition: opacity .8s 1.8s ease;
      }
      .water {
        transition: opacity .8s 2.3s ease;
      }
      .click {
        position: absolute;
        top: 130px;
        left: 90px;
      }
    }
  }
  @keyframes arise {
    from {
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,b=e=>{const s=a.exports.useRef(null),i=a.exports.useRef(null),[r,n]=a.exports.useState(!1),[o,l]=a.exports.useState(!1);return a.exports.useEffect((()=>{e.isPage4Visited&&setTimeout((()=>{s.current.mark||s.current.setDone(!1)}),2600)}),[e.isPage4Visited]),t.createElement(g,{className:"page"},t.createElement("p",{className:"title"},"绿茶是不发酵茶，冲泡绿茶时水温应控制在75℃~85℃，投茶时有上、中、下投法。"),t.createElement("div",{className:"wrapper"},t.createElement("div",{className:"top"},t.createElement("p",{className:"text1 "+(e.isPage4Visited?"visible":"")},"上投法即先投水后投茶，多用于比较细嫩的绿茶。"),t.createElement("div",{className:"step"},t.createElement("img",{src:"cup.png",alt:"",className:`cup ${e.isPage4Visited?"visible":""} ${r?"done":""}`,onClick:()=>{n(!0),s.current.setDone(!0),s.current.setMark(!0),setTimeout((()=>{i.current.mark||i.current.setDone(!1)}),5100)}}),t.createElement("img",{src:"add.png",alt:"",className:"add1 "+(r?"visible":"")}),t.createElement("img",{src:"water.png",alt:"",className:"water "+(r?"visible":"")}),t.createElement("img",{src:"add.png",alt:"",className:"add2 "+(r?"visible":"")}),t.createElement("img",{src:"leaf2.png",alt:"",className:"leaf "+(r?"visible":"")}),t.createElement(c,{ref:s}))),t.createElement("div",{className:"bottom"},t.createElement("p",{className:"text2 "+(r?"visible":"")},"下投法即先投茶后投水，多用于质量一般的绿茶。"),t.createElement("div",{className:"step"},t.createElement("img",{src:"cup.png",alt:"",className:`cup ${r?"visible":""} ${o?"done":""}`,onClick:()=>{l(!0),i.current.setDone(!0),i.current.setMark(!0),setTimeout((()=>e.setDownVisible(!0)),3100)}}),t.createElement("img",{src:"add.png",alt:"",className:"add1 "+(o?"visible":"")}),t.createElement("img",{src:"leaf2.png",alt:"",className:"leaf "+(o?"visible":"")}),t.createElement("img",{src:"add.png",alt:"",className:"add2 "+(o?"visible":"")}),t.createElement("img",{src:"water.png",alt:"",className:"water "+(o?"visible":"")}),t.createElement(c,{ref:i})))))},v=e.div`
  display: flex;
  justify-content: space-around;
  .wrapper {
    padding: 100px 0;
    text-align: center;
    .bowl {
      opacity: 0;
      transform: translate(-28px, 70px) scale(1.15);
      transition: all .8s 3.9s ease;
      &.visible {
        opacity: 1;
        transform: translate(-28px, 20px) scale(1.15);
      }
      .click {
        position: absolute;
        top: 70px;
        left: 380px;
      }
    }
    p {
      margin-bottom: 90px;
      &.text2 {
        margin-bottom: 100px;
        opacity: 0;
        &.visible {
          animation: arise .8s 2.9s ease both;
        }
      }
      &.number {
        font-size: 40px;
        margin: 0;
        opacity: 0;
        transform: scale(1.2);
        transition: all .8s 1.9s ease;
        &.visible {
          transform: scale(1);
          opacity: 1;
        }
      }
    }
    img {
      width: 70px;
      &.leaf2 {
        opacity: 0;
        margin-right: 50px;
        &.visible {
          animation: arise .8s .8s ease both;
        }
      }
      &.water {
        opacity: 0;
        width: 62px;
        &.visible {
          animation: arise .8s 1.1s ease both;
        }
      }
      &.bowl_cap {
        width: 64px;
        transition: all .4s .8s;
        cursor: pointer;
        &.visible {
          cursor: none;
          transform: rotate(58.5deg) translate(14px, -88px);
        }
      }
      &.bowl_body {
        width: 125px;
        transform: translateX(-11px);
        cursor: pointer;
        &.visible {
          cursor: default;
        }
      }
    }
  }
  @keyframes arise {
    from {
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,h=e=>{const s=a.exports.useRef(null),[i,r]=a.exports.useState(!1);return a.exports.useEffect((()=>{e.isPage5Visited&&setTimeout((()=>{s.current.mark||s.current.setDone(!1)}),4600)}),[e.isPage5Visited]),t.createElement(v,{className:"page"},t.createElement("div",{className:"wrapper"},t.createElement("p",{className:"text1"},"红茶是全发酵茶，冲泡红茶最好用刚煮沸的水，投茶的茶水比一般为 1:50。"),t.createElement("div",{className:"item"},t.createElement("img",{src:"leaf2.png",alt:"",className:"leaf2 "+(e.isPage5Visited?"visible":"")}),t.createElement("img",{src:"water.png",alt:"",className:"water "+(e.isPage5Visited?"visible":"")}),t.createElement("p",{className:"number "+(e.isPage5Visited?"visible":"")},"1    :    50"))),t.createElement("div",{className:"wrapper"},t.createElement("p",{className:"text2 "+(e.isPage5Visited?"visible":"")},"为了能够泡茶红茶原味的口感与富有层次感的滋味，最好选用盖碗来冲泡。"),t.createElement("div",{className:"bowl "+(e.isPage5Visited?"visible":""),onClick:()=>{r(!0),s.current.setDone(!0),s.current.setMark(!0),setTimeout((()=>e.setDownVisible(!0)),1600)}},t.createElement("img",{src:"bowl-cap.png",alt:"",className:"bowl_cap "+(i?"visible":"")}),t.createElement("img",{src:"bowl-body.png",alt:"",className:"bowl_body "+(i?"visible":"")}),t.createElement(c,{ref:s}))))},E=e.div`
  text-align: center;
  .img {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px;
    .heart {
      width: 50px;
      opacity: 0;
      &.visible {
        animation: heartArise .8s .8s ease both;
      }
    }
    .marry {
      width: 250px;
      opacity: 0;
      &.visible {
        cursor: pointer;
        animation: arise .8s 1.8s ease both;
      }
      &.heartVisible {
        cursor: default;
      }
    }
    .click {
      position: absolute;
      bottom: -20px;
      right: 34%;
    }
  }
  .text1 {
    opacity: 0;
    &.visible {
      animation: arise .8s .8s ease both;
    }
  }
  .text2 {
    opacity: 0;
    &.visible {
      animation: arise .8s 1.8s ease both;
    }
  }
  @keyframes arise {
    from {
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes heartArise {
    from {
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,y=e=>{const s=a.exports.useRef(null),[i,r]=a.exports.useState(!1);return a.exports.useEffect((()=>{e.isPage6Visited&&setTimeout((()=>{s.current.mark||s.current.setDone(!1)}),2800)}),[e.isPage6Visited]),t.createElement(E,{className:"page"},t.createElement("p",null,"在婚礼中，茶经常被作为礼仪的一部分用于迎亲或结婚仪式中。有新郎、新娘的“交杯茶”、“和合茶”，或向父母尊长敬献的“谢恩茶”、“认亲茶”等仪式。"),t.createElement("p",{className:"text1 "+(e.isPage6Visited?"visible":"")},"总之，从古到今，我国的许多地方，在缔婚的每一个过程中，往往都离不开茶来作礼仪。"),t.createElement("div",{className:"img",onClick:()=>{r(!0),s.current.setDone(!0),s.current.setMark(!0)}},t.createElement("img",{src:"heart.png",alt:"",className:"heart "+(i?"visible":"")}),t.createElement("img",{src:"marry.png",alt:"",className:`marry ${e.isPage6Visited?"visible":""} ${i?"heartVisible":""}`}),t.createElement(c,{ref:s})),t.createElement("p",{className:"text2 "+(i?"visible":"")},"除此之外以茶待客、以茶会友、以茶联谊也是古代沿袭下来的饮茶习俗。"))},k=e.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 20px) scale(1.6);
  opacity: 0;
  transition: all .4s;
  z-index: -1;
  &.visible {
    opacity: .4;
    transform: translateX(-50%) scale(1.6);
    cursor: pointer;
    z-index: 2;
    &:hover {
      opacity: .8;
    }
  }
`,w=e=>t.createElement(k,{className:e.isNextVisible?"visible":"",onClick:()=>e.next()},t.createElement("svg",{className:"icon"},t.createElement("use",{xlinkHref:"#icon-down"}))),N=e.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%, -20px) scale(1.6) rotate(180deg);
  opacity: 0;
  transition: all .4s;
  z-index: -1;
  &.visible {
    opacity: .4;
    transform: translateX(-50%) scale(1.6) rotate(180deg);
    cursor: pointer;
    z-index: 2;
    &:hover {
      opacity: .8;
    }
  }
`,V=e=>t.createElement(N,{className:e.isBackVisible?"visible":"",onClick:()=>e.back()},t.createElement("svg",{className:"icon"},t.createElement("use",{xlinkHref:"#icon-down"}))),S=e.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  .page {
    height: calc(100vh - 200px);
    padding: 100px;
    scroll-snap-align: start;
    &:first-child {
      padding: 100px 200px;
    }
  }
`,C=e=>{const s=a.exports.useRef(null),[i,r]=a.exports.useState(!1),[n,o]=a.exports.useState(!1),[l,c]=a.exports.useState(1),[p,d]=a.exports.useState(!1),[f,g]=a.exports.useState(!1),[v,E]=a.exports.useState(!1),[k,N]=a.exports.useState(!1),[C,D]=a.exports.useState(!1),[P,z]=a.exports.useState(!1),Y=[p,f,v,k,P,P],T=[d,g,E,N,D,z],M=document.documentElement.clientHeight;return a.exports.useEffect((()=>{T[l-1](!0)}),[l]),t.createElement(S,{ref:s},t.createElement(m,{setDownVisible:r,isPage1Visited:p,isStart:e.isStart}),t.createElement(x,{setDownVisible:r,isPage2Visited:f}),t.createElement(u,{setDownVisible:r,isPage3Visited:v}),t.createElement(b,{setDownVisible:r,isPage4Visited:k}),t.createElement(h,{setDownVisible:r,isPage5Visited:C}),t.createElement(y,{setDownVisible:r,isPage6Visited:P}),t.createElement(V,{isBackVisible:n,back:()=>{2===l&&o(!1),s.current.scrollTo({top:M*(l-2),behavior:"smooth"}),c((e=>e-1)),r(!0)}}),t.createElement(w,{isNextVisible:i,next:()=>{s.current.scrollTo({top:M*l,behavior:"smooth"}),Y[l]&&5!==l||r(!1),c((e=>e+1)),o(!0)}}))},D=e.div`
  background: #486e88;
  color: #fff;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-size: 17px;
  &.hide {
    max-height: 100vh;
    overflow: hidden;
  }
`,P=()=>{const[e,s]=a.exports.useState(!1),[i]=a.exports.useState([37,38,39,40]);return a.exports.useEffect((()=>{document.body.addEventListener("wheel",(e=>e.preventDefault()),{passive:!1}),document.body.addEventListener("keydown",(e=>{i.indexOf(e.keyCode)>=0&&e.preventDefault()}),{passive:!1})}),[]),t.createElement(D,{className:e?"":"hide"},t.createElement(o,{isStart:e,setStart:s}),t.createElement(C,{isStart:e}))};s.render(t.createElement(t.StrictMode,null,t.createElement(P,null)),document.getElementById("root"));
