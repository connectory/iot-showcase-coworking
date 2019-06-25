#include <Servo.h> 
Servo myservo;
Servo myservo2;
Servo myservo3;

String command;

bool door1 = false;
long timeCloseD1 = 0;
bool door2 = false;
long timeCloseD2 = 0;
bool gate = false;
long timeCloseG = 0;
 
void setup() 
{
  Serial.begin(9600); 
  myservo.attach(5);
  myservo2.attach(4);
  myservo.write(30);
  myservo2.write(20);
  myservo3.attach(2);
  myservo3.write(30);
} 
 
void loop() 
{
  if(Serial.available()){
        command = Serial.readStringUntil('\n');
         
        if(command.equals("open1")){
            myservo.write(110);
            timeCloseD1 = millis() + 5000;
            door1 = true;
        }
        else if(command.equals("open2")){
             myservo2.write(100);
             timeCloseD2 = millis() + 5000;
             door2 = true;
        }
        else if(command.equals("open3")){
             myservo3.write(110);
             timeCloseG = millis() + 10000;
             gate = true;
        }
    }
    
    long t = millis();
    if(door1 && timeCloseD1 < t){
      myservo.write(30);
      door1 = false;
    }
    if(door2 && timeCloseD2 < t){
      myservo2.write(20);
      door2 = false;
    }
    if(gate && timeCloseG < t){
      myservo3.write(30);
      gate = false;
    }
}
