(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/Shop.6ea276ab.png"},40:function(e,t,a){e.exports=a.p+"static/media/Treatyoself.6d066547.png"},42:function(e,t,a){e.exports=a.p+"static/media/Payment.1d08e25a.png"},43:function(e,t,a){e.exports=a(71)},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),l=a.n(c),o=(a(23),a(2)),i=a.n(o),s=a(10),u=a(11),m=a(3),p=a.n(m),d=a(1),h=a(16),f=a(4),g=a(5),b=a(7),E=a(6),v=a(8),y="http://nameless-caverns-26248.herokuapp.com",O=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],loading:!0},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.findAll()}},{key:"findAll",value:function(){var e=Object(s.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("".concat(y,"/api/products/"));case 3:t=e.sent,this.setState({products:t.data.products,loading:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({error:e.t0,loading:!1});case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.products,a=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"All Products here:"),r.a.createElement("div",{className:"productGrid"},a?r.a.createElement("h2",null,"Product Loading"):t.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(d.c,{to:"/product/".concat(e._id)},r.a.createElement("img",{className:"allProducts",src:e.image,alt:"product"}),r.a.createElement("h3",null,e.name),e.price," \u20ac"),r.a.createElement("p",null))})))}}]),t}(r.a.Component),w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null))},j=a(19);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var k=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),m=Object(u.a)(o,2),d=m[0],h=m[1],f=function(){var t=Object(s.a)(i.a.mark(function t(a){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,p.a.post("".concat(y,"/admin/login"),{email:c.email,password:c.password});case 4:n=t.sent,h(n.data.message),n.data.ok&&setTimeout(function(){e.login(n.data.token),e.history.push("/secret-page")},2e3),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(1);case 11:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:f,onChange:function(e){l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach(function(t){Object(j.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},c,Object(j.a)({},e.target.name,e.target.value)))},className:"form_container shortComp"},r.a.createElement("h1",null,"Login here:"),r.a.createElement("label",null,"Email"),r.a.createElement("input",{name:"email"}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",type:"password"}),r.a.createElement("button",null,"login"),r.a.createElement("div",{className:"message"},r.a.createElement("h4",null,d))))};function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var N=function(e){var t=Object(n.useState)({email:"",password:"",password2:""}),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),m=Object(u.a)(o,2),d=m[0],h=m[1],f=function(){var t=Object(s.a)(i.a.mark(function t(a){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,p.a.post("".concat(y,"/admin/register"),{email:c.email,password:c.password,password2:c.password2});case 4:n=t.sent,h(n.data.message),n.data.ok&&setTimeout(function(){e.history.push("/login")},2e3),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(1);case 11:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:f,onChange:function(e){l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach(function(t){Object(j.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},c,Object(j.a)({},e.target.name,e.target.value)))},className:"form_container shortComp"},r.a.createElement("h1",null,"Register"),r.a.createElement("label",null,"Email"),r.a.createElement("input",{name:"email"}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",type:"password"}),r.a.createElement("label",null,"Repeat password"),r.a.createElement("input",{name:"password2",type:"password"}),r.a.createElement("button",null,"register"),r.a.createElement("div",{className:"message"},r.a.createElement("h4",null,d)))},C=function(e){return r.a.createElement("div",{className:"secret_page shortComp"},r.a.createElement("h1",null,"This is the admin page"),r.a.createElement("h3",null,r.a.createElement(d.b,{to:"/products/add"},"Add New Product")),r.a.createElement("h3",null,r.a.createElement(d.b,{to:"/products/update"},"Update Product")," "),r.a.createElement("h3",null,r.a.createElement(d.b,{to:"/products/delete/product_id"},"Delete Product")),r.a.createElement("button",{onClick:function(){e.history.push("/"),e.logout()}},"logout"))},P=function(e){function t(e){return Object(f.a)(this,t),Object(b.a)(this,Object(E.a)(t).call(this,e))}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement(d.c,{exact:!0,style:I.default,activeStyle:I.active,to:"/"},r.a.createElement("h1",null,"Treat yo self store")),r.a.createElement(d.c,{exact:!0,style:I.default,activeStyle:I.active,to:"/about"},"About us"),r.a.createElement(d.c,{exact:!0,style:I.default,activeStyle:I.active,to:"/products"},"Products"),r.a.createElement(d.c,{exact:!0,style:I.default,activeStyle:I.active,to:"/cart"},r.a.createElement("i",{className:"fas fa-shopping-cart"})," ",r.a.createElement("span",null),"Cart ",this.props.counter))}}]),t}(r.a.Component),I={active:{color:"#e99f4c"},default:{textDecoration:"none",color:"#264143",fontSize:"90%"}},D=function(e){var t=e.isLoggedIn;return r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement("p",null,"Have a question?"),r.a.createElement(d.c,{exact:!0,style:A.bolder,activeStyle:A.active,to:"/contact"},"Contact us")),r.a.createElement("div",null,r.a.createElement("p",null,"Copyright \xa9 2021 \u2014 Web Cosmetics | Treat yo self!"),r.a.createElement("i",{className:"fab fa-facebook"}),r.a.createElement("span",null,"    "),r.a.createElement("i",{className:"fab fa-twitter"}),r.a.createElement("span",null,"    "),r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(d.c,{exact:!0,style:A.default,activeStyle:A.active,to:"/secret-page"},"Admin Page")),t?null:[r.a.createElement(d.c,{exact:!0,style:A.default,activeStyle:A.active,to:"/register"},"Register -"),r.a.createElement(d.c,{exact:!0,style:A.default,activeStyle:A.active,to:"/login"},"Login")]))},A={active:{color:"#e99f4c"},default:{textDecoration:"none",color:"#eddcd9"},bolder:{textDecoration:"none",color:"#eddcd9",fontWeight:"bold",fontSize:"1em"}},T=a(39),U=a.n(T),_=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"about"},r.a.createElement("div",null,r.a.createElement("div",{className:"textAlign"},r.a.createElement("h1",null,"The act of treating ones self to something that relaxes them or that they enjoy"),r.a.createElement("h3",null,"Three words for you: Treat. Yo. Self."),r.a.createElement("p",null," A term that originated in popular NBC television show Parks and Recreation, when Tom and Donna two financially self destructive adults that work in the Parks and Rec. Department of Pawnee, Indiana decide to spend an entire day pampering and spoiling themselves. However in the process end up destroying their bank accounts. "),r.a.createElement("p",null,'"Once a year Donna and I spend a day treating ourselves. What do we treat ourselves to?" "Clothes". "Treat Yo Self". "Fragrances". "Treat Yo Self". "Massages". "Treat Yo Self". "Mimosas." "Treat Yo Self" "Fine leather goods" "Treat Yo Self"'),r.a.createElement("p",{style:q.font},"Do you have any doubs? ",r.a.createElement(d.c,{style:q.link,to:"/contact"},"Contact us!")," "))),r.a.createElement("img",{id:"aboutImg",src:U.a,alt:"girl with shopping cart"})))},q={font:{fontFamily:"Abril Fatface",fontSize:"25px"},link:{textDecoration:"underline"}},J=a(40),F=a.n(J),Y=function(){return r.a.createElement("div",{style:M.height,className:"frontPage"},r.a.createElement("img",{src:F.a,alt:"shopping-from-home"}),r.a.createElement("div",{className:"blockquote-wrapper"},r.a.createElement("div",{className:"blockquote"},r.a.createElement("h1",null," Three words for you:",r.a.createElement("span",{style:M.trial},"Treat yo self"),"."),r.a.createElement("h4",null,r.a.createElement("em",null,"This web project was made with React, React Hooks, Axios, Express, MongoDB, Local Storage and Stripe.")))))},M={trial:{color:"#e99f4c"},height:{paddingBottom:"0px"}},z=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",image:"",description:"",price:"",stock:""},a.handleName=function(e){a.setState({name:e.target.value})},a.handleImage=function(e){a.setState({image:e.target.value})},a.handleDesc=function(e){a.setState({description:e.target.value})},a.handlePrice=function(e){a.setState({price:e.target.value})},a.handleStock=function(e){a.setState({stock:e.target.value})},a.handleSubmit=function(){var e=Object(s.a)(i.a.mark(function e(t){var n,r,c,l,o,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.name,c=n.image,l=n.description,o=n.price,s=n.stock,e.prev=2,e.next=5,p.a.post("".concat(y,"/api/products/add"),{name:r,image:c,description:l,price:o,stock:s});case 5:e.sent,a.setState({name:"",image:"",description:"",price:"",stock:""}),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:window.location="/products";case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"shortComp"},r.a.createElement("h1",null,"Add a new product!"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",onChange:this.handleName,name:"name",placeholder:"Product name"}),r.a.createElement("input",{type:"url",onChange:this.handleImage,name:"image",placeholder:"Image URL"}),r.a.createElement("input",{type:"text",onChange:this.handleDesc,name:"description",placeholder:"Description"}),r.a.createElement("input",{type:"number",onChange:this.handlePrice,name:"price",min:"0",placeholder:"Price"}),r.a.createElement("input",{type:"number",onChange:this.handleStock,name:"stock",min:"0",placeholder:"Stock Available"}),r.a.createElement("button",null,"Add!")))}}]),t}(r.a.Component),L=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={id:""},a.handleChange=function(e){a.setState({id:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),p.a.delete("".concat(y,"/api/products/delete/").concat(a.state.id)).then(function(e){}),window.location="/products"},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"shortComp"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Product ID:",r.a.createElement("input",{type:"text",name:"id",onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Delete!"))),r.a.createElement(d.c,{to:"/products/"},"Back to products"))}}]),t}(r.a.Component),B=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={_id:"",name:"",image:"",description:"",price:"",stock:""},a.handleChange=function(e){a.setState({_id:e.target.value})},a.handleName=function(e){a.setState({name:e.target.value})},a.handleImage=function(e){a.setState({image:e.target.value})},a.handleDesc=function(e){a.setState({description:e.target.value})},a.handlePrice=function(e){a.setState({price:e.target.value})},a.handleStock=function(e){a.setState({stock:e.target.value})},a.handleSubmit=function(){var e=Object(s.a)(i.a.mark(function e(t){var n,r,c,l,o,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.name,c=n.image,l=n.description,o=n.price,s=n.stock,e.prev=2,e.next=5,p.a.post("".concat(y,"/api/products/update"),{_id:a.state._id,nameUp:r,imageUp:c,descUp:l,priceUp:o,stockUp:s});case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:window.location="/products";case 10:case"end":return e.stop()}},e,null,[[2,7]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"shortComp"},r.a.createElement("h1",null,"Update a product:"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"id",onChange:this.handleChange,placeholder:"product id"}),r.a.createElement("input",{type:"text",onChange:this.handleName,name:"name",placeholder:"New Product Name"}),r.a.createElement("input",{type:"url",onChange:this.handleImage,name:"image",placeholder:"New Image (URL)"}),r.a.createElement("input",{type:"text",onChange:this.handleDesc,name:"description",placeholder:"New Description"}),r.a.createElement("input",{type:"number",onChange:this.handlePrice,name:"price",min:"0",placeholder:"New Price"}),r.a.createElement("input",{type:"number",onChange:this.handleStock,name:"stock",min:"0",placeholder:"New Stock"}),r.a.createElement("button",null,"Update it!")))}}]),t}(r.a.Component),R=a(21),W=function(e){var t=Object(n.useState)(JSON.parse(localStorage.getItem("cart")||"[]")),a=Object(u.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)(function(){var e=localStorage.getItem("shopping-cart");e&&l(JSON.parse(e))},[]),Object(n.useEffect)(function(){localStorage.setItem("shopping-cart",JSON.stringify(c));var t=c.length;localStorage.setItem("count",JSON.stringify(t)),e.setCounter(t)}),r.a.createElement("div",{className:"addtocart"},r.a.createElement("button",{onClick:function(){var t=!1,a=!0,n=!1,r=void 0;try{for(var o,i=c[Symbol.iterator]();!(a=(o=i.next()).done);a=!0)o.value.name===e.name&&(t=!0,alert("Item is already in the cart! If you want to purchase more than one, you can change the quantity on the check-out."))}catch(s){n=!0,r=s}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}!1===t&&l([{name:e.name,id:e._id,price:e.price,image:e.image,description:e.description,stock:e.stock}].concat(Object(R.a)(c)))}},"Add to cart! ",r.a.createElement("i",{className:"fas fa-cart-plus"})))},H=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={product:""},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.findOne()}},{key:"findOne",value:function(){var e=Object(s.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("".concat(y,"/api/products/")+this.props.match.params.id);case 3:t=e.sent,this.setState({product:t.data.product}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({error:e.t0});case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.product;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid2"},r.a.createElement("div",null,r.a.createElement("img",{className:"oneProduct",src:e.image,alt:"product"})),r.a.createElement("div",{className:"descrip"},r.a.createElement("h1",null,e.name),r.a.createElement("p",null,e.description),r.a.createElement("p",null,e.price,"\u20ac"),r.a.createElement(W,{_id:e._id,name:e.name,price:e.price,image:e.image,description:e.description,stock:e.stock,setCounter:this.props.setCounter}))))}}]),t}(r.a.Component),G=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"EmptyCart"},r.a.createElement("h2",null,"Your cart is currently empty ",r.a.createElement("span",{role:"img","aria-label":"sadface"},"\ud83e\udd7a")),r.a.createElement("h4",null,"Check-out our products ",r.a.createElement(d.c,{to:"/products/"},"here")))}}]),t}(r.a.Component),K=function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this,t=0,a=[];return r.a.createElement("div",null," ",this.props.items.map(function(n,r){var c=e.props.quantity[r];return c=void 0===c?"1":c.quantity,t+=e.props.items[r].price*c,a.push([e.props.items[r],c]),localStorage.setItem("amount",t),null}),0===t?r.a.createElement(G,null):r.a.createElement("div",null,r.a.createElement("h2",{className:"clear"},"Cart Total: ",t.toFixed(2),"\u20ac "),r.a.createElement(d.b,{to:{pathname:"/payment",state:{stockUpdate:a}}},r.a.createElement("button",{className:"payUs bigger"},"Proceed to checkout"))))}}]),t}(r.a.Component),Q=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={cart:JSON.parse(localStorage.getItem("shopping-cart"))||[],quantity:""},a.clearCart=function(){localStorage.setItem("shopping-cart",JSON.stringify([])),window.location="/cart",localStorage.setItem("amount",JSON.stringify(0)),localStorage.setItem("count",JSON.stringify(0))},a.handleChange=function(e,t){var n=e.target.value;a.setState(function(e){var a=Object(R.a)(e.quantity);return a[t]={quantity:n},{quantity:a}})},a}return Object(v.a)(t,e),Object(g.a)(t,[{key:"deleteItem",value:function(e){this.setState(function(t){return{cart:t.cart.filter(function(t,a){return a!==e})}});var t=[];(t=JSON.parse(localStorage.getItem("shopping-cart"))).splice(e,1),localStorage.setItem("shopping-cart",JSON.stringify(t)),window.location.reload();var a=localStorage.getItem("count")-1;localStorage.setItem("count",JSON.stringify(a))}},{key:"render",value:function(){var e=this;return 0===this.state.cart.length?r.a.createElement(G,null):r.a.createElement("div",{className:"shopCart"},r.a.createElement("h1",null,"Shopping cart:"),r.a.createElement("h3",null,"You selected really nice items. Now it's time to check out your order below:"),r.a.createElement("div",{className:"items"}," ",this.state.cart.map(function(t,a){return r.a.createElement("div",{className:"item",key:a},r.a.createElement("div",{style:X.container},r.a.createElement("h3",null,t.name),r.a.createElement("button",{className:"delete",onClick:function(){e.deleteItem(a)}},r.a.createElement("i",{className:"far fa-trash-alt"}))),r.a.createElement("img",{className:"imgcart",src:t.image,alt:"nice_cosmetics"}),r.a.createElement("div",{style:X.container.price},r.a.createElement("div",{className:"price"},"Price: ",t.price,"\u20ac"),r.a.createElement("div",null,r.a.createElement("input",{style:X.input,placeholder:"Qty",onChange:function(t){return e.handleChange(t,a)},type:"number",min:"1",step:"1",size:"4"})," ")))})),r.a.createElement(K,{items:this.state.cart,quantity:this.state.quantity}),r.a.createElement("div",{className:"clear"},r.a.createElement("button",{className:"delete",onClick:this.clearCart},"Clear cart!")))}}]),t}(r.a.Component),X={input:{width:"4em",height:"3vh",fontFamily:"Merriweather"},container:{display:"flex",justifyContent:"center",alignItems:"center",price:{display:"flex",alignItems:"center",justifyContent:"space-evenly"}}},V=a(41),Z=a(17),$=a(42),ee=a.n($),te=function(e){var t=e,a=Object.entries(t),c=!1,l=Object(n.useState)(""),o=Object(u.a)(l,2),m=o[0],d=o[1],h=Object(n.useState)(""),f=Object(u.a)(h,2),g=f[0],b=f[1],E=Object(Z.useStripe)(),v=Object(Z.useElements)(),O=function(){var e=Object(s.a)(i.a.mark(function e(t){var a,n,r,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.post("".concat(y,"/emails/send_email"),{name:m.name,email:g.email});case 4:e.sent,b({email:""}),d({name:""}),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:return e.next=13,E.createPaymentMethod({type:"card",card:v.getElement(Z.CardElement)});case 13:if(a=e.sent,n=a.error,r=a.paymentMethod,n){e.next=29;break}return e.prev=17,l=r.id,e.next=21,p.a.post("".concat(y,"/payment/charge"),{id:l,amount:localStorage.getItem("amount")});case 21:e.sent.data.success&&(localStorage.setItem("amount",JSON.stringify(0)),localStorage.setItem("count",JSON.stringify(0)),localStorage.setItem("shopping-cart",JSON.stringify([])),c=!0,window.location="/payment/success",w()),e.next=27;break;case 25:e.prev=25,e.t1=e.catch(17);case 27:e.next=30;break;case 29:window.location="/payment/error";case 30:case"end":return e.stop()}},e,null,[[1,9],[17,25]])}));return function(t){return e.apply(this,arguments)}}(),w=function(){if(!0===c){var e="",t="",n="",r="",l="",o="";a.forEach(function(a){var c=Object(u.a)(a,2),m=(c[0],c[1]);m.stockUpdate.forEach(function(a){var c=Object(u.a)(a,2),m=c[0],d=c[1];e=m.id,t=m.name,n=m.image,r=m.description,l=m.price,o=m.stock-d,function(){var a=Object(s.a)(i.a.mark(function a(){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,p.a.post("".concat(y,"/api/products/update"),{_id:e,nameUp:t,imageUp:n,descUp:r,priceUp:l,stockUp:o});case 3:a.next=7;break;case 5:a.prev=5,a.t0=a.catch(0);case 7:case"end":return a.stop()}},a,null,[[0,5]])}));return function(){return a.apply(this,arguments)}}()()})})}};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Complete your payment here"),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{className:"payImg",src:ee.a,alt:"online-payment"})),r.a.createElement("form",{className:"checkout_container",onSubmit:O},r.a.createElement("div",{style:ae.form},r.a.createElement("input",{style:ae.input,placeholder:"Please enter your name",type:"text",size:"30",required:!0,onChange:function(e){d({name:e.target.value})}}),r.a.createElement("input",{style:ae.input,placeholder:"Please enter your e-mail here to complete the order",type:"email",id:"email",size:"30",required:!0,onChange:function(e){b({email:e.target.value})}})),r.a.createElement(Z.CardElement,null),r.a.createElement("button",{className:"payUs bigger"},"Pay ",localStorage.getItem("amount"),"\u20ac"))))},ae={input:{display:"flex",alignItems:"left",width:"100%",background:"transparent",border:"none",fontSize:"90%",alignText:"center"},form:{display:"flex",alignItems:"center",justifyContent:"space-evenly"}},ne=Object(V.a)("pk_test_51IG1VOEezwxOFQkNsF7mQG99GvZ7NzWxzVprkT35YvKrMAg1wKrTYSBNM5nmgaXCf1D4HxkLsinewnu2nlKXAbdX00UbaGajE5"),re=function(e){var t=e.location.state;return r.a.createElement("div",null,r.a.createElement(Z.Elements,{stripe:ne},r.a.createElement(te,{stockUpdate:t})))},ce=function(e){return r.a.createElement("div",{className:"paymentFail"},r.a.createElement("h1",null,"Oops! Something went wrong with your payment. ",r.a.createElement("span",{role:"img","aria-label":"scareeface"},"\ud83d\ude30")),r.a.createElement("p",null,"We regret to inform that your payment has been declined."))},le=function(e){return r.a.createElement("div",{className:"paymentSuccess"},r.a.createElement("h1",null,"Your payment has been succesfully made!",r.a.createElement("span",{role:"img","aria-label":"party"},"\ud83e\udd73")),r.a.createElement("p",null,"Please check your e-mail for more information. Your order will be sent to you in a few working days!"))},oe=function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(b.a)(this,Object(E.a)(t).call(this))).state={title:"How can we help?"},e}return Object(v.a)(t,e),Object(g.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target.elements.name,a=e.target.elements.email,n=e.target.elements.message,r=e.target.elements.subject,c={name:t.value,email:a.value,message:n.value,subject:r.value};p.a.post("".concat(y,"/emails/contact"),c).then(function(e){t.value=" ",a.value=" ",n.value=" ",r.value=" ",alert("Your e-mail has been received. We will reply shortly. Thanks!")}).catch(function(e){})}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:"80vh"}},r.a.createElement("h1",null,this.props.title||this.state.title),r.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},r.a.createElement("input",{style:ie.form,required:!0,type:"text",placeholder:"Subject",name:"subject"}),r.a.createElement("textArea",{required:!0,style:{border:"1px solid grey",width:"50%",paddingTop:".5em",paddingLeft:"0.5em",display:"block",margin:"0 auto",minHeight:"20vh",marginBottom:"1em",fontFamily:"Merriweather"},placeholder:"Please write your message",name:"message"}),r.a.createElement("input",{required:!0,style:ie.form,type:"text",placeholder:"What is your name?",name:"name"}),r.a.createElement("input",{required:!0,style:ie.form,type:"email",placeholder:"Your contact email?",name:"email"}),r.a.createElement("button",{type:"submit",label:"Send"},"Send!")))}}]),t}(r.a.Component),ie={form:{border:"1px solid grey",width:"50%",display:"block",margin:"0 auto",marginBottom:"1em",fontFamily:"Merriweather"}};var se=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(localStorage.getItem("count")),o=Object(u.a)(l,2),m=o[0],f=o[1],g=JSON.parse(localStorage.getItem("token")),b=function(){var e=Object(s.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==g){e.next=2;break}return e.abrupt("return",c(!1));case 2:return e.prev=2,p.a.defaults.headers.common.Authorization=g,e.next=6,p.a.post("".concat(y,"/admin/verify_token"));case 6:return t=e.sent,e.abrupt("return",t.data.ok?c(!0):c(!1));case 10:e.prev=10,e.t0=e.catch(2);case 12:case"end":return e.stop()}},e,null,[[2,10]])}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){b()},[]);var E=function(e){localStorage.setItem("token",JSON.stringify(e)),c(!0)},v=function(){localStorage.removeItem("token"),c(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(h.b,{path:"/",render:function(e){return r.a.createElement(P,Object.assign({counter:m},e))}}),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:Y})),r.a.createElement(h.b,{exact:!0,path:"/",component:w}),r.a.createElement(h.b,{exact:!0,path:"/about",component:_}),r.a.createElement(h.b,{exact:!0,path:"/login",render:function(e){return a?r.a.createElement(h.a,{to:"/secret-page"}):r.a.createElement(k,Object.assign({login:E},e))}}),r.a.createElement(h.b,{path:"/register",render:function(e){return a?r.a.createElement(h.a,{to:"/secret-page"}):r.a.createElement(N,e)}}),r.a.createElement(h.b,{path:"/secret-page",render:function(e){return a?r.a.createElement(C,Object.assign({logout:v},e)):r.a.createElement(h.a,{to:"/"})}}),r.a.createElement(h.b,{exact:!0,path:"/products",component:O}),r.a.createElement(h.b,{exact:!0,path:"/product/:id",render:function(e){return r.a.createElement(H,Object.assign({},e,{setCounter:f}))}}),r.a.createElement(h.b,{exact:!0,path:"/products/add",component:z}),r.a.createElement(h.b,{exact:!0,path:"/products/delete/:id",component:L}),r.a.createElement(h.b,{exact:!0,path:"/products/update",component:B}),r.a.createElement(h.b,{exact:!0,path:"/cart",component:Q}),r.a.createElement(h.b,{exact:!0,path:"/payment",component:re}),r.a.createElement(h.b,{exact:!0,path:"/payment/success",render:function(e){return r.a.createElement(le,e)}}),r.a.createElement(h.b,{exact:!0,path:"/payment/error",render:function(e){return r.a.createElement(ce,e)}}),r.a.createElement(h.b,{exact:!0,path:"/contact",component:oe}),r.a.createElement(D,{isLoggedIn:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.4eb78908.chunk.js.map