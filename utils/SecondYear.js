export const SecondYear = [
    {
		id: 1,
		questionText: ' Transformation of input into output is performed by ',

		answerOptions: [
			{ answerID: 'a', answerText: 'peripherals'},
			{ answerID: 'b', answerText: 'memory'},
			{ answerID: 'c', answerText: 'input-output unit'},
			{ answerID: 'd', answerText: 'CPU'},
		],
		correctResponse: 'd',
	},
	{
		id: 2,
		questionText: ' ____ registers holds the information before it goes to the decoder ',
		answerOptions: [
			{ answerID: 'a', answerText: 'Control register'},
			{ answerID: 'b', answerText: 'Bus register'},
			{ answerID: 'c', answerText: 'Data register'},
			{ answerID: 'd', answerText: 'Address register'},
		],
		correctResponse: 'c',
	},
	{
		id: 3,
		questionText: 'The controller multiplexes the addresses after getting the _____ signal.',
		answerOptions: [
			{ answerID: 'a', answerText: 'INTR'},
			{ answerID: 'b', answerText: 'ACK'},
			{ answerID: 'c', answerText: 'REQUEST'},
			{ answerID: 'd', answerText: 'RESET'},
		],
		correctResponse: 'c',
	},
	{
		id: 4,
		questionText: 'A microprocessor with 12 address lines is capable of addressing  ',
		answerOptions: [
			{ answerID: 'a', answerText: '1024 location'},
			{ answerID: 'b', answerText: '2048 location'},
			{ answerID: 'c', answerText: '4096 location'},
			{ answerID: 'd', answerText: '64 location'},
		],
		correctResponse: 'c',
	},
	{
		id: 5,
		questionText: 'What is the value of p in the following C++ code snippet?',
        code:
`#include <iostream>
using namespace std;
int main()
{
    int p;
    bool a = true;
    bool b = false;
    int x = 10;
    int y = 5;
    p = ((x | y) + (a + b));
    cout << p;
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: '12'},
			{ answerID: 'b', answerText: '0'},
			{ answerID: 'c', answerText: '2'},
			{ answerID: 'd', answerText: '16'},
		],
		correctResponse: 'd',
	},
	{
		id: 6,
		questionText: 'What will be the output of the following C++ code?',
        code:
`#include<iostream>
using namespace std;
int main ()
{
   int cin;
   cin >> cin;
   cout << "cin: " << cin;
   return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: 'Segmentation fault'},
			{ answerID: 'b', answerText: 'Nothing is printed'},
			{ answerID: 'c', answerText: 'Error'},
			{ answerID: 'd', answerText: 'cin: garbage value'},
		],
		correctResponse: 'd',
	},
	{
		id: 7,
		questionText: 'What will be the output of the following C++ program? ',
        code:
`#include <iostream>
using namespace std;
int main()
{
    try
    {
		try{
			throw 20;
		}
		catch (int n)
		{
			cout << "Inner Catch"<<endl;
			throw;
		}
            }
    catch (int x)
    {
            cout << "Outer Catch"<<endl;
    }
            return 0;
    }`,
		answerOptions: [
			{ answerID: 'a', answerText: 'Outer Catch'},
			{ answerID: 'b', answerText:   `Inner Catch
Outer Catch`},
			{ answerID: 'c', answerText: 'Error'},
			{ answerID: 'd', answerText: 'Inner Catch'},
		],
		correctResponse: 'b',
	},
	{
		id: 8,
		questionText: 'What will be the output of the following C++ program?',
        code:
`int main(int argc, char const *argv[])
{
    const char *a = "Hello\0World";
    cout<<a;
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: 'Hello'},
			{ answerID: 'b', answerText: 'World'},
			{ answerID: 'c', answerText: 'Error'},
			{ answerID: 'd', answerText: 'Hello World'},
		],
		correctResponse: 'a',
	},
	{
		id: 9,
		questionText: 'What will be the output of the following C++ program?',
        code:
`#include <iostream>
using namespace std;
class A{
public:
	A(){
		cout<<"Constructor called";
	   }
	~A(){
		cout<<"Destructor called";
	    }
};
int main(int argc, char const *argv[])
{
	A *a = new A[5];
	delete[] a;
	return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: 'Segmentation fault'},
			{ answerID: 'b', answerText: '“Constructor called” five times and then “Destructor called” five times'},
			{ answerID: 'c', answerText: 'Constructor called” five times and then “Destructor called” once'},
			{ answerID: 'd', answerText: 'Error'},
		],
		correctResponse: 'b',
	},
    {
		id: 10,
		questionText: 'What is abstract class in C++?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Any Class in C++ is an abstract class'},
			{ answerID: 'b', answerText: 'Class from which any class is derived'},
			{ answerID: 'c', answerText: 'Class specifically used as a base class with atleast one virtual functions'},
			{ answerID: 'd', answerText: 'Class specifically used as a base class with atleast one pure virtual functions'},
		],
		correctResponse: 'd',
	},
    {
		id: 11,
		questionText: 'By default, all the files in C++ are opened in _________ mode',
		answerOptions: [
			{ answerID: 'a', answerText: 'Binary'},
			{ answerID: 'b', answerText: 'VTC'},
			{ answerID: 'c', answerText: 'Text'},
			{ answerID: 'd', answerText: 'ISCII'},
		],
		correctResponse: 'c',
	},
    {
		id: 12,
		questionText: 'What will be the output of the following C++ code snippet?',
        code:
`int operate (int a, int b)
{
    return (a * b);
}
float operate (float a, float b)
{
    return (a / b);
}
int main()
{
    int x = 5, y = 2;
    float n = 5.0, m = 2.0;
    cout << operate(x, y) <<"\t";
    cout << operate (n, m);
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: '10.0  5'},
			{ answerID: 'b', answerText: '10  2.5'},
			{ answerID: 'c', answerText: '10.0  5.0'},
			{ answerID: 'd', answerText: ' 5.0  2.5'},
		],
		correctResponse: 'b',
	},
    {
		id: 13,
		questionText: 'Which of the following approach is used by C++?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Left-right'},
			{ answerID: 'b', answerText: 'Right-left'},
			{ answerID: 'c', answerText: 'Bottom-up'},
			{ answerID: 'd', answerText: 'Top-down'},
		],
		correctResponse: 'c',
	},
    {
        id: 14,
		questionText: "What is Inheritance in C++?",

		answerOptions: [
            { answerID: 'a', answerText: 'Deriving new classes from existing classes'},
			{ answerID: 'b', answerText: 'Overloading of classes'},
			{ answerID: 'c', answerText: 'Classes with same names'},
			{ answerID: 'd', answerText: 'Wrapping of data into a single class'},
		],
		correctResponse: 'a',
	},
    {
        id: 15,
        questionText: 'Find the output of the following program.',
        code:
`main(){
    int a = 10, b, c;
    b  = a++;
    c = a;
    cout << a << “ “ <<b <<” “<< c << endl;
  }`,
        answerOptions: [
            { answerID: 'a', answerText: '10 11 11'},
            { answerID: 'b', answerText: '11 11 11'},
            { answerID: 'c', answerText: '11 10 11'},
            { answerID: 'd', answerText: '10 10 10'},
        ],
        correctResponse: 'c',
    },
    {
		id: 16,
		questionText: 'What will be the value of "result" in following Python program?',
        code:
`list1 = [1,2,3,4]
list2 = [2,4,5,6]
list3 = [2,6,7,8]
result = list()
result.extend(i for i in list1 if i not in (list2+list3) and i not in result)
result.extend(i for i in list2 if i not in (list1+list3) and i not in result)
result.extend(i for i in list3 if i not in (list1+list2) and i not in result)`,
		answerOptions: [
			{ answerID: 'a', answerText: '[1, 3, 5, 7, 8]'},
			{ answerID: 'b', answerText: '[1, 7, 8]'},
			{ answerID: 'c', answerText: '[1, 2, 4, 7, 8]'},
			{ answerID: 'd', answerText: 'error'},
		],
		correctResponse: 'a',
	},
    {
		id: 17,
		questionText: 'What will be the output of the following Python expression?',
        code:
        `
round(4.576)

        `,
		answerOptions: [
			{ answerID: 'a', answerText: '4'},
			{ answerID: 'b', answerText: '4.6'},
			{ answerID: 'c', answerText: '5'},
			{ answerID: 'd', answerText: '4.5'},
		],
		correctResponse: 'c',
	},
    {
		id: 18,
		questionText: 'What will be the output of the following Python code? ',
        code:
`def foo():
	try:
		return 1
	finally:
		return 2
k = foo()
print(k)`,
		answerOptions: [
			{ answerID: 'a', answerText: 'error, there is more than one return statement in a single try-finally block'},
			{ answerID: 'b', answerText: '3'},
			{ answerID: 'c', answerText: '2'},
			{ answerID: 'd', answerText: '1'},
		],
		correctResponse: 'c',
	},
    {
		id: 19,
		questionText: 'What will be the output of the following Python code?',
        code:
        `
x='abcd'
print(list(map(list, x)))
        `,
		answerOptions: [
			{ answerID: 'a', answerText: '[`a`, `b`, `c`, `d`]'},
			{ answerID: 'b', answerText: '[`abcd`]'},
			{ answerID: 'c', answerText: '[[`a`], [`b`], [`c`], [`d`]]'},
			{ answerID: 'd', answerText: 'none of the mentioned'},
		],
		correctResponse: 'c',
	},
    {
		id: 20,
		questionText: 'Write a list comprehension equivalent for the Python code shown below.',
        code:
`for i in range(1, 101):
    if int(i*0.5)==i*0.5:
        print(i)`,
		answerOptions: [
			{ answerID: 'a', answerText: '[i for i in range(1, 100) if int(i*0.5)==(i*0.5)]'},
			{ answerID: 'b', answerText: '[i for i in range(1, 101) if int(i*0.5)==(i*0.5)]'},
			{ answerID: 'c', answerText: '[i for i in range(1, 101) if int(i*0.5)=(i*0.5)]'},
			{ answerID: 'd', answerText: '[i for i in range(1, 100) if int(i*0.5)=(i*0.5)]'},
		],
		correctResponse: 'b',
	},

    {
		id: 21,
		questionText: 'Which function do we use to shuffle a list(say list1)?',
		answerOptions: [
			{ answerID: 'a', answerText: 'shuffle(list1)'},
			{ answerID: 'b', answerText: 'list1.shuffle()'},
			{ answerID: 'c', answerText: 'random.shuffleList(list1)'},
			{ answerID: 'd', answerText: 'random.shuffle(list1)'},
		],
		correctResponse: 'd',
	},

    {
		id: 22,
		questionText: 'Which of the following is not a valid set operation in python?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Union'},
			{ answerID: 'b', answerText: 'Intersection'},
			{ answerID: 'c', answerText: 'Difference'},
			{ answerID: 'd', answerText: 'None of the above'},
		],
		correctResponse: 'd',
	},

    {
		id: 23,
		questionText: ' What will be the output of the following code snippet? ',
        code:
`def func():
	global value
	value = "Local"

value = "Global"
func()
print(value)`,
		answerOptions: [
			{ answerID: 'a', answerText: 'Local'},
			{ answerID: 'b', answerText: 'Global'},
			{ answerID: 'c', answerText: 'None'},
			{ answerID: 'd', answerText: 'Cannot be predicted'},
		],
		correctResponse: 'a',
	},

    {
		id: 24,
		questionText: 'What will be the output of the following Python code snippet?',
        code:
        `for i in [1, 2, 3, 4][::-1]:
            print(i, end=' ')`,
		answerOptions: [
			{ answerID: 'a', answerText: '4 3 2 1'},
			{ answerID: 'b', answerText: 'error'},
			{ answerID: 'c', answerText: '1 2 3 4'},
			{ answerID: 'd', answerText: 'none of the mentioned'},
		],
		correctResponse: 'a',
	},
    {
		id: 25,
		questionText: 'What will be the output of the following Python code?',
        code:
`list1 = [1, 3]
list2 = list1
list1[0] = 4
print(list2)`,
		answerOptions: [
			{ answerID: 'a', answerText: '[1, 4]'},
			{ answerID: 'b', answerText: '[1, 3, 4]'},
			{ answerID: 'c', answerText: '[4, 3'},
			{ answerID: 'd', answerText: '[1, 3]'},
		],
		correctResponse: 'c',
	},
    {
		id: 26,
		questionText: 'Which normalization form is based on the transitive dependency? ',
		answerOptions: [
			{ answerID: 'a', answerText: '1NF'},
			{ answerID: 'b', answerText: '2NF'},
			{ answerID: 'c', answerText: '3NF'},
			{ answerID: 'd', answerText: 'BCNF'},
		],
		correctResponse: 'c',
	},
    {
		id: 27,
		questionText: 'Which of the following is the full form of DDL?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Data definition language'},
			{ answerID: 'b', answerText: 'Data derivation language'},
			{ answerID: 'c', answerText: 'Dynamic data language'},
			{ answerID: 'd', answerText: 'Detailed data language'},
		],
		correctResponse: 'a',
	},
    {
		id: 28,
		questionText: 'Select the correct command to modify a column in a table.',

		answerOptions: [
			{ answerID: 'a', answerText: 'Update'},
			{ answerID: 'b', answerText: 'Alter'},
			{ answerID: 'c', answerText: 'Drop'},
			{ answerID: 'd', answerText: 'Set'},
		],
		correctResponse: 'b',
	},
    {
		id: 29,
		questionText: 'How can you change "Thomas" into "Michel" in the "LastName" column in the Users table?',

		answerOptions: [
			{ answerID: 'a', answerText: "UPDATE User SET LastName = 'Thomas' INTO LastName = 'Michel'"},
			{ answerID: 'b', answerText: "MODIFY Users SET LastName = 'Michel' WHERE LastName = 'Thomas'"},
			{ answerID: 'c', answerText: "MODIFY Users SET LastName = 'Thomas' INTO LastName = 'Michel'"},
			{ answerID: 'd', answerText: "UPDATE Users SET LastName = 'Michel' WHERE LastName = 'Thomas'"},
		],
		correctResponse: 'd',
	},
    {
		id: 30,
		questionText: 'Which statement is used to get all data from the student table whose name starts with p?',

		answerOptions: [
			{ answerID: 'a', answerText: "SELECT * FROM student WHERE name LIKE '%p%';"},
			{ answerID: 'b', answerText: "SELECT * FROM student WHERE name LIKE 'p%';"},
			{ answerID: 'c', answerText: "SELECT * FROM student WHERE name LIKE '_p%';"},
			{ answerID: 'd', answerText: "SELECT * FROM student WHERE name LIKE '%p';"},
		],
		correctResponse: 'b',
	},
    {
		id: 31,
		questionText: 'What is the value of the postfix expression 6 3 2 4 + – *?',
		answerOptions: [
			{ answerID: 'a', answerText: '74'},
			{ answerID: 'b', answerText: '-18'},
			{ answerID: 'c', answerText: '22'},
			{ answerID: 'd', answerText: '40'},
		],
		correctResponse: 'b',
	},
    {
		id: 32,
		questionText: 'Which sorting algorithm has the worst-case time complexity of O(n^2)?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Quick sort'},
			{ answerID: 'b', answerText: 'Merge sort'},
			{ answerID: 'c', answerText: 'Bubble sort'},
			{ answerID: 'd', answerText: 'Insertion sort'},
		],
		correctResponse: 'c',
	},
    {
		id: 33,
		questionText: 'Which algorithm is used to find the shortest path between all pairs of vertices in a graph?',
		answerOptions: [
			{ answerID: 'a', answerText: 'Depth-first search'},
			{ answerID: 'b', answerText: 'Breadth-first search'},
			{ answerID: 'c', answerText: "Dijkstra's algorithm"},
			{ answerID: 'd', answerText: 'Floyd-Warshall algorithm'},
		],
		correctResponse: 'd',
	},
    {
		id: 34,
		questionText: 'What will happen if the following C code is executed? ',
        code:
`#include <stdio.h>
int main()
{
    int main = 3;
    printf("%d", main);
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: 'It will cause a compile-time error'},
			{ answerID: 'b', answerText: 'It will cause a run-time error'},
			{ answerID: 'c', answerText: 'It will run without any error and prints 3'},
			{ answerID: 'd', answerText: 'It will experience infinite looping'},
		],
		correctResponse: 'c',
	},
    {
		id: 35,
		questionText: 'What will be the output of the following C code?',
        code:
`#include <stdio.h>
int main()
{
   printf(4 + "CodeCombat");
   return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: 'Combat'},
			{ answerID: 'b', answerText: 'Code'},
			{ answerID: 'c', answerText: '1005'},
			{ answerID: 'd', answerText: 'Compile-time error'},
		],
		correctResponse: 'a',
	},
    {
		id: 36,
		questionText: 'Will the following C code compile without any error?',
        code:
`#include <stdio.h>
int main()
{
    for (int k = 0; k < 10; k++);
	return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: 'Yes'},
			{ answerID: 'b', answerText: 'No'},
			{ answerID: 'c', answerText: 'Depends on the C standard implemented by compilers'},
			{ answerID: 'd', answerText: 'Error'},
		],
		correctResponse: 'a',
	},
    {
		id: 37,
		questionText: 'What will be the output of the following C code? ',
        code:
`int main() {
char p[]="codecombat";
char t;
int i,j;
for(i=0,j=strlen(p);i!=j;i++,j--)
{
    t=p[i];
    p[i]=p[j-i];
    p[j-i]=t;
}
printf("%s",p);

return 0; }`,
		answerOptions: [
			{ answerID: 'a', answerText: 'Nothing is printed on the screen'},
			{ answerID: 'b', answerText: 'Codecombat'},
			{ answerID: 'c', answerText: 'Tabmocedoc'},
			{ answerID: 'd', answerText: 'Code combat '},
		],
		correctResponse: 'a',
	},
    {
		id: 38,
		questionText: 'Which storage class in C specifies that the variable has global scope but limited visibility?',
		answerOptions: [
			{ answerID: 'a', answerText: 'auto'},
			{ answerID: 'b', answerText: 'static'},
			{ answerID: 'c', answerText: 'register'},
			{ answerID: 'd', answerText: 'extern'},
		],
		correctResponse: 'd',
	},
    {
		id: 39,
		questionText: 'What will be the output of the following C code?',
        code:
`#include <stdio.h>
void fun() {
	static int x = 0;
	printf("%d ", ++x);
}
int main()
{
	fun();
	fun();
	return 0;
}
        `,
		answerOptions: [
			{ answerID: 'a', answerText: '1 2'},
			{ answerID: 'b', answerText: '1 1'},
			{ answerID: 'c', answerText: '2 2'},
			{ answerID: 'd', answerText: '2 1'},
		],
		correctResponse: 'a',
	},
    {
		id: 40,
		questionText: 'What will be the output of the following C code?',
        code:
        `#include <stdio.h>
        int m()
        {
            printf("hello");
        }
        void main()
        {
            int k = m();
            printf("%d", k);
        }
    `,
		answerOptions: [
			{ answerID: 'a', answerText: 'hello5'},
			{ answerID: 'b', answerText: 'Error'},
			{ answerID: 'c', answerText: 'Nothing'},
			{ answerID: 'd', answerText: 'Junk value'},
		],
		correctResponse: 'a',
	},
    {
		id: 41,
		questionText: 'Sum of two octal numbers “71” and “36” =',

		answerOptions: [
			{ answerID: 'a', answerText: '123'},
			{ answerID: 'b', answerText: '127'},
			{ answerID: 'c', answerText: '213'},
			{ answerID: 'd', answerText: '345'},
		],
		correctResponse: 'b',
	},
    {
		id: 42,
		questionText: 'How many bytes does 4 kilobytes represent?',

		answerOptions: [
			{ answerID: 'a', answerText: '512'},
			{ answerID: 'b', answerText: '1024'},
			{ answerID: 'c', answerText: '4096'},
			{ answerID: 'd', answerText: '8192'},
		],
		correctResponse: 'c',
	},
    {
		id: 43,
		questionText: 'What will be the output of the following C code?',
        code:
`#include <stdio.h>
int main()
{
    int ary[4] = {1, 2, 3, 4};
    int p[4];
    p = ary;
    printf("%d", p[1]);
}
    `,
		answerOptions: [
			{ answerID: 'a', answerText: '1'},
			{ answerID: 'b', answerText: 'Compile time error'},
			{ answerID: 'c', answerText: 'Undefined behaviour'},
			{ answerID: 'd', answerText: '2'},
		],
		correctResponse: 'b',
	},
    {
		id: 44,
		questionText: 'The involution of A is equal to _________',
		answerOptions: [
			{ answerID: 'a', answerText: 'A'},
			{ answerID: 'b', answerText: "A'"},
			{ answerID: 'c', answerText: '1'},
			{ answerID: 'd', answerText: '0'},
		],
		correctResponse: 'a',
	},
    {
		id: 45,
		questionText: 'A(A + B) = ?',
		answerOptions: [
			{ answerID: 'a', answerText: 'AB'},
			{ answerID: 'b', answerText: '1'},
			{ answerID: 'c', answerText: '(1+AB)'},
			{ answerID: 'd', answerText: 'A'},
		],
		correctResponse: 'd',
	},

]