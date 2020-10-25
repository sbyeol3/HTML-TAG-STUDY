const students = ['강은지','김유정','박현서','최성훈','홍유진','박지호','권윤일','김채리','한지호','김진이','김민호','강채연'];

students.sort();

for (let index in students){
  console.log(`번호: ${parseInt(index,10)+1}, 이름: ${students[index]}`);
}