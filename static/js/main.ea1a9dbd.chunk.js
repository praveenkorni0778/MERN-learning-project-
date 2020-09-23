(this["webpackJsonpmern-exercise-tracker"]=this["webpackJsonpmern-exercise-tracker"]||[]).push([[0],{162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(33),l=a.n(s),i=a(23),c=a(6),o=(a(84),a(16)),u=a(17),m=a(19),h=a(18),d=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},r.a.createElement(i.b,{to:"/",className:"navbar-brand"},"Exercise Tracker"),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav  mr-auto"},r.a.createElement("li",{className:"navbar-item"},r.a.createElement(i.b,{to:"/",className:"nav-link"},"Exercises")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(i.b,{to:"/create",className:"nav-link"},"Create Exercise Log")),r.a.createElement("li",{className:"navbar-item"},r.a.createElement(i.b,{to:"/user",className:"nav-link"},"Create User")))))}}]),a}(n.Component),p=a(7),b=a(12),E=a.n(b),v=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.exercise.username),r.a.createElement("td",null,e.exercise.description),r.a.createElement("td",null,e.exercise.duration),r.a.createElement("td",null,e.exercise.date.substring(0,10)),r.a.createElement("td",null,r.a.createElement(i.b,{to:"/edit/"+e.exercise._id},"edit")," | ",r.a.createElement("a",{href:"#",onClick:function(){e.deleteExercise(e.exercise._id)}},"delete")))},g=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).deleteExercise=n.deleteExercise.bind(Object(p.a)(n)),n.state={exercises:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://localhost:5000/exercises/").then((function(t){e.setState({exercises:t.data})})).catch((function(e){console.log(e)}))}},{key:"deleteExercise",value:function(e){E.a.delete("http://localhost:5000/exercises/"+e).then((function(e){return console.log(e.data)})),this.setState({exercises:this.state.exercises.filter((function(t){return t._id!==e}))})}},{key:"exerciseList",value:function(){var e=this;return this.state.exercises.map((function(t){return r.a.createElement(v,{exercise:t,deleteExercise:e.deleteExercise,key:t._id})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Logged Exercises"),r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Duration"),r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,this.exerciseList())))}}]),a}(n.Component),f=a(36),C=a.n(f),x=(a(66),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(p.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(p.a)(n)),n.onChangeDuration=n.onChangeDuration.bind(Object(p.a)(n)),n.onChangeDate=n.onChangeDate.bind(Object(p.a)(n)),n.onSubmit=n.onSubmit.bind(Object(p.a)(n)),n.state={username:"",description:"",duration:0,date:new Date,users:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://localhost:5000/exercises/"+this.props.match.params.id).then((function(t){e.setState({username:t.data.username,description:t.data.description,duration:t.data.duration,date:new Date(t.data.date)})})).catch((function(e){console.log(e)})),E.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username}))})}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),E.a.post("http://localhost:5000/exercises/update"+this.props.match.params.id,t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Edit Exercise Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username:"),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e," ")})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description:"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in minutes):"),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date:"),r.a.createElement("div",null,r.a.createElement(C.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Edit Exercise Log",className:"btn btn-primary"}))))}}]),a}(n.Component)),D=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(p.a)(n)),n.onChangeDescription=n.onChangeDescription.bind(Object(p.a)(n)),n.onChangeDuration=n.onChangeDuration.bind(Object(p.a)(n)),n.onChangeDate=n.onChangeDate.bind(Object(p.a)(n)),n.onSubmit=n.onSubmit.bind(Object(p.a)(n)),n.state={username:"",description:"",duration:0,date:new Date,users:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://localhost:5000/users/").then((function(t){t.data.length>0&&e.setState({users:t.data.map((function(e){return e.username})),username:t.data[0].username})}))}},{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeDuration",value:function(e){this.setState({duration:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,description:this.state.description,duration:this.state.duration,date:this.state.date};console.log(t),E.a.post("http://localhost:5000/exercises/add",t).then((function(e){return console.log(e.data)})),window.location="/"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Create New Exercise Log"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username:"),r.a.createElement("select",{ref:"userInput",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername},this.state.users.map((function(e){return r.a.createElement("option",{key:e,value:e},e," ")})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description:"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.description,onChange:this.onChangeDescription})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Duration (in minutes):"),r.a.createElement("input",{type:"text",className:"form-control",value:this.state.duration,onChange:this.onChangeDuration})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date:"),r.a.createElement("div",null,r.a.createElement(C.a,{selected:this.state.date,onChange:this.onChangeDate}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create Exercise Log",className:"btn btn-primary"}))))}}]),a}(n.Component),y=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(p.a)(n)),n.onSubmit=n.onSubmit.bind(Object(p.a)(n)),n.state={username:""},n}return Object(u.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username};console.log(t),E.a.post("http://localhost:5000/users/add",t).then((function(e){return console.log(e.data)})),this.setState({username:""})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"You are on the Create User Component"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Create User",className:"btn btn-primary"}))))}}]),a}(n.Component);var k=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(d,null),r.a.createElement("br",null),r.a.createElement(c.a,{path:"/",exact:!0,component:g}),r.a.createElement(c.a,{path:"/edit/:id",component:x}),r.a.createElement(c.a,{path:"/create",component:D}),r.a.createElement(c.a,{path:"/user",component:y})))};l.a.render(r.a.createElement(k,null),document.getElementById("root"))},79:function(e,t,a){e.exports=a(162)}},[[79,1,2]]]);
//# sourceMappingURL=main.ea1a9dbd.chunk.js.map