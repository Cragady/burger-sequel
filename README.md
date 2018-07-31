# **Purpose**

The purpose of this project is to replace ORM with Sequelize.  

The user selects which burger they want to eat, or give back, and it will update the database accordingly and refresh the page with the burgers in the corresponding spots under "Burgers Eaten" and "Burgers not Eaten".

# **Brief Explanations**

### **Sequelize**

Sequelize eliminates the need for orm.js. In order fo sequelize to work, the npm mysql2 is required.

### **index.js**

Sets the connection to the database, and parses the models to a readable format for `sequelize`.

### **/models**

**burger.js & eater.js**

The models `burger.js` and `eater.js` reference each other with `.belongsTo()` and `.hasMany()`. This joins the tables together, so that when the `.get()` method is used, extra syntax can be used to properly associate the tables together.

### **burger_controller.js**

Works as a router for the server. It takes the url parameters specified by the initial page load, or the url parameters specified by the ajax calls. `burger_controller.js` requires `/models`, and uses syntax for `sequelize` to show all of the data.

* `router.get()` fires off on the page load with the base url. It executes `burger.all()` and gives the data on all of the burgers stored in `burger2.burgers`, and the associated `burgers2.eaters`, to the handlebars files. `{include: mdb.Eaters, order: [["burger_name", "ASC"]]}` are used as arguments for the `.findAll()` function to pull the data associated with `burgers2.burgers`.

* `router.post()` takes the object data from the ajax call in `js/burgers.js` and creates a new burger with it's specifications. There is also a `router.post()` tied to `eater.js` that updates the database with the eater's name, and the burger id from `burger`.

*  `router.put()` updates the selected burger's devoured status. The data for the burger to be updated, and what to update it to, is given by the ajax call that is pulled from the `data-` attributes set by handlebars.

* `router.delete()` deletes the eater from `burgers2.eaters` when a burger is updated from devoured to not devoured.

### **public/assets/js/burgers.js**

Holds the ajax calls for updating and creating burgers. The data is set on the button click and is passed as an object to be readable with `sequelize`'s communication with sql through it's methods.

This also sets all of the data for the burgers that are stored in the `data-` attributes in the html.

### **index.handlebars**

Receives all of the information about the burgers on the page load due to `router.get()` in `burger_controller.js`. `{{#each}}` is used to list all of the burgers; `{{#unless}}` and `{{#if}}` is used to filter the burgers according to their devoured status. Two cards are used to display the burgers eaten, and the burger not eaten. 

If the burgers aren't devoured, then a button is placed next to the `{{burger_name}}` prompting the user to eat the burger, the button holds the burger's id and the opposite value of it's devoured status for update. If the burger is eaten, the user is prompted to give the burger back. With the `.findAll()` function, `Eaters` is put into an object and associated with `Burgers`. To list the person who ate the burgers, it was referenced in this manner: `{{Eaters/0/eater_name}}` in the devoured true section next to `{{burger_name}}`.

# **Demo**

<img src="burgers.gif" style="height: 450px; width: 700px;" alt="Burgers">