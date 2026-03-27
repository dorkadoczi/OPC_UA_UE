// To import a Global Module
// import * as MyGlobalModule from 'MyGlobalModule' 

export function MyButton_onDown(item, x, y, modifiers, trigger)
{
  // Add your code here
  Tags("MyTag").Write(0);

  // To Call a function from the Global Module
  // MyGlobalModule.myGlobalFunction1()
  
}