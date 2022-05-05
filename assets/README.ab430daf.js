var T=Object.defineProperty,M=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var a=(r,n,l)=>n in r?T(r,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):r[n]=l,o=(r,n)=>{for(var l in n||(n={}))z.call(n,l)&&a(r,l,n[l]);if(h)for(var l of h(n))N.call(n,l)&&a(r,l,n[l]);return r},s=(r,n)=>M(r,I(n));import{r as c,a as u,j as e}from"./main.28fb06c0.js";import{C as d,dl as i,d9 as F}from"./index.60aa6900.js";let p;var v=()=>{const[r,n]=c.exports.useState(1),[l,C]=c.exports.useState(0),[E,m]=c.exports.useState(1),[B,g]=c.exports.useState(1),[b,A]=c.exports.useState(1),[D,S]=c.exports.useState(1),[x,V]=c.exports.useState(1),[f,P]=c.exports.useState(1),[k,y]=c.exports.useState(1);return u("div",{className:"demo-stepper",children:[e(d,{title:"\u57FA\u7840\u7528\u6CD5",center:!0,children:e(i,{min:0,value:r,onMinus:()=>console.log("minus"),onPlus:()=>console.log("plus"),onFocus:()=>console.log("focus"),onBlur:()=>console.log("blur"),onOverlimit:()=>console.log("overlimit"),onChange:t=>{console.log("change",t,typeof t),n(t)},onClick:t=>console.log("click",t)})}),e(d,{title:"\u8BBE\u7F6E\u6700\u5C0F\u503C",center:!0,children:e(i,{min:0,value:l,onChange:t=>{C(t)}})}),e(d,{title:"\u6B65\u957F\u8BBE\u7F6E",center:!0,children:e(i,{value:E,step:"2",onChange:t=>m(t)})}),e(d,{title:"\u8BBE\u7F6E\u8F93\u5165\u8303\u56F4",center:!0,children:e(i,{value:B,step:"2",min:"5",max:"8",onChange:t=>g(t)})}),e(d,{title:"\u7981\u7528\u72B6\u6001",center:!0,children:e(i,{value:1,disabled:!0})}),e(d,{title:"\u7981\u7528\u8F93\u5165\u6846",center:!0,children:e(i,{value:b,onChange:t=>A(t),disableInput:!0})}),e(d,{title:"\u56FA\u5B9A\u5C0F\u6570\u4F4D\u6570",center:!0,children:e(i,{value:D,onChange:t=>S(t),step:"0.2",decimalLength:"1"})}),e(d,{title:"\u81EA\u5B9A\u4E49\u5927\u5C0F",center:!0,children:e(i,{value:x,onChange:t=>V(t),inputWidth:"44px",buttonSize:"28px"})}),e(d,{title:"\u5F02\u6B65\u53D8\u66F4",center:!0,children:e(i,{value:f,onChange:t=>{F.loading({forbidClick:!0}),clearTimeout(p),p=setTimeout(()=>{F.clear(),P(t)},500)}})}),e(d,{title:"\u5706\u89D2\u98CE\u683C",center:!0,children:e(i,{value:k,onChange:t=>y(t),theme:"round",buttonSize:"22",disableInput:!0})})]})};const w=`/* eslint-disable no-console */
import React, { useState } from 'react';
import { Stepper, Cell, Toast } from 'react-vant';

let timer;

export default () => {
  const [value1, setValue1] = useState<string | number>(1);
  const [value9, setValue9] = useState<string | number>(0);
  const [value2, setValue2] = useState<string | number>(1);
  const [value3, setValue3] = useState<string | number>(1);
  const [value4, setValue4] = useState<string | number>(1);
  const [value5, setValue5] = useState<string | number>(1);
  const [value6, setValue6] = useState<string | number>(1);
  const [value7, setValue7] = useState<string | number>(1);
  const [value8, setValue8] = useState<string | number>(1);

  return (
    <div className="demo-stepper">
      <Cell title="\u57FA\u7840\u7528\u6CD5" center>
        <Stepper
          min={0}
          value={value1}
          onMinus={() => console.log('minus')}
          onPlus={() => console.log('plus')}
          onFocus={() => console.log('focus')}
          onBlur={() => console.log('blur')}
          onOverlimit={() => console.log('overlimit')}
          onChange={(v) => {
            console.log('change', v, typeof v);
            setValue1(v);
          }}
          onClick={(e) => console.log('click', e)}
        />
      </Cell>
      <Cell title="\u8BBE\u7F6E\u6700\u5C0F\u503C" center>
        <Stepper
          min={0}
          value={value9}
          onChange={(v) => {
            setValue9(v);
          }}
        />
      </Cell>
      <Cell title="\u6B65\u957F\u8BBE\u7F6E" center>
        <Stepper value={value2} step="2" onChange={(val) => setValue2(val)} />
      </Cell>
      <Cell title="\u8BBE\u7F6E\u8F93\u5165\u8303\u56F4" center>
        <Stepper value={value3} step="2" min="5" max="8" onChange={(val) => setValue3(val)} />
      </Cell>
      <Cell title="\u7981\u7528\u72B6\u6001" center>
        <Stepper value={1} disabled />
      </Cell>
      <Cell title="\u7981\u7528\u8F93\u5165\u6846" center>
        <Stepper value={value4} onChange={(val) => setValue4(val)} disableInput />
      </Cell>
      <Cell title="\u56FA\u5B9A\u5C0F\u6570\u4F4D\u6570" center>
        <Stepper value={value5} onChange={(val) => setValue5(val)} step="0.2" decimalLength="1" />
      </Cell>
      <Cell title="\u81EA\u5B9A\u4E49\u5927\u5C0F" center>
        <Stepper
          value={value6}
          onChange={(val) => setValue6(val)}
          inputWidth="44px"
          buttonSize="28px"
        />
      </Cell>
      <Cell title="\u5F02\u6B65\u53D8\u66F4" center>
        <Stepper
          value={value7}
          onChange={(val) => {
            Toast.loading({ forbidClick: true });

            clearTimeout(timer);
            timer = setTimeout(() => {
              Toast.clear();
              // \u6CE8\u610F\u6B64\u65F6\u4FEE\u6539 value \u540E\u4F1A\u518D\u6B21\u89E6\u53D1 change \u4E8B\u4EF6
              setValue7(val);
            }, 500);
          }}
        />
      </Cell>
      <Cell title="\u5706\u89D2\u98CE\u683C" center>
        <Stepper
          value={value8}
          onChange={(val) => setValue8(val)}
          theme="round"
          buttonSize="22"
          disableInput
        />
      </Cell>
    </div>
  );
};
`,_={code:w,lang:"tsx",dependencies:{react:{type:"NPM",value:"17.0.2"},"react-vant":{type:"NPM",value:"2.0.0-alpha.32"},"index.tsx":{type:"FILE",value:`/* eslint-disable no-console */
import React, { useState } from 'react';
import { Stepper, Cell, Toast } from 'react-vant';

let timer;

export default () => {
  const [value1, setValue1] = useState<string | number>(1);
  const [value9, setValue9] = useState<string | number>(0);
  const [value2, setValue2] = useState<string | number>(1);
  const [value3, setValue3] = useState<string | number>(1);
  const [value4, setValue4] = useState<string | number>(1);
  const [value5, setValue5] = useState<string | number>(1);
  const [value6, setValue6] = useState<string | number>(1);
  const [value7, setValue7] = useState<string | number>(1);
  const [value8, setValue8] = useState<string | number>(1);

  return (
    <div className="demo-stepper">
      <Cell title="\u57FA\u7840\u7528\u6CD5" center>
        <Stepper
          min={0}
          value={value1}
          onMinus={() => console.log('minus')}
          onPlus={() => console.log('plus')}
          onFocus={() => console.log('focus')}
          onBlur={() => console.log('blur')}
          onOverlimit={() => console.log('overlimit')}
          onChange={(v) => {
            console.log('change', v, typeof v);
            setValue1(v);
          }}
          onClick={(e) => console.log('click', e)}
        />
      </Cell>
      <Cell title="\u8BBE\u7F6E\u6700\u5C0F\u503C" center>
        <Stepper
          min={0}
          value={value9}
          onChange={(v) => {
            setValue9(v);
          }}
        />
      </Cell>
      <Cell title="\u6B65\u957F\u8BBE\u7F6E" center>
        <Stepper value={value2} step="2" onChange={(val) => setValue2(val)} />
      </Cell>
      <Cell title="\u8BBE\u7F6E\u8F93\u5165\u8303\u56F4" center>
        <Stepper value={value3} step="2" min="5" max="8" onChange={(val) => setValue3(val)} />
      </Cell>
      <Cell title="\u7981\u7528\u72B6\u6001" center>
        <Stepper value={1} disabled />
      </Cell>
      <Cell title="\u7981\u7528\u8F93\u5165\u6846" center>
        <Stepper value={value4} onChange={(val) => setValue4(val)} disableInput />
      </Cell>
      <Cell title="\u56FA\u5B9A\u5C0F\u6570\u4F4D\u6570" center>
        <Stepper value={value5} onChange={(val) => setValue5(val)} step="0.2" decimalLength="1" />
      </Cell>
      <Cell title="\u81EA\u5B9A\u4E49\u5927\u5C0F" center>
        <Stepper
          value={value6}
          onChange={(val) => setValue6(val)}
          inputWidth="44px"
          buttonSize="28px"
        />
      </Cell>
      <Cell title="\u5F02\u6B65\u53D8\u66F4" center>
        <Stepper
          value={value7}
          onChange={(val) => {
            Toast.loading({ forbidClick: true });

            clearTimeout(timer);
            timer = setTimeout(() => {
              Toast.clear();
              // \u6CE8\u610F\u6B64\u65F6\u4FEE\u6539 value \u540E\u4F1A\u518D\u6B21\u89E6\u53D1 change \u4E8B\u4EF6
              setValue7(val);
            }, 500);
          }}
        />
      </Cell>
      <Cell title="\u5706\u89D2\u98CE\u683C" center>
        <Stepper
          value={value8}
          onChange={(val) => setValue8(val)}
          theme="round"
          buttonSize="22"
          disableInput
        />
      </Cell>
    </div>
  );
};
`}},key:"stepper-base",meta:{title:"\u57FA\u7840\u793A\u4F8B"}},L=function({previewer:r=()=>null,api:n=()=>null}){const l=r;return e("div",{children:u("div",{children:[e("h1",{id:"stepper-\u6B65\u8FDB\u5668","data-anchor":"stepper-\u6B65\u8FDB\u5668",children:"Stepper \u6B65\u8FDB\u5668"}),e("h2",{id:"\u4ECB\u7ECD","data-anchor":"\u4ECB\u7ECD",children:"\u4ECB\u7ECD"}),e("p",{children:"\u6B65\u8FDB\u5668\u7531\u589E\u52A0\u6309\u94AE\u3001\u51CF\u5C11\u6309\u94AE\u548C\u8F93\u5165\u6846\u7EC4\u6210\uFF0C\u7528\u4E8E\u5728\u4E00\u5B9A\u8303\u56F4\u5185\u8F93\u5165\u3001\u8C03\u6574\u6570\u5B57\u3002"}),e("h2",{id:"\u5F15\u5165","data-anchor":"\u5F15\u5165",children:"\u5F15\u5165"}),e(l,{code:"import { Stepper } from 'react-vant';",lang:"js"}),e("h2",{id:"\u4EE3\u7801\u6F14\u793A","data-anchor":"\u4EE3\u7801\u6F14\u793A",children:"\u4EE3\u7801\u6F14\u793A"}),e("h3",{id:"\u57FA\u7840\u793A\u4F8B","data-anchor":"\u57FA\u7840\u793A\u4F8B",children:"\u57FA\u7840\u793A\u4F8B"}),u("p",{children:["\u901A\u8FC7 ",e("code",{children:"value"})," \u7ED1\u5B9A\u8F93\u5165\u503C\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",e("code",{children:"onChange"})," \u4E8B\u4EF6\u76D1\u542C\u5230\u8F93\u5165\u503C\u7684\u53D8\u5316\u3002"]}),e("div",{children:e(l,s(o({},_),{children:e(v,{})}))}),e("h2",{id:"api","data-anchor":"api",children:"API"}),e("h3",{id:"props","data-anchor":"props",children:"Props"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u53C2\u6570"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u7C7B\u578B"}),e("th",{children:"\u9ED8\u8BA4\u503C"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"value"}),e("td",{children:"\u5F53\u524D\u8F93\u5165\u7684\u503C"}),e("td",{children:e("em",{children:"number|string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"min"}),e("td",{children:"\u6700\u5C0F\u503C"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"1"})})]}),u("tr",{children:[e("td",{children:"max"}),e("td",{children:"\u6700\u5927\u503C"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"defaultValue"}),e("td",{children:"\u521D\u59CB\u503C\uFF0C\u5F53 value \u4E3A\u7A7A\u65F6\u751F\u6548"}),e("td",{children:e("em",{children:"number|string"})}),e("td",{children:e("code",{children:"1"})})]}),u("tr",{children:[e("td",{children:"step"}),e("td",{children:"\u6B65\u957F\uFF0C\u6BCF\u6B21\u70B9\u51FB\u65F6\u6539\u53D8\u7684\u503C"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"1"})})]}),u("tr",{children:[e("td",{children:"name"}),u("td",{children:["\u6807\u8BC6\u7B26\uFF0C\u53EF\u4EE5\u5728 ",e("code",{children:"change"})," \u4E8B\u4EF6\u56DE\u8C03\u53C2\u6570\u4E2D\u83B7\u53D6"]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"inputWidth"}),u("td",{children:["\u8F93\u5165\u6846\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"32px"})})]}),u("tr",{children:[e("td",{children:"buttonSize"}),u("td",{children:["\u6309\u94AE\u5927\u5C0F\u4EE5\u53CA\u8F93\u5165\u6846\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3A ",e("code",{children:"px"})]}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:e("code",{children:"28px"})})]}),u("tr",{children:[e("td",{children:"decimalLength"}),e("td",{children:"\u56FA\u5B9A\u663E\u793A\u7684\u5C0F\u6570\u4F4D\u6570"}),e("td",{children:e("em",{children:"number | string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"theme"}),u("td",{children:["\u6837\u5F0F\u98CE\u683C\uFF0C\u53EF\u9009\u503C\u4E3A ",e("code",{children:"round"})]}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"placeholder"}),e("td",{children:"\u8F93\u5165\u6846\u5360\u4F4D\u63D0\u793A\u6587\u5B57"}),e("td",{children:e("em",{children:"string"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"integer"}),e("td",{children:"\u662F\u5426\u53EA\u5141\u8BB8\u8F93\u5165\u6574\u6570"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"disabled"}),e("td",{children:"\u662F\u5426\u7981\u7528\u6B65\u8FDB\u5668"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"disablePlus"}),e("td",{children:"\u662F\u5426\u7981\u7528\u589E\u52A0\u6309\u94AE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"disableMinus"}),e("td",{children:"\u662F\u5426\u7981\u7528\u51CF\u5C11\u6309\u94AE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"disableInput"}),e("td",{children:"\u662F\u5426\u7981\u7528\u8F93\u5165\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"beforeChange"}),u("td",{children:["\u8F93\u5165\u503C\u53D8\u5316\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE ",e("code",{children:"false"})," \u53EF\u963B\u6B62\u8F93\u5165\uFF0C\u652F\u6301\u8FD4\u56DE Promise"]}),e("td",{children:e("em",{children:"(value) => boolean | Promise"})}),e("td",{children:e("code",{children:"false"})})]}),u("tr",{children:[e("td",{children:"showPlus"}),e("td",{children:"\u662F\u5426\u663E\u793A\u589E\u52A0\u6309\u94AE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"showMinus"}),e("td",{children:"\u662F\u5426\u663E\u793A\u51CF\u5C11\u6309\u94AE"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"showInput"}),e("td",{children:"\u662F\u5426\u663E\u793A\u8F93\u5165\u6846"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"longPress"}),e("td",{children:"\u662F\u5426\u5F00\u542F\u957F\u6309\u624B\u52BF"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"true"})})]}),u("tr",{children:[e("td",{children:"allowEmpty"}),e("td",{children:"\u662F\u5426\u5141\u8BB8\u8F93\u5165\u7684\u503C\u4E3A\u7A7A"}),e("td",{children:e("em",{children:"boolean"})}),e("td",{children:e("code",{children:"false"})})]})]})]}),e("h3",{id:"events","data-anchor":"events",children:"Events"}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u4E8B\u4EF6\u540D"}),e("th",{children:"\u8BF4\u660E"}),e("th",{children:"\u56DE\u8C03\u53C2\u6570"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"onClick"}),e("td",{children:"\u70B9\u51FB\u8F93\u5165\u6846\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: Event"})})]}),u("tr",{children:[e("td",{children:"onChange"}),e("td",{children:"\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6"}),e("td",{children:u("em",{children:["value: string, detail: ","{"," name: string ","}"]})})]}),u("tr",{children:[e("td",{children:"onOverlimit"}),e("td",{children:"\u70B9\u51FB\u4E0D\u53EF\u7528\u7684\u6309\u94AE\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onPlus"}),e("td",{children:"\u70B9\u51FB\u589E\u52A0\u6309\u94AE\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onMinus"}),e("td",{children:"\u70B9\u51FB\u51CF\u5C11\u6309\u94AE\u65F6\u89E6\u53D1"}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"onFocus"}),e("td",{children:"\u8F93\u5165\u6846\u805A\u7126\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: Event"})})]}),u("tr",{children:[e("td",{children:"onBlur"}),e("td",{children:"\u8F93\u5165\u6846\u5931\u7126\u65F6\u89E6\u53D1"}),e("td",{children:e("em",{children:"event: Event"})})]})]})]}),e("h3",{id:"\u7C7B\u578B\u5B9A\u4E49","data-anchor":"\u7C7B\u578B\u5B9A\u4E49",children:"\u7C7B\u578B\u5B9A\u4E49"}),e("p",{children:"\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A"}),e(l,{code:"import type { StepperTheme } from 'react-vant';",lang:"ts"}),e("h2",{id:"\u4E3B\u9898\u5B9A\u5236","data-anchor":"\u4E3B\u9898\u5B9A\u5236",children:"\u4E3B\u9898\u5B9A\u5236"}),e("h3",{id:"\u6837\u5F0F\u53D8\u91CF","data-anchor":"\u6837\u5F0F\u53D8\u91CF",children:"\u6837\u5F0F\u53D8\u91CF"}),u("p",{children:["\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 ",e("a",{href:"#/zh-CN/config-provider",children:"ConfigProvider \u7EC4\u4EF6"}),"\u3002"]}),u("table",{children:[e("thead",{children:u("tr",{children:[e("th",{children:"\u540D\u79F0"}),e("th",{children:"\u9ED8\u8BA4\u503C"}),e("th",{children:"\u63CF\u8FF0"})]})}),u("tbody",{children:[u("tr",{children:[e("td",{children:"--rv-stepper-active-color"}),e("td",{children:e("em",{children:"#e8e8e8"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-background-color"}),e("td",{children:e("em",{children:"var(--rv-active-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-button-icon-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-button-disabled-color"}),e("td",{children:e("em",{children:"var(--rv-background-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-button-disabled-icon-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-button-round-theme-color"}),e("td",{children:e("em",{children:"var(--rv-danger-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-input-width"}),e("td",{children:e("em",{children:"32px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-input-height"}),e("td",{children:e("em",{children:"28px"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-input-font-size"}),e("td",{children:e("em",{children:"var(--rv-font-size-md)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-input-line-height"}),e("td",{children:e("em",{children:"normal"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-input-text-color"}),e("td",{children:e("em",{children:"var(--rv-text-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-input-disabled-text-color"}),e("td",{children:e("em",{children:"var(--rv-gray-5)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-input-disabled-background-color"}),e("td",{children:e("em",{children:"var(--rv-active-color)"})}),e("td",{children:"-"})]}),u("tr",{children:[e("td",{children:"--rv-stepper-border-radius"}),e("td",{children:e("em",{children:"var(--rv-border-radius-md)"})}),e("td",{children:"-"})]})]})]})]})})},R=[{Component:v,key:"stepper-base",title:"\u57FA\u7840\u793A\u4F8B"}],j=void 0,O=[{depth:1,text:"Stepper \u6B65\u8FDB\u5668",id:"stepper-\u6B65\u8FDB\u5668"},{depth:2,text:"\u4ECB\u7ECD",id:"\u4ECB\u7ECD"},{depth:2,text:"\u5F15\u5165",id:"\u5F15\u5165"},{depth:2,text:"\u4EE3\u7801\u6F14\u793A",id:"\u4EE3\u7801\u6F14\u793A"},{depth:3,text:"\u57FA\u7840\u793A\u4F8B",id:"\u57FA\u7840\u793A\u4F8B"},{depth:2,text:"API",id:"api"},{depth:3,text:"Props",id:"props"},{depth:3,text:"Events",id:"events"},{depth:3,text:"\u7C7B\u578B\u5B9A\u4E49",id:"\u7C7B\u578B\u5B9A\u4E49"},{depth:2,text:"\u4E3B\u9898\u5B9A\u5236",id:"\u4E3B\u9898\u5B9A\u5236"},{depth:3,text:"\u6837\u5F0F\u53D8\u91CF",id:"\u6837\u5F0F\u53D8\u91CF"}],W="/src/components/stepper/README.md",q="Stepper \u6B65\u8FDB\u5668",G="1651747726000";var Q=r=>r.children({MdContent:L,demos:R,frontmatter:j,slugs:O,filePath:W,title:q,updatedTime:G});export{L as MdContent,Q as default,R as demos,W as filePath,j as frontmatter,O as slugs,q as title,G as updatedTime};
