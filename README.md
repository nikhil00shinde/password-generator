## Password Generator 
`Take length from user to define password and save password in file and clipboard.`
`Created global command passgen and pass argument`

* -s/--save : save in file 
* -nn/--no-numbers : to avoid numbers in password
* -ns/--no-symbols : to avoid symbols in password
* -l/--length : default length is 8, we can length 

### Command
`passgen --length=20 -nn -ns -s`

----

### Package used
* commander
* chalk
* clipboardy
* inquirer

----


