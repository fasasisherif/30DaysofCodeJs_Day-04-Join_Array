/*
A program to get a list of elements that exists in two separate arrays

Author:Fasasi Sherif.

Date written : 29/03/2020
*/

var Name = ["Fasasi", "Sherif"];
var Food = ["loves", "Rice", "and", "Beans"];
var Name_plus_Food = Name.concat(Food);
i = 0;
for (; i<Name_plus_Food.length; i++ ) {
      console.log(Name_plus_Food[i]);
    }
