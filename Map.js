MAP 

1. (<div>) 

{people.map((person, idx) => { 
const {id, firstName, email } = person 
return ( 
<div>
<h4>{firstName}</h4>
</div> 
)
})} 

2. <component> 

{products.map((product) => 
{
return <Product key={product.id} {...product} />
})}









let users = [
  {firstName : "Susan", lastName: "Steward"},
  {firstName : "Daniel", lastName: "Longbottom"},
  {firstName : "Jacob", lastName: "Black"}
];

let userFullnames = users.map(function(element){
    return `${element.firstName} ${element.lastName}`;
})

console.log(userFullnames);
