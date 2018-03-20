var express               = require('express'),
    axios                 = require("axios"),
    app                   = express(),
    port                  = process.env.PORT || 8080,
    gitHubRepositoriesUrl = 'https://api.github.com/search/repositories',
    router                = express.Router(); // set the routers

/**
 * Return a copy of the original array object that contains the list of projects base on id, name, url and project owner.
 * @param  {array} projects contains the list of projects filtered by languages.
 * @return {array}
 */
function getListOfProjects(projects) {

    return (

        projects.map(function(project){

            return {

                id    : project.id,
                name  : project.name,
                url   : project.html_url,
                owner : project.owner.login

            }

        })

    )

}

/**
 * Default Route example.
 */
router.get('/', function(req, res) {

    res.json({
        message: 'I am live!'
    });
});

/**
 * Setup the api route based on /api/[programLanguage]/[page] schema
 * By the fault the api return a list of 100 result per pages.
 */
app.get('/api/:programLanguage/:page', function(req, res) {

    return axios
       .get(gitHubRepositoriesUrl, {

          params: {

              q        : 'language:' + req.params.programLanguage,
              per_page : 100,
              page     : req.params.page

          }

       })
       .then(function(response){

          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(getListOfProjects(response.data.items), null, 3));

       })
       .catch(function(error){

           console.log(error);

       });

});


app.use('/api', router);
app.listen(port);

console.log('The service is running at ' + port);
