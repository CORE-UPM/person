# person

This project contains an *npm package* with a simple 
example illustrating how to program a very simple 
*DB* (Data Base) with only *one table* (people) with 
a two column tuple (<name, age>) and a set of commands 
implementing the *CRUD* interface to access it.

## Download, instalation and usage

This proyect can be downloaded, installed and 
used as follows:

```
$ git clone https://github.com/CORE-UPM/person  
$ cd person
$
$ npm install
$
$ node 0_init                   ## creates and initializes the DB
$ node 1_all                    ## shows the age of all entries
$ node 2_create <name> <age>    ## new table entry
$ node 3_read <name>            ## lists the age of name
$ node 4_update <name> <n_age>  ## updates to n_age 
$ node 5_delete <name>          ## removes name from DB
$
```

## Creation and commits

The project has been created in five steps which have
been save in five commits:

```
5) Person v3: validation msgs
4) Person v2: model validation
3) Person v1: CRUD interface
2) Add package.json & more
1) Initial commit
```

### Step 1

Creation in GitHub of the project repository 
(https://github.com/CORE-UPM/person) with a
first commit with tree files:

```
- README.md (this file)
- LICENSE with the MIT License
- .gitignore with the typical configuration for node
```

### Step 2

In step 2, the project (with the "Initial commit" 
only) is cloned from GitHub to a local repository. 
The *.gitignore* file is updated (to ignore the 
DB file db.sqlite and the MAC files .DS_Store) 
and the README.md file is completed with this text. 

The package.json file is also created to automate 
instalation and the dependencies with sqlite3 and 
sequelize npm packages are added. The following 
commands have been used:

```
$ git clone https://github.com/CORE-UPM/person
$ cd person
$
$  ## Edit .gitignore and README.md files
$
$ npm init          ## creates the package.json file
This utility ...    ## by asking for all the params
................
................
name: (person) 
version: (1.0.0) 
................
Is this ok? (yes) 
$
$ npm install --save sequelize@3.30.2
$ npm install --save sqlite3@3.1.8
$       
```

### Step 3

In step 3 the bare model of table people 
(file model.js) is added, together with 
six comands for Initializing the DB (0_init.js),
Creating entries (2_create.js), Reading entries 
(1_all.js, 3_read_js), Updating entries (4_update.js)
and deleting (5_delete.js) entries. This are the six 
files added:

```
model.js     ## defines model person with <name,age>
0_init.js    ## creates and initializes the DB
1_all.js     ## shows <name> & <age> of all entries
2_create.js  ## creates a new table entry
3_read.js    ## lists the <age> of <name>
4_update.js  ## updates the <age> of <name> 
5_delete.js  ## removes <name> entry from DB
```

### Step 4

In step 4 the model of table people (file model.js) 
is substituted by a new one which introduces validation:

```
- <name> must be unique in the table
- <name> must have only letters
- <age> must be between 0 and 150
```

### Step 5

In step 5 the model of table people (file model.js) 
is again substituted by a new one which adds validation
messages. And the project is pushed back to GitHub with
the 5 commits. 

README.md is also updated with some corrections.

