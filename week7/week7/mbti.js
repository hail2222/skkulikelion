const main=document.querySelector("#main");
const qna=document.querySelector("#qna");
const result=document.querySelector("#result");

const endPoint=10;
const select=[0,0,0,0];

function addAnswer(answerText,qIdx,idx){
    var a=documnet.querySelector(".aBox");
    var answer=document.createElement('button');

    answer.classList.add('answerList');
    answer.slassList.add('my-5');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');

    answer.classList.add('fadeIn');
    a.appendChild(answer);

    answer.innerHTML=answerText;

    answer.addEventListener("click",function(){
        var children=documnet.querySelectorAll('.answerList');
        for(let i=0;i<children.length;i==){
            children[i].disabled=true;
            children[i].style.WebkitAnimation='fadeOut 0.5s';
            children[i].style.animation="fadeOut 0.5s";

        }
        setTimeout(()=>{
            var target=qnaList[qIdx].a[idx].type;
            for(let i=0;i<target.length;i++){
                select[target[i]]+=1;
            }
            for(let i=0;i<children.length;i++){
                children[i].style.display='none';
            }
            goNext(++qIdx);
            },450)
        },false)
            
}
function calResult(){
    var result=select.indexOf(Math.max(...select));
    return result;
}
function setResult(){
    let point=calResult():
    const resultNameIntro=documnet.querySelctor('.resultIntro');
    resultNameIntro.innerHTML=infoList[poin].nameIntro;

    const rersultName=document.querySelctor('.resultName');
    resultNameIntro.innerHTML=infoList[point].name;

    var resultImg=document.createElement('img');
    const imgDiv=document.querySelctor("#resultImg");
    var imgURL='img/image-'+point+'.png';

    resultImg.src=imgURL;
    resultImg.alt=point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);

    const resultDesc1=document.querySelector('.resultDesc1');
    const resultDescTItle1=document.querySelector('.resultDescTitle');
}