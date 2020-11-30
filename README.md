# React
React Study

■React
 1. Declarative
 2. Component-Based★
 
⇒ Like other all of the major front-end frameworks such as Angular, Vue, you can break out your code into small components.
   It allows us not only write our HTML on how we want it to interact with our state, but it also allows us to manage that state inside of our application.
     
   If you want to change a small bit of it, it is so much easier to make samll incremental changes to your application without having to worry about breaking things outside of 
   the lareger scope of the single component you work on.
   You just remove that component and then add a new component essentially you change only the small thing you want to change and you do not have to mess with changing everything 
   else in your application. Also React allows you to actually rerender your application every time your state changes automatically.
   

■State & Props
1. Props - arguments to a function when you create a componente inside of react and you want to render it you are going to pass it the props that you want to give to it.
           It is useful for when you want to display some information inside of a component without hard coding it. Essentially, it is a variable to a function. 
           Props for things that are going to be passed down from the parent and do not change inside of the component.
2. State - inside of component. When you change the state inside of your application, it is going to rerender that section of your application.
           State is for when you need to actually rerender and update your application based on something the user has done so if you want to change something in your application
           you need to store that in state so that it properly rerenders one that actually changes.
           It is also useful inside of a form that has an input element, check box, select box whatever it is that needs to be able to be updated by the user.
           So we are going to actually use state to store what they are updating that value to and what they are changing that value to and so on.

Diff between Props & State
⇒ Props is handled and can be updated outside of the component.
   State is handled and can be updated inside of the component.
   
When wondering when we should use state or props is we do not properly think about which one is going te be handled by the component.
If we are handling that piece of information inside of the component only nowhere outside of it, then we are going to use state.
If we are handling that information outside of the component like a parent for example, then we need to pass it in via props.
Also information is static and not going to change for inside of the component
