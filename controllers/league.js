/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const leagueAPI = require('../models/league.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const leagueRouter = express.Router({mergeParams:true})


/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */
//GET ALL LEAGUES 
leagueRouter.get('/', (req, res) => {
  leagueAPI.getAllLeagues(req.params.sportId)
    .then(leagues => { res.send(leagues) })
    .catch(err => console.log(err))
})

//  GET SINGLE GROUP
leagueRouter.get('/:leagueId', (req, res) => {
  leagueAPI.getLeague(req.params.leagueId)
    .then(league => { res.send(league) })
    .catch(err => console.log(err))
})
// POST NEW LEAGUES 
leagueRouter.post('/', (req, res) => {
  // console.log(req.params)
  leagueAPI.addNewLeague( req.body, req.params.sportId)
    .then((leagues) => { res.send(leagues) })
    .catch(err => console.log(err))
})
// UPDATE LEAGUES 
leagueRouter.put('/:leagueId', (req, res) => {
  leagueAPI.updateLeague(req.body,req.params.leagueId)
    .then((league) => { res.send(league) })
    .catch(err => console.log(err))
})
//DELETE LEAGUES  
leagueRouter.delete('/:leagueId', (req, res) => {
  leagueAPI.deleteLeague(req.params.leagueId)
    .then( (leagues) => { res.send(leagues) })
    .catch(err => console.log(err))
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  leagueRouter
}