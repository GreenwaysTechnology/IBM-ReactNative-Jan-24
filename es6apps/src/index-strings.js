//Strings
let firstName = "Subramanian"
let lastName = 'Murugan'
//back tick and string interpolation
let fullName = firstName + lastName // traditional 
console.log('Name' + firstName)
//back tick 
fullName = `${firstName} ${lastName}`
console.log(`Full Name ${fullName}`) // string interpoltion

//multi line strings
let doc = `
   <html>
      <head>
          <title></title>
      </head>
    <body>
    </body>
 </html>
`
console.log(doc)