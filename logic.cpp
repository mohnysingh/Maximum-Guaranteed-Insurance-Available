#include<bits/stdc++.h>
using namespace std;

int main()
{
    int age;;
    cin>>age;
    
    int sumofinsurance=0;
if(age>=18 and age<=80)    
{//IA
if(age>=18 and age<=50)
{
    cout<<"You get 50k from IA"<<endl;
    sumofinsurance+=50;
}
else
{
    cout<<"You get 25k from IA"<<endl;
    sumofinsurance+=25;
}

//Speciality Life Insurance
if(age>=18 and age<=74)
{
    cout<<"You get 25k from Speciality Life Insurance"<<endl;
    sumofinsurance+=25;
}
else
{
    cout<<"Sry You cant get from Speciality Life Insurance"<<endl;
}

//SSQ
if(age>=18 and age<=70)
{
    cout<<"You get 50k from SSQ"<<endl;
    sumofinsurance+=50;
}
else
{
    cout<<"You get 25k from SSQ"<<endl;
    sumofinsurance+=25;
}    

//EmpireLife
if(age>=40 and age<=50)
{
    cout<<"You get 50k from EmpireLife"<<endl;
    sumofinsurance+=50;
}
else if(age>=51 and age<=75)
{
    cout<<"You get 25k from EmpireLife"<<endl;
    sumofinsurance+=25;
}
 else
{
    cout<<"Sry You cant get from EmpireLife"<<endl;
}



//Foresters
if(age>=50 and age<=80)
{
    cout<<"You get 25k from Foresters"<<endl;
    sumofinsurance+=50;
}
else
{
    cout<<"Sry You cant get from Foresters"<<endl;
}

//CPP
if(age>=18 and age<=75)
{
    cout<<"You get 50k from CPP"<<endl;
    sumofinsurance+=50;
}
else
{
    cout<<"Sry You cant get from CPP"<<endl;
}


//EDGE
if(age>=18 and age<=69)
{
    cout<<"You get 50k from EDGE"<<endl;
    sumofinsurance+=50;
}
else
{
    cout<<"Sry You cant get from EDGE"<<endl;
}
}
else
{
    cout<<"Sry You cant get from any company"<<endl;
}
    
    cout<<"\nThe Total Insurance you can get is "<<sumofinsurance<<"k"<<endl;

    
}