export const FirstYear = [
    {
		id: 1,
		questionText: ' Which of the following is not a valid C variable name?',
		answerOptions: [
			{ answerID: 'a', answerText: 'int number;'},
			{ answerID: 'b', answerText: 'float rate;'},
			{ answerID: 'c', answerText: 'int variable_count;'},
			{ answerID: 'd', answerText: 'int $main;'},
		],
		correctResponse: 'd',
	},
	{
		id: 2,
		questionText: 'What will be the output of the following C code? ',
        code:
`#include <stdio.h>
int main()
{
	signed char chr;
	chr = 128;
	printf("%d", chr);
	return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: '128'},
			{ answerID: 'b', answerText: '-128'},
			{ answerID: 'c', answerText: 'Depends on the complier'},
			{ answerID: 'd', answerText: 'None of the mentioned'},
		],
		correctResponse: 'b',
	},
	{
		id: 3,
		questionText: 'What will be the output of the following C code?',
        code:
`#include <stdio.h>
int main()
{
    float x = 'a';
    printf("%f", x);
    return 0;
} `,
		answerOptions: [
			{ answerID: 'a', answerText: 'a'},
			{ answerID: 'b', answerText: 'run time error'},
			{ answerID: 'c', answerText: 'a.0000000'},
			{ answerID: 'd', answerText: '97.0000000'},
		],
		correctResponse: 'd',
	},
	{
		id: 4,
		questionText: 'What will be the output of the following C code? ',
        code:
`#include <stdio.h>
int main()
{
    int a[5] = {1, 2, 3, 4, 5};
    int i;
    for (i = 0; i < 5; i++)
    	if ((char)a[i] == '5')
    		printf("%d", a[i]);
    	else
    		printf("FAIL");
} `,
		answerOptions: [
			{ answerID: 'a', answerText: 'The compiler will flag an error'},
			{ answerID: 'b', answerText: 'The program will compile and print the output 5'},
			{ answerID: 'c', answerText: 'The program will compile and print the ASCII value of 5'},
			{ answerID: 'd', answerText: 'The program will compile and print FAIL for 5 times'},
		],
		correctResponse: 'd',
	},
	{
		id: 5,
		questionText: 'What will be the final value of x in the following C code?',
        code:
`#include <stdio.h>
void main()
{
    int x = 5 * 9 / 3 + 9;
    printf("%d",x);
} `,
		answerOptions: [
			{ answerID: 'a', answerText: '3.75'},
			{ answerID: 'b', answerText: 'Depends on compiler'},
			{ answerID: 'c', answerText: '24'},
			{ answerID: 'd', answerText: '3'},
		],
		correctResponse: 'c',
	},
	{
		id: 6,
		questionText: 'What will happen if the following C code is executed?',
        code:
`include <stdio.h>
int main()
{
    int main = 3;
    printf("%d", main);
    return 0;
} `,
		answerOptions: [
			{ answerID: 'a', answerText: ' It will cause a compile-me error '},
			{ answerID: 'b', answerText: ' It will cause a run-me error '},
			{ answerID: 'c', answerText: 'It will run without any error and prints 3'},
			{ answerID: 'd', answerText: ' It will experience infinite looping'},
		],
		correctResponse: 'c',
	},
	{
		id: 7,
		questionText: 'What is the value of EOF? ',
		answerOptions: [
			{ answerID: 'a', answerText: '-1'},
			{ answerID: 'b', answerText: '0'},
			{ answerID: 'c', answerText: '1'},
			{ answerID: 'd', answerText: '10'},
		],
		correctResponse: 'a',
	},
	{
		id: 8,
		questionText: 'What will be the output of the following C code? ',
        code:
`#include <stdio.h>
int main()
{
   printf(4 + "CodeCombat");
   return 0;
} `,
		answerOptions: [
			{ answerID: 'a', answerText: 'Combat'},
			{ answerID: 'b', answerText: 'Code'},
			{ answerID: 'c', answerText: '1005'},
			{ answerID: 'd', answerText: 'Compile-time error'},
		],
		correctResponse: 'a',
	},
	{
		id: 9,
		questionText: 'What will be the output of the following C code?',
        code:
`#include <stdio.h>
void main()
{
	for (k = 0.0; k < 3.0; k++)
		printf("Hello");
	double k = 0;
} `,
		answerOptions: [
			{ answerID: 'a', answerText: 'Compile time error'},
			{ answerID: 'b', answerText: 'hello'},
			{ answerID: 'c', answerText: 'Nothing'},
			{ answerID: 'd', answerText: 'Varies'},
		],
		correctResponse: 'a',
	},
    {
		id: 10,
		questionText: ' Will the following C code compile without any error? ',
        code:
`#include <stdio.h>
int main()
{
    for (int k = 0; k < 10; k++);
    return 0;
} `,
		answerOptions: [
			{ answerID: 'a', answerText: 'Yes'},
			{ answerID: 'b', answerText: 'No'},
			{ answerID: 'c', answerText: 'Depends on the C standard implemented by compilers'},
			{ answerID: 'd', answerText: 'Error'},
		],
		correctResponse: 'a',
	},
    {
		id: 11,
		questionText: ' What will be the output of the following C code?',
        code:
`#include <stdio.h>
void main()
{
    double k = 0;
    for (k = 0.0; k < 3.0; k++)
	printf("Hello");
} `,
		answerOptions: [
			{ answerID: 'a', answerText: 'Run time error'},
			{ answerID: 'b', answerText: 'Hello is printed thrice'},
			{ answerID: 'c', answerText: 'Hello is printed twice'},
			{ answerID: 'd', answerText: 'Hello is printed infinitely'},
		],
		correctResponse: 'b',
	},
    {
		id: 12,
		questionText: 'How many times the printf statement will be executed?',
        code:
`#include <stdio.h>
int main()
{
    int i = 0;
    do {
		i++;
		printf("in while loop");
    } while (i < 3);
}`,
		answerOptions: [
			{ answerID: 'a', answerText: '2'},
			{ answerID: 'b', answerText: '3'},
			{ answerID: 'c', answerText: '4'},
			{ answerID: 'd', answerText: '1'},
		],
		correctResponse: 'b',
	},
    {
		id: 13,
		questionText: ' What will be the output of the following C code?',
        code:
`#include <stdio.h>
void main()
{
    struct student
    {
		int no;
		char name[20];
    };
    struct student s;
    no = 8;
    printf("%d", no);
} `,
		answerOptions: [
			{ answerID: 'a', answerText: 'Nothing'},
			{ answerID: 'b', answerText: 'Compile time error'},
			{ answerID: 'c', answerText: 'Junk'},
			{ answerID: 'd', answerText: '8'},
		],
		correctResponse: 'b',
	},
    {
		id: 14,
		questionText: 'Which of the following is an exit controlled loop?',

		answerOptions: [
			{ answerID: 'a', answerText: 'While Loop'},
			{ answerID: 'b', answerText: 'For loop'},
			{ answerID: 'c', answerText: 'Do-While'},
			{ answerID: 'd', answerText: 'Nested For Loop'},
		],
		correctResponse: 'c',
	},
    {
		id: 15,
		questionText: "What is the operator used to make 1's One's compliment.?",

		answerOptions: [
			{ answerID: 'a', answerText: '& Bitwise AND Operator'},
			{ answerID: 'b', answerText: '| Bitwise OR operator'},
			{ answerID: 'c', answerText: '~ Bitwise Negate Operator'},
			{ answerID: 'd', answerText: '^ Bitwise Exclusive OR'},
		],
		correctResponse: 'c',
	},
    {
		id: 16,
		questionText: 'In C language, FILE is of which data type?',

		answerOptions: [
			{ answerID: 'a', answerText: 'int'},
			{ answerID: 'b', answerText: 'char *'},
			{ answerID: 'c', answerText: 'struct'},
			{ answerID: 'd', answerText: 'None of the mentioned'},
		],
		correctResponse: 'a',
	},
    {
		id: 17,
		questionText: 'What will be the output of the following C function?',
        code:
`#include <stdio.h>
void reverse(int i);
int main()
{
    reverse(1);
}
void reverse(int i)
{
    if (i > 5)
		return ;
    printf("%d ", i);
    return reverse((i++, i));
}`,
		answerOptions: [
			{ answerID: 'a', answerText: '1 2 3 4 5'},
			{ answerID: 'b', answerText: 'Segmentation fault'},
			{ answerID: 'c', answerText: 'Compilation error'},
			{ answerID: 'd', answerText: 'Undefined behaviour'},
		],
		correctResponse: 'a',
	},
    {
		id: 18,
		questionText: 'What is the result of the expression ptr += 2 in C, where ptr is a pointer? ',

		answerOptions: [
			{ answerID: 'a', answerText: 'Increase ptr by 2'},
			{ answerID: 'b', answerText: 'Decrease ptr by 2'},
			{ answerID: 'c', answerText: 'Move ptr two memory locations forward'},
			{ answerID: 'd', answerText: ' It is not a valid opera on '},
		],
		correctResponse: 'c',
	},
    {
		id: 19,
		questionText: ' Determine Output: ',
        code:
`#include<stdio.h>
void main()
{
	int *ptr, a=10;
	ptr = &a;
	*ptr += 1;
	printf("%d, %d", *ptr, a);
}`,
		answerOptions: [
			{ answerID: 'a', answerText: '10,10'},
			{ answerID: 'b', answerText: '10,11'},
			{ answerID: 'c', answerText: '11,10'},
			{ answerID: 'd', answerText: '11,11'},
		],
		correctResponse: 'd',
	},
    {
		id: 20,
		questionText: ' How do you access the last element of an array arr with n elements in C?',

		answerOptions: [
			{ answerID: 'a', answerText: 'arr[n]'},
			{ answerID: 'b', answerText: 'arr[n-1]'},
			{ answerID: 'c', answerText: 'arr[n+1]'},
			{ answerID: 'd', answerText: 'arr[last]'},
		],
		correctResponse: 'b',
	},

    {
		id: 21,
		questionText: 'What will be the output of the program?',
        code:
`#include<stdio.h>
void main()
{
	float arr[] = {12.4, 2.3, 4.5, 6.7};
	printf("%d", sizeof(arr)/sizeof(arr[0]));
} `,
		answerOptions: [
			{ answerID: 'a', answerText: '5'},
			{ answerID: 'b', answerText: '4'},
			{ answerID: 'c', answerText: '6'},
			{ answerID: 'd', answerText: '7'},
		],
		correctResponse: 'b',
	},

    {
		id: 22,
		questionText: 'What will be the output of the program?',
        code:
`#include<stdio.h>
#include<string.h>
void main()
{
	char str1[20] = "Hello", str2[20] = " World";
	printf("%s", strcpy(str2, strcat(str1, str2)));
}`,
		answerOptions: [
			{ answerID: 'a', answerText: 'Hello World'},
			{ answerID: 'b', answerText: 'World'},
			{ answerID: 'c', answerText: 'WorldHello'},
			{ answerID: 'd', answerText: 'None'},
		],
		correctResponse: 'a',
	},

    {
		id: 23,
		questionText: ' What will be the output of the following C code? ',
        code:
`#include <stdio.h>
int main()
{
    int ary[4] = {1, 2, 3, 4};
    int p[4];
    p = ary;
    printf("%d", p[1]);
} `,
		answerOptions: [
			{ answerID: 'a', answerText: '1'},
			{ answerID: 'b', answerText: 'Compile time error'},
			{ answerID: 'c', answerText: 'Undefined behaviour'},
			{ answerID: 'd', answerText: '2'},
		],
		correctResponse: 'b',
	},

    {
		id: 24,
		questionText: 'What will be the output of the following C code on a 64 bit machine?',
        code:
`#include <stdio.h>
void main()
{
    1 < 2 ? return 1: return 2;
} `,
		answerOptions: [
			{ answerID: 'a', answerText: 'returns 1'},
			{ answerID: 'b', answerText: 'returns 2'},
			{ answerID: 'c', answerText: 'Varies'},
			{ answerID: 'd', answerText: 'Compile time error'},
		],
		correctResponse: 'd',
	},
    {
		id: 25,
		questionText: 'What will be the output of the following C code?',
        code:
        `
#include<string.h>
#include<stdio.h>
int main() {
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

    return 0;
		} `,
		answerOptions: [
			{ answerID: 'a', answerText: 'Nothing is printed on the screen'},
			{ answerID: 'b', answerText: 'codecombat'},
			{ answerID: 'c', answerText: 'tabmocedoc'},
			{ answerID: 'd', answerText: 'code combat'},
		],
		correctResponse: 'a',
	},
    {
		id: 26,
		questionText: 'What will be the output of the following C code? ',
		code:
`# include <stdio.h>
int main()
{
    char s1[7] = "1234", *p;
    p = s1 + 2;
    *p = '0' ;
    printf("%s", s1);
} `,
		answerOptions: [
			{ answerID: 'a', answerText: '12'},
			{ answerID: 'b', answerText: '120400'},
			{ answerID: 'c', answerText: '1204'},
			{ answerID: 'd', answerText: '1034'},
		],
		correctResponse: 'c',
	},
    {
		id: 27,
		questionText: ' What will be the output of the following C code? ',
        code:
        `
#include<string.h>
#include<stdio.h>
#include <stdlib.h>
int main()
{
    char *s1 = (char *)malloc(50);
    char *s2 = (char *)malloc(50);
    strcpy(s1, "NIPUNA");
    strcpy(s2, "2K24");
    strcat(s1, s2);
    printf("%s", s1);
    return 0;
} `,
		answerOptions: [
			{ answerID: 'a', answerText: 'NIPUNA2K24'},
			{ answerID: 'b', answerText: 'NIPUNA'},
			{ answerID: 'c', answerText: 'NIPUNA 2K24'},
			{ answerID: 'd', answerText: '2K24'},
		],
		correctResponse: 'a',
	},
    {
		id: 28,
		questionText: 'Comments are ignored by the:',

		answerOptions: [
			{ answerID: 'a', answerText: 'Interpreter Easy(C is compiled'},
			{ answerID: 'b', answerText: 'Compiler'},
			{ answerID: 'c', answerText: 'User'},
			{ answerID: 'd', answerText: 'All of the above'},
		],
		correctResponse: 'b',
	},
    {
		id: 29,
		questionText: 'Which symbol is used to denote a single-line comment in C programming?',

		answerOptions: [
			{ answerID: 'a', answerText: '//'},
			{ answerID: 'b', answerText: '--'},
			{ answerID: 'c', answerText: '/*'},
			{ answerID: 'd', answerText: '*'},
		],
		correctResponse: 'a',
	},
    {
		id: 30,
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
		id: 31,
		questionText: 'What will be the output of the following C code?',
        code:
`#include <stdio.h>
void fun() {
	static int x = 0;
	printf("%d ", ++x);
}

int main() {
	fun();
	fun();
	return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: '1 2'},
			{ answerID: 'b', answerText: '1 1'},
			{ answerID: 'c', answerText: '2 2'},
			{ answerID: 'd', answerText: '2 1'},
		],
		correctResponse: 'a',
	},
    {
		id: 32,
		questionText: ' What will be the output of the following C code?',
        code:
`#include <stdio.h>
int main()
{
    int x = 5;
    int * const ptr = &x;
    ++(*ptr);
    printf("%d", x);

    return 0;
} `,
		answerOptions: [
			{ answerID: 'a', answerText: '5'},
			{ answerID: 'b', answerText: 'Compiler Error'},
			{ answerID: 'c', answerText: 'Runtime Error'},
			{ answerID: 'd', answerText: '6'},
		],
		correctResponse: 'd',
	},
    {
		id: 33,
		questionText: ' What will be the output of the following C code?',
        code:
`#include <stdio.h>
int main()
{
    int a=3;
    switch(a)
    {

    }
    printf("MySwitch");
}`,
		answerOptions: [
			{ answerID: 'a', answerText: 'MySwitch'},
			{ answerID: 'b', answerText: 'No Output'},
			{ answerID: 'c', answerText: 'Compiler Error'},
			{ answerID: 'd', answerText: 'None of the above'},
		],
		correctResponse: 'a',
	},
    {
		id: 34,
		questionText: ' What will be the output of the following C code? ',
        code:
`#include <stdio.h>
void main()
{
    m();
}
void m()
{
    printf("hi");
    m();
} `,
		answerOptions: [
			{ answerID: 'a', answerText: 'Compile time error'},
			{ answerID: 'b', answerText: 'hi'},
			{ answerID: 'c', answerText: 'Infinite hi'},
			{ answerID: 'd', answerText: 'Nothing'},
		],
		correctResponse: 'c',
	},
    {
		id: 35,
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
} `,
		answerOptions: [
			{ answerID: 'a', answerText: 'hello5'},
			{ answerID: 'b', answerText: 'Error'},
			{ answerID: 'c', answerText: 'Nothing'},
			{ answerID: 'd', answerText: 'Junk value'},
		],
		correctResponse: 'a',
	},
    {
		id: 36,
		questionText: ' Choose a correct statement about C language arrays.',

		answerOptions: [
			{ answerID: 'a', answerText: 'An array size can not changed once it is created'},
			{ answerID: 'b', answerText: 'Array element value can be changed any number of times'},
			{ answerID: 'c', answerText: 'To access Nth element of an array students, use students[n-1] as the starting index is 0.'},
			{ answerID: 'd', answerText: 'All the above'},
		],
		correctResponse: 'd',
	},
    {
		id: 37,
		questionText: 'What will be the output of the following C code? ',
        code:
`#include <stdio.h>
#include <stdlib.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int *ptr = arr;
    printf("Elements of the array:");
    for (int i = 0; i < 5; i++)
	{
	printf("%d ", *(ptr + i));
	}
    return 0;
}`,
		answerOptions: [
			{ answerID: 'a', answerText: 'Elements of the array: 1 2 3 4 5'},
			{ answerID: 'b', answerText: 'Elements of the array: 0 0 0 0 0'},
			{ answerID: 'c', answerText: 'Undefined behavior'},
			{ answerID: 'd', answerText: ' Compila on error '},
		],
		correctResponse: 'a',
	},
    {
		id: 38,
		questionText: ' What will be the output of the following DMA program?',
        code:
`#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr;
    int size =5;
    ptr = (int *)malloc(size * sizeof(int));
    if (ptr == NULL) {
		printf("Memory allocation on failed");
		return 1;
    }
    printf("Elements of the array:");
    for (int i = 0; i < size; i++)
	{
		printf("%d ", *(ptr + i));
    }
    free(ptr);
    return 0;
} `,
		answerOptions: [
			{ answerID: 'a', answerText: 'Memory allocation on failed'},
			{ answerID: 'b', answerText: 'Elements of the array: 0 0 0 0 0 '},
			{ answerID: 'c', answerText: 'Undefined behavior '},
			{ answerID: 'd', answerText: ' Compile on error'},
		],
		correctResponse: 'b',
	},
    {
		id: 39,
		questionText: 'What will be the output of the following C code?',
        code:
`#include <stdio.h>
#include <stdlib.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int *ptr = arr;
    ptr++;
    printf("%d", *ptr);
    ptr--;
    printf("%d", *ptr);
    return 0;
} `,
		answerOptions: [
			{ answerID: 'a', answerText: '2 1'},
			{ answerID: 'b', answerText: '1 2'},
			{ answerID: 'c', answerText: '3 2'},
			{ answerID: 'd', answerText: '1 3'},
		],
		correctResponse: 'a',
	},
    {
		id: 40,
		questionText: 'What is the decimal equivalent of the binary number 10111? ',

		answerOptions: [
			{ answerID: 'a', answerText: '21'},
			{ answerID: 'b', answerText: '39'},
			{ answerID: 'c', answerText: '42'},
			{ answerID: 'd', answerText: '23'},
		],
		correctResponse: 'd',
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
		questionText: 'How many bytes does 4 kilobytes represent? ',

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
		questionText: 'Which part of the program address space is p stored in the following C code?',
        code:
`#include <stdio.h>
int *p;
int main()
{
    int i = 0;
    p = &i;
    return 0;
} `,
		answerOptions: [
			{ answerID: 'a', answerText: 'Code/text segment'},
			{ answerID: 'b', answerText: 'Data segment'},
			{ answerID: 'c', answerText: 'Bss segment'},
			{ answerID: 'd', answerText: 'Stack'},
		],
		correctResponse: 'c',
	},
    {
		id: 44,
		questionText: 'Guess the Component.',
		img:"https://thumbs.dreamstime.com/b/close-up-microprocessor-timisoara-romania-march-via-south-bridge-controller-148263934.jpg?w=360",
		answerOptions: [
			{ answerID: 'a', answerText: 'Processor'},
			{ answerID: 'b', answerText: 'North Bridge'},
			{ answerID: 'c', answerText: 'South Bridge'},
			{ answerID: 'd', answerText: 'CMOS'},
		],
		correctResponse: 'c',
	},
    {
		id: 45,
		questionText: 'How many times i value is checked in the following C program?',
        code:
` #include <stdio.h>
int main()
{
    int i = 0;
    while (i < 3)
	i++;
    printf("In while loop");
} `,
		answerOptions: [
			{ answerID: 'a', answerText: '2'},
			{ answerID: 'b', answerText: '3'},
			{ answerID: 'c', answerText: '4'},
			{ answerID: 'd', answerText: '1'},
		],
		correctResponse: 'c',
	},

]