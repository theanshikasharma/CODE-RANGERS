const platformBlockchain = new Blockchain();

document.getElementById('Volunteers').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('Age').value;  
    const gender = document.getElementById('Gender').value;  
    const occupation = document.getElementById('Occupation').value;  
    const email = document.getElementById('Email').value; 
    const contribution = document.getElementById('Contribution').value;  
    const data = { name, age, gender, occupation, email, contribution };
    const newBlock = new Block(platformBlockchain.chain.length, Date.now(), data);
    platformBlockchain.addBlock(newBlock);
    
    const volunteers = document.getElementById('Volunteers');
    const div = document.createElement('div');
    div.textContent = ${name} ${age} ${gender} ${occupation} ${email} (${contribution}) has registered as a volunteer.;
    volunteers.appendChild(div);
});

document.getElementById('rejuvenatingtalents').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const skills = document.getElementById('skills').value;
    const data = { name, age, gender, skills };
    const newBlock = new Block(platformBlockchain.chain.length, Date.now(), data);
    platformBlockchain.addBlock(newBlock);
    
    const rejuvenatingTalents = document.getElementById('rejuvenatingtalents');
    const div = document.createElement('div');
    div.textContent = ${name} applied as a volunteer whose age is ${age} and gender is ${gender} with skills: ${skills}.;
    rejuvenatingTalents.appendChild(div);
});

document.getElementById('donate').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('Name').value;  
    const age = document.getElementById('Age').value;  
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    const data = { name, age, gender, email, amount };
    const newBlock = new Block(platformBlockchain.chain.length, Date.now(), data);
    platformBlockchain.addBlock(newBlock);
    
    const donate = document.getElementById('donate');
    const div = document.createElement('div');
    div.textContent = ${name} whose age is ${age} and gender is ${gender} with email ${email} donated ${amount} units.;
    donate.appendChild(div);
});
