/*
  @TODO : Add Script

  Details;
  1. Formula for calculating IDW by
      - Male:	 50.0 kg + 2.3 kg per inch per inch over 5 feet : B. J. Devine Formula (1974)
      - Female:	49 kg + 1.7 kg per inch over 5 feet : J. D. Robinson Formula (1983)
  2. BMI Formula : kg/(height in metres * height in metres)
  3. jQuery for modifying bound name result(color change)
  4. Enable tooltips
  */

function calculate_weight(){

  var user_name = document.getElementById('name').value;
  var user_age = document.getElementById('age').value;
  var user_gender = document.getElementById('gender').value;
  var user_height = document.getElementById('height').value;

  if (user_gender == 'male'){
    ideal_weight = 50;
    additional_weight = 0;
    
    for (var i = user_height; i > 5; i++) {
      additional_weight += 2.3
    }

    total = ideal_weight + additional_weight;

    var results_span = document.getElementById('results')
    results_span.innerHTML = total;
  }

  else if (user_gender == 'female'){

    console.log("female");
  }


}


/*function calculate_weight(){

  var user_name = document.getElementById('name').value;
  var user_age = document.getElementById('age').value;
  var user_gender = document.getElementById('gender').value;
  var user_height = document.getElementById('height').value;

  bmi = user_height * user_age;

  var results_span = document.getElementById('results')
  results_span.innerHTML = bmi;


  }

}*/
