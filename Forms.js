class Form{

constructor(){

}



layout(){
var title= createElement('h1');
title.html("Treasure hunting");
title.position(475, 100);

//var story = createElement('h3');
//story.html("Someone kidnapped the King and Queen of your country leading to chaos amongst your people. However, being the sensible one you go to the famous wizard in hiding for help. The wizard tells you how he has been trying many different spells to help but nothing is working. But he knows of a magic staff used by their ancestors that can help them. The wizard is too old to go through an adventure so, he passes the map to the treasure chest and some supplies to you to get that staff. You have passed every single test till now but then; you reach the cave with a huge maze at the end of which is your desired location and object. You must answer 3 questions and 1 ultimate question within 3 tries each to be able to get to the treasure chest. Good luck adventurer!")
//story.position(100, 200);
text("Someone kidnapped the King and Queen of your country leading to chaos amongst your people. However, being the sensible one you go to the famous wizard in", 100,200); 
text("hiding for help. The wizard tells you how he has been trying many different spells to help but nothing is working. But he knows of a magic staff used by their ancestors that can help", 100,230 );
text("them. The wizard is too old to go through an adventure so, he passes the map to the treasure chest and some supplies to you to get that staff. You have passed every single test till", 100, 260) 
text("now but then, you reach the cave with a huge maze at the end of which is your desired location and object. You must answer 3 questions and 1 ultimate question within 3 tries each to be",100, 290) ;
text("able to get to the treasure chest. Good luck adventurer!", 450,320);


var button = createButton('Next');
button.position(1066,475);

button.mousePressed(()=>{
   category();
})
}
category(){

var title = createElement('h1');
title.html("Welcome Adventurer!");
title.position(475,100);

var fppl = createSpriite(100,180);


}



}