---
author: shisaq
comments: true
date: 2016-05-07 12:36:50+00:00
layout: post
link: http://shisaq.com/responsive-and-seo-friendly-data-tables.html
slug: responsive-and-seo-friendly-data-tables
title: Responsive and SEO Friendly Data Tables
wordpress_id: 141
categories:
- 网络资源摘录
---

<blockquote>

> 
> ## This article is from [this link](http://mobifreaks.com/user-interface/responsive-and-seo-friendly-data-tables). This is a [demo](http://www.mobifreaks.com/wp-content/demos/Responsive-and-SEO-Friendly-Data-Tables/).
> 
> 
</blockquote>




There was a time when we all used tables to design whole layout, later we started using div to style the layout.

It is because of search engine robot. As it divides the table into three parts like header, content and footer and only follows the data inside the content. That’s what I learned when I was using tables to create layouts.

Even though usage of tables is still a need to maintain data sheets, we have come up with simple table design. Which creates a table without using html elements like table, td, tr etc.

![img3](http://shisaq.com/wp-content/uploads/2016/05/img3.jpg)


## SEO Friendly Table


You might be thinking what element we would be using. It’s div element styled by CSS.

Before creating a table we need to know the basic CSS styling of the table elements.


### Default CSS for table and its elements





 	
  1. `table{`

 	
  2. ` display:table; /* --- Defines a table --- */`

 	
  3. `}`

 	
  4. `tr{`

 	
  5. ` display:table-row; /* --- Defines a table row --- */`

 	
  6. `}`

 	
  7. `thead{`

 	
  8. ` display:table-header-group; /* --- Defines a table header group --- */`

 	
  9. `}`

 	
  10. `tbody{`

 	
  11. ` display:table-row-group; /* --- Defines a table row group --- */`

 	
  12. `}`

 	
  13. `tfoot{`

 	
  14. ` display:table-footer-group; /* --- Defines a table footer group --- */`

 	
  15. `}`

 	
  16. `col{`

 	
  17. ` display:table-column; /* --- Defines a table column --- */`

 	
  18. `}`

 	
  19. `colgroup{`

 	
  20. ` display:table-column-group; /* --- Defines a table column group --- */`

 	
  21. `}`

 	
  22. `td,`

 	
  23. `th{`

 	
  24. ` display:table-cell; /* --- Defines a table cell --- */`

 	
  25. `}`

 	
  26. `caption{`

 	
  27. ` display:table-caption; /* --- Defines a table caption --- */`

 	
  28. `}`


Now from the above code we will be using table, tr, td and thead to create few classes

 	
  1. `.table{ `

 	
  2. ` display:table;`

 	
  3. `}`

 	
  4. `.table-head{`

 	
  5. ` display:table-header-group;`

 	
  6. `}`

 	
  7. `.row{`

 	
  8. ` display:table-row;`

 	
  9. `}`

 	
  10. `.column{`

 	
  11. ` display:table-cell;`

 	
  12. `}`


By using the classes we will be creating tables which are SEO friendly.


### Sleek CSS table





 	
  1. `.table{`

 	
  2. ` display:table; /* Defines a Table */`

 	
  3. ` font-family:Arial, Helvetica, sans-serif;`

 	
  4. ` font-size:14px;`

 	
  5. ` border-bottom:2px solid #dddddd;`

 	
  6. ` color:#8d8d8d;`

 	
  7. ` margin:10px 0;`

 	
  8. `}`

 	
  9. `.table-head{`

 	
  10. ` display: table-header-group; /* Defines a table header group */`

 	
  11. `}`

 	
  12. `.table-head .column{ /* Column inside the table-head */`

 	
  13. ` background:#333333;`

 	
  14. ` color:#7d7d7d;`

 	
  15. ` border-right:1px solid #5d5d5d;`

 	
  16. ` border-bottom:none;`

 	
  17. `}`

 	
  18. `.table-head .column:hover{ /* Column hover inside the table-head */`

 	
  19. ` background:#222222;`

 	
  20. `}`

 	
  21. `.row{`

 	
  22. ` display:table-row; /* Defines a table row */`

 	
  23. `}`

 	
  24. `.row .column:nth-child(1){ /* First column in a row */`

 	
  25. ` border-left:1px solid #eeeeee;`

 	
  26. `}`

 	
  27. `.row:last-child .column{ /* column in a last row */`

 	
  28. ` border-bottom:none;`

 	
  29. `}`

 	
  30. `.column{`

 	
  31. ` display:table-cell; /* Defines a table cell */`

 	
  32. ` padding:10px 20px;`

 	
  33. ` border-bottom:1px solid #eeeeee;`

 	
  34. ` border-right:1px solid #eeeeee;`

 	
  35. ` line-height:1.8em;`

 	
  36. `}`

 	
  37. `.column:hover{`

 	
  38. ` background:#f9f9f9;`

 	
  39. `}`




### Bare bone mark up for the table





 	
  1. `<div class="table">`

 	
  2. ` <div class="table-head">`

 	
  3. ` <div class="column" data-label=""></div>`

 	
  4. ` </div>`

 	
  5. ` <div class="row">`

 	
  6. ` <div class="column" data-label=""></div>`

 	
  7. ` </div>`

 	
  8. `</div>`


Bare bone markup consists of

 	
  1. .table which defines a table.

 	
  2. .table-head which defines a table header group not necessary unless you have some headings for your table.

 	
  3. .column which defines a table cell.

 	
  4. .row which defines a table row.

 	
  5. Here we have assigned a new attribute called data-label, which defines the label for the current column (will be discussed later in responsive tables)


Complete markup for the table. In this case we will create a data sheet for employer information.

 	
  1. `<div class="table">`

 	
  2. ` <div class="table-head">`

 	
  3. ` <div class="column" data-label="Employee No">Employee No</div>`

 	
  4. ` <div class="column" data-label="User Name">User Name</div>`

 	
  5. ` <div class="column" data-label="Real Name">Real Name</div>`

 	
  6. ` <div class="column" data-label="Age">Age</div>`

 	
  7. ` <div class="column" data-label="Profession">Profession</div>`

 	
  8. ` <div class="column" data-label="Contact">Contact</div>`

 	
  9. ` </div>`

 	
  10. ` <div class="row">`

 	
  11. ` <div class="column" data-label="Employee No">2311</div>`

 	
  12. ` <div class="column" data-label="User Name">Lorem</div>`

 	
  13. ` <div class="column" data-label="Real Name">Ipsum dolor</div>`

 	
  14. ` <div class="column" data-label="Age">22</div>`

 	
  15. ` <div class="column" data-label="Profession">Web designer</div>`

 	
  16. ` <div class="column" data-label="Contact">1234567890</div>`

 	
  17. ` </div>`

 	
  18. ` <div class="row">`

 	
  19. ` <div class="column" data-label="Employee No">4542</div>`

 	
  20. ` <div class="column" data-label="User Name">Viverra</div>`

 	
  21. ` <div class="column" data-label="Real Name">Nam non viverra</div>`

 	
  22. ` <div class="column" data-label="Age">22</div>`

 	
  23. ` <div class="column" data-label="Profession">Web developer</div>`

 	
  24. ` <div class="column" data-label="Contact">2345678901</div>`

 	
  25. ` </div>`

 	
  26. ` <div class="row">`

 	
  27. ` <div class="column" data-label="Employee No">5643</div>`

 	
  28. ` <div class="column" data-label="User Name">Sed</div>`

 	
  29. ` <div class="column" data-label="Real Name">Donec sed volutpat</div>`

 	
  30. ` <div class="column" data-label="Age">25</div>`

 	
  31. ` <div class="column" data-label="Profession">Editor</div>`

 	
  32. ` <div class="column" data-label="Contact">3456789012</div>`

 	
  33. ` </div>`

 	
  34. ` <div class="row">`

 	
  35. ` <div class="column" data-label="Employee No">5464</div>`

 	
  36. ` <div class="column" data-label="User Name">Orci</div>`

 	
  37. ` <div class="column" data-label="Real Name">Phasellus eu orci nunc</div>`

 	
  38. ` <div class="column" data-label="Age">32</div>`

 	
  39. ` <div class="column" data-label="Profession">User Interface</div>`

 	
  40. ` <div class="column" data-label="Contact">4567890123</div>`

 	
  41. ` </div>`

 	
  42. `</div>`


![img1](http://shisaq.com/wp-content/uploads/2016/05/img1.jpg)


## Responsive Table


We will use @media of CSS3 to convert our table into responsive. When screen is resized the mobile friendly table is turned on.



 	
  1. `/* Responsive table */`

 	
  2. `@media all and (max-width: 640px){`

 	
  3. ` .table,`

 	
  4. ` .row,`

 	
  5. ` .column,`

 	
  6. ` .column:before{`

 	
  7. ` display:block; /* Converts a table, table row, table column and table column:before into a block element */`

 	
  8. ` }`

 	
  9. ` .table,`

 	
  10. ` .row .column:last-child{`

 	
  11. ` border-bottom:none;`

 	
  12. ` }`

 	
  13. ` .table-head{`

 	
  14. ` position:absolute; /* Hides table head but not using display none */`

 	
  15. ` top:-1000em;`

 	
  16. ` left:-1000em;`

 	
  17. ` }`

 	
  18. ` .row{`

 	
  19. ` border:1px solid #eeeeee;`

 	
  20. ` border-top:2px solid #dddddd;`

 	
  21. ` border-bottom:2px solid #dddddd;`

 	
  22. ` margin:20px 0;`

 	
  23. ` }`

 	
  24. ` .row .column:nth-child(1){ /* first column of the row */`

 	
  25. ` border-left:none;`

 	
  26. ` }`

 	
  27. ` .row .column:last-child{ /* last column of the row */`

 	
  28. ` border-right:none;`

 	
  29. ` }`

 	
  30. ` .row:last-child .column,`

 	
  31. ` .column{ /* Column in the last row and column */`

 	
  32. ` border-bottom:1px solid #eeeeee;`

 	
  33. ` }`

 	
  34. ` .column:before{ /* prints the value of data-label attribute before the column data */`

 	
  35. ` font-weight:bold;`

 	
  36. ` padding-right:20px;`

 	
  37. ` font-size:12px;`

 	
  38. ` content:" "attr(data-label)" //"; /* call the attribute value of data-label and adds a string // */`

 	
  39. ` }`

 	
  40. `}`


![img2](http://shisaq.com/wp-content/uploads/2016/05/img2.jpg)

Everything setup hope you enjoyed our tutorial.Grab the source and feel free to check out the demo

**Reference :** [Css-tricks](http://www.mobifreaks.com/u/7) and [Table Standards](http://www.mobifreaks.com/u/8)
