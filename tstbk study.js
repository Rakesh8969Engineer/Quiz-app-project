const questions = [
    {
        'ques': "Full Form Of ASCII?",
        'a': "American Standard Code for Information Interchange",
        'b': "American States Coding For International Interchange",
        'c': "Aspect Standard of Costs intrelinked intercharges",
        'd': "Aeroplane Services of canada information interconnections",
        'correct': "a"




    }, {
        'ques': "HTML Stands For?",
        'a': "Hyper transfer markup linker",
        'b': "Hyper Text Markup Language",
        'c': "Hypo transfer maker lists",
        'd': "hyper text makeup language",
        'correct': "b"



    }, {

        'ques': "When C language was invented?",
        'a': "1999",
        'b': "2002",
        'c': "2005",
        'd': "1970",
        'correct': "d"

    }, {

        'ques': "Full Form of CSS?",
        'a': "Cascading style shareing",
        'b': "Cascading Style Sheets",
        'c': "Compare style share",
        'd': "compare sector section",
        'correct': "b"



    },
    {


        'ques': "DBMS Stands for?",
        'a': "Database Manipulation Scheme",
        'b': "Database Management System",
        'c': "datashow Buero managing skills",
        'd': "data structure base manage setup",
        'correct': "b"

    }
]
let index = 0;
let total = questions.length
let correct = 0, incorrect = 0;


const que_box = document.getElementById("que_box")
const ques_option = document.querySelectorAll(".options")
const loadQuestion = () => {
    if (index === total) {

        return endquiz();

    }
    form_reset();
    const data = questions[index];
    que_box.innerText = ` ${index + 1})    ${data.ques}`;
    ques_option[0].nextElementSibling.innerText = data.a;
    ques_option[1].nextElementSibling.innerText = data.b;
    ques_option[2].nextElementSibling.innerText = data.c;
    ques_option[3].nextElementSibling.innerText = data.d;

}
const submitquiz = () => {
    const data = questions[index];
    const Answer = getanswer();

    if (Answer === data.correct) {
        correct++;

    } else {

        incorrect++;

    }
    index++;
    loadQuestion();
    return;

}

const getanswer = () => {
    let anss;
    ques_option.forEach(
        (input) => {
            if (input.checked) {
                anss = input.value;
            



            }


        }
    )
return anss;

}
const form_reset = () => {
    ques_option.forEach(
        (input) => {

            input.checked = false;

        }


    )


}


const endquiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3>Thanks For Playing Quiz...The Quiz is Over..</h3>
    <h2>${correct}/${total} are correct</h2></div>
    `
}


loadQuestion();
