(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,a,t){"use strict";t.r(a);var o=t(0),l=t.n(o),i=t(3),n=t.n(i),r=t(4),c=t.n(r);t(14);function m(e,a){var t=document.createElement("canvas"),o=t.getContext("2d");return t.width=a,t.height=a,o.fillStyle="#FFFFFF",o.fillRect(0,0,a,a),o.font=Math.floor(a/2)+"px Arial",o.textAlign="center",o.textBaseline="middle",o.fillStyle="#FF0000",o.fillText(e.charAt(0).toUpperCase(),a/2,a/2),o.beginPath(),o.arc(a/2,a/2,a/2,0,2*Math.PI),t.toDataURL()}var s=function(e){return l.a.createElement("div",{className:"jobCard",dir:"rtl"},l.a.createElement("div",{className:"logoTableColumn"},e.cardShowLogo?l.a.createElement("img",{className:"companyLogo",src:e.companyLogo,alt:"Company Logo"}):l.a.createElement("img",{className:"companyLogo",src:m(e.companyName,100),alt:"Company Logo"})),l.a.createElement("div",{className:"CompanyNameAndJobTitleContainer"},l.a.createElement("p",{className:"jobTitle"},e.jobTitle),l.a.createElement("p",{className:"companyName"},e.companyName),l.a.createElement("div",{className:"locationAndSalaryContainer"},null!==e.jobSalary?l.a.createElement("p",{className:"salary",dir:"rtl"},l.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udcb0 "),e.jobSalary):null,l.a.createElement("p",{className:"jobLocation"},l.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83c\udf0f "),e.jobLocation))),l.a.createElement("div",{className:"filterTags"},l.a.createElement("p",{className:"filter1"},e.filter1),null!==e.filter2?l.a.createElement("p",{className:"filter2"},e.filter2):null),l.a.createElement("div",{className:"ApplyButtonTableColumn"},l.a.createElement("div",{className:"applyButton"},"\u062a\u0642\u062f\u064a\u0645")),l.a.createElement("div",{className:"timePosted"},l.a.createElement(c.a,{fromNow:!0,ago:!0},e.timePosted)),e.cardFixed>0?l.a.createElement("span",{className:"pin",role:"img","aria-label":"emoji"},"\ud83d\udccc"):null)};var p=function(){return l.a.createElement("div",{className:"search-container",dir:"rtl"},l.a.createElement("form",null,l.a.createElement("input",{type:"text",placeholder:"\u0627\u0628\u062d\u062b \u0628\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064a\u0641\u064a..."}),l.a.createElement("button",{type:"submit"},l.a.createElement("i",{class:"fas fa-search"}))),l.a.createElement("div",{className:"filter-container"},l.a.createElement("div",{className:"filter"},l.a.createElement("select",null,l.a.createElement("option",{value:"\u0643\u0644 \u0627\u0644\u0645\u0646\u0627\u0637\u0642"},"\u0643\u0644 \u0627\u0644\u0645\u0646\u0627\u0637\u0642"),l.a.createElement("option",{value:"\u0627\u0644\u0631\u064a\u0627\u0636"},"\u0627\u0644\u0631\u064a\u0627\u0636"),l.a.createElement("option",{value:"\u0645\u0643\u0629 \u0627\u0644\u0645\u0643\u0631\u0645\u0629"},"\u0645\u0643\u0629 \u0627\u0644\u0645\u0643\u0631\u0645\u0629"),l.a.createElement("option",{value:"\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0634\u0631\u0642\u064a\u0629"},"\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0634\u0631\u0642\u064a\u0629"))),l.a.createElement("div",{className:"filter"},l.a.createElement("select",null,l.a.createElement("option",{value:""},"\u0643\u0644 \u0627\u0644\u0648\u0638\u0627\u0626\u0641"),l.a.createElement("option",{value:"full-time"},"\u0637\u0627\u0647\u064a/\u0634\u064a\u0641"),l.a.createElement("option",{value:"part-time"},"\u0645\u062f\u064a\u0631 \u062a\u0634\u063a\u064a\u0644"),l.a.createElement("option",{value:"freelance"},"\u0628\u0627\u0631\u064a\u0633\u062a\u0627")))))},g=[{jobTitle:"\u0637\u0628\u0627\u062e \u062e\u0628\u064a\u0631",companyName:"\u0645\u0637\u0627\u0639\u0645 \u0645\u0627\u0643\u062f\u0648\u0646\u0644\u062f\u0632",companyLogo:"https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",location:"\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0634\u0631\u0642\u064a\u0629",salary:"100k-150k",filter1:"\u0637\u0628\u0627\u062e",filter2:"\u0641\u0627\u064a\u0646 \u062f\u0627\u064a\u0646\u0646\u0642",cardOptions:{fixed:7,highlight:!1,showLogo:!0},timePosted:"2023-02-27T12:59-0500"},{jobTitle:"Opration Manager",companyName:"Rabbit Restaurant",companyLogo:"https://img.freepik.com/premium-vector/rabbit-cartoon-logo-design-vector-illustration_256145-308.jpg?w=2000",location:"Makka",salary:"100k-150k",filter1:"Manager",filter2:"Fast Food",cardOptions:{fixed:1,highlight:!0,showLogo:!0},timePosted:"2023-02-27T12:59-0500"},{jobTitle:"Barista",companyName:"Starbucks Coffee",companyLogo:"https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png",location:"Madina",salary:null,filter1:"Barista",filter2:"Drive Thru",cardOptions:{fixed:30,highlight:!1,showLogo:!1},timePosted:"2023-02-27T12:59-0500"},{jobTitle:"\u0637\u0628\u0627\u062e \u062e\u0628\u064a\u0631",companyName:"\u0645\u0637\u0627\u0639\u0645 \u0645\u0627\u0643\u062f\u0648\u0646\u0644\u062f\u0632",companyLogo:"https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",location:"\u0627\u0644\u0631\u064a\u0627\u0636",salary:"100k-150k",filter1:"\u0637\u0628\u0627\u062e",filter2:"\u0641\u0627\u064a\u0646 \u062f\u0627\u064a\u0646\u0646\u0642",cardOptions:{fixed:0,highlight:!1,showLogo:!0},timePosted:"2023-02-27T12:59-0500"},{jobTitle:"\u0637\u0628\u0627\u062e \u062e\u0628\u064a\u0631",companyName:"\u0645\u0637\u0627\u0639\u0645 \u0645\u0627\u0643\u062f\u0648\u0646\u0644\u062f\u0632",companyLogo:"https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",location:"\u0627\u0644\u0631\u064a\u0627\u0636",salary:"100k-150k",filter1:"\u0637\u0628\u0627\u062e",filter2:"\u0641\u0627\u064a\u0646 \u062f\u0627\u064a\u0646\u0646\u0642",cardOptions:{fixed:0,highlight:!1,showLogo:!0},timePosted:"2023-02-27T12:59-0500"},{jobTitle:"\u0637\u0628\u0627\u062e \u062e\u0628\u064a\u0631",companyName:"\u0645\u0637\u0627\u0639\u0645 \u0645\u0627\u0643\u062f\u0648\u0646\u0644\u062f\u0632",companyLogo:"https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",location:"\u0627\u0644\u0631\u064a\u0627\u0636",salary:null,filter1:"\u0637\u0628\u0627\u062e",filter2:"\u0641\u0627\u064a\u0646 \u062f\u0627\u064a\u0646\u0646\u0642",cardOptions:{fixed:0,highlight:!1,showLogo:!0},timePosted:"2023-02-27T12:59-0500"},{jobTitle:"\u0637\u0628\u0627\u062e \u062e\u0628\u064a\u0631",companyName:"\u0645\u0637\u0627\u0639\u0645 \u0645\u0627\u0643\u062f\u0648\u0646\u0644\u062f\u0632",companyLogo:"https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",location:"\u0627\u0644\u0631\u064a\u0627\u0636",salary:"100k-150k",filter1:"\u0637\u0628\u0627\u062e",filter2:"\u0641\u0627\u064a\u0646 \u062f\u0627\u064a\u0646\u0646\u0642",cardOptions:{fixed:0,highlight:!1,showLogo:!0},timePosted:"2023-02-27T12:59-0500"},{jobTitle:"\u0637\u0628\u0627\u062e \u062e\u0628\u064a\u0631",companyName:"\u0645\u0637\u0627\u0639\u0645 \u0645\u0627\u0643\u062f\u0648\u0646\u0644\u062f\u0632",companyLogo:"https://pbs.twimg.com/profile_images/1625792557291651073/GDxGcTsc_400x400.png",location:"\u0627\u0644\u0631\u064a\u0627\u0636",salary:null,filter1:"\u0637\u0628\u0627\u062e",filter2:"\u0641\u0627\u064a\u0646 \u062f\u0627\u064a\u0646\u0646\u0642",cardOptions:{fixed:0,highlight:!1,showLogo:!0},timePosted:"2023-02-27T12:59-0500"}];function d(e){return l.a.createElement(s,{jobTitle:e.jobTitle,companyName:e.companyName,companyLogo:e.companyLogo,jobLocation:e.location,jobSalary:e.salary,filter1:e.filter1,filter2:e.filter2,cardFixed:e.cardOptions.fixed,cardHighlighted:e.cardOptions.cardHighlighted,cardShowLogo:e.cardOptions.showLogo,timePosted:e.timePosted})}var f=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"postButtonContainer"},l.a.createElement("div",{className:"postButton"},"\u0623\u0646\u0634\u0631 \u0625\u0639\u0644\u0627\u0646 \u0648\u0638\u064a\u0641\u064a")),l.a.createElement("div",null,l.a.createElement(p,null)),l.a.createElement("div",{className:"cardsContainer"},g.map(d)))};n.a.render(l.a.createElement(f,null),document.getElementById("root"))},5:function(e,a,t){e.exports=t(15)}},[[5,1,2]]]);
//# sourceMappingURL=main.a9d68188.chunk.js.map