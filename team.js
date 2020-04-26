var faker = require('faker')
function generateTeam () {
  var team = []
  for (var id = 0; id < 10; id++) {
    var firstName = faker.name.firstName()
    var role = faker.name.jobTitle()
    var email = faker.internet.email()
    team.push({
      "id": id,
      "first_name": firstName,
      "role": role,
      "email": email
    })
  }
  return { "team": team }
}
module.exports = generateTeam