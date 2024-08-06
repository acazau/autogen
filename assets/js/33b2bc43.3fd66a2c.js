"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4008],{64042:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var r=n(85893),i=n(11151);const t={sidebar_label:"cohere",title:"oai.cohere"},c=void 0,o={id:"reference/oai/cohere",title:"oai.cohere",description:"Create an OpenAI-compatible client using Cohere's API.",source:"@site/docs/reference/oai/cohere.md",sourceDirName:"reference/oai",slug:"/reference/oai/cohere",permalink:"/autogen/docs/reference/oai/cohere",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/oai/cohere.md",tags:[],version:"current",frontMatter:{sidebar_label:"cohere",title:"oai.cohere"},sidebar:"referenceSideBar",previous:{title:"client_utils",permalink:"/autogen/docs/reference/oai/client_utils"},next:{title:"completion",permalink:"/autogen/docs/reference/oai/completion"}},a={},l=[{value:"CohereClient",id:"cohereclient",level:2},{value:"__init__",id:"__init__",level:3},{value:"message_retrieval",id:"message_retrieval",level:3},{value:"get_usage",id:"get_usage",level:3},{value:"parse_params",id:"parse_params",level:3},{value:"oai_messages_to_cohere_messages",id:"oai_messages_to_cohere_messages",level:3},{value:"calculate_cohere_cost",id:"calculate_cohere_cost",level:3},{value:"CohereError",id:"cohereerror",level:2},{value:"CohereRateLimitError",id:"cohereratelimiterror",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Create an OpenAI-compatible client using Cohere's API."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Example"}),":"]}),"\n",(0,r.jsx)(s.p,{children:"llm_config={"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:'"config_list"'})," - [{"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:'"api_type"'}),' - "cohere",']}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:'"model"'}),' - "command-r-plus",']}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:'"api_key"'}),' - os.environ.get("COHERE_API_KEY")\n}\n]}']}),"\n",(0,r.jsx)(s.p,{children:'agent = autogen.AssistantAgent("my_agent", llm_config=llm_config)'}),"\n",(0,r.jsx)(s.p,{children:"Install Cohere's python library using: pip install --upgrade cohere"}),"\n",(0,r.jsx)(s.p,{children:"Resources:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://docs.cohere.com/reference/chat",children:"https://docs.cohere.com/reference/chat"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"cohereclient",children:"CohereClient"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"class CohereClient()\n"})}),"\n",(0,r.jsx)(s.p,{children:"Client for Cohere's API."}),"\n",(0,r.jsx)(s.h3,{id:"__init__",children:"__init__"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"def __init__(**kwargs)\n"})}),"\n",(0,r.jsx)(s.p,{children:"Requires api_key or environment variable to be set"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"api_key"})," ",(0,r.jsx)(s.em,{children:"str"})," - The API key for using Cohere (or environment variable COHERE_API_KEY needs to be set)"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"message_retrieval",children:"message_retrieval"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"def message_retrieval(response) -> List\n"})}),"\n",(0,r.jsx)(s.p,{children:"Retrieve and return a list of strings or a list of Choice.Message from the response."}),"\n",(0,r.jsx)(s.p,{children:"NOTE: if a list of Choice.Message is returned, it currently needs to contain the fields of OpenAI's ChatCompletion Message object,\nsince that is expected for function or tool calling in the rest of the codebase at the moment, unless a custom agent is being used."}),"\n",(0,r.jsx)(s.h3,{id:"get_usage",children:"get_usage"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"@staticmethod\ndef get_usage(response) -> Dict\n"})}),"\n",(0,r.jsx)(s.p,{children:"Return usage summary of the response using RESPONSE_USAGE_KEYS."}),"\n",(0,r.jsx)(s.h3,{id:"parse_params",children:"parse_params"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"def parse_params(params: Dict[str, Any]) -> Dict[str, Any]\n"})}),"\n",(0,r.jsx)(s.p,{children:"Loads the parameters for Cohere API from the passed in parameters and returns a validated set. Checks types, ranges, and sets defaults"}),"\n",(0,r.jsx)(s.h3,{id:"oai_messages_to_cohere_messages",children:"oai_messages_to_cohere_messages"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"def oai_messages_to_cohere_messages(\n        messages: list[Dict[str, Any]], params: Dict[str, Any],\n        cohere_params: Dict[str,\n                            Any]) -> tuple[list[dict[str, Any]], str, str]\n"})}),"\n",(0,r.jsx)(s.p,{children:"Convert messages from OAI format to Cohere's format.\nWe correct for any specific role orders and types."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"messages"})," - list[Dict[str, Any]]: AutoGen messages"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"params"})," - Dict[str, Any]:         AutoGen parameters dictionary"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"cohere_params"})," - Dict[str, Any]:  Cohere parameters dictionary"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,r.jsx)(s.p,{children:"List[Dict[str, Any]]:   Chat History messages"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"str"})," - Preamble (system message)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"str"})," - Message (the final user message)"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"calculate_cohere_cost",children:"calculate_cohere_cost"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"def calculate_cohere_cost(input_tokens: int, output_tokens: int,\n                          model: str) -> float\n"})}),"\n",(0,r.jsx)(s.p,{children:"Calculate the cost of the completion using the Cohere pricing."}),"\n",(0,r.jsx)(s.h2,{id:"cohereerror",children:"CohereError"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"class CohereError(Exception)\n"})}),"\n",(0,r.jsx)(s.p,{children:"Base class for other Cohere exceptions"}),"\n",(0,r.jsx)(s.h2,{id:"cohereratelimiterror",children:"CohereRateLimitError"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:"class CohereRateLimitError(CohereError)\n"})}),"\n",(0,r.jsx)(s.p,{children:"Raised when rate limit is exceeded"})]})}function d(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>c});var r=n(67294);const i={},t=r.createContext(i);function c(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);