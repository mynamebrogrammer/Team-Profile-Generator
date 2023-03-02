const generateManager = require('./generateManager');
const generateEngineer = require('./generateEngineer');
const generateIntern = require('./generateIntern');


const generateHTML = (teamMembers) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha512-9s1SRVxXUqCzoO9sRmIhJQzPyyKLCvXf4JGfFkhTJtC2xgCpBbI7W3qMgPq+qNhXc4hB9B0d2I7Ot3tfYnn8pQ==" crossorigin="anonymous" />
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar navbar-dark bg-dark">
                <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                        ${generateManager(teamMembers[0])}
                        ${generateEngineer(teamMembers[1])}
                        ${generateIntern(teamMembers[2])}
                    </div>
                </div>
            </div>
        </main>
    </body>
    </html>
    `;
  };
  
  module.exports = generateHTML;



