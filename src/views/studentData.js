import React from 'react';
import { Row } from 'reactstrap';
import imageAguirre from '../assets/img/faces/clem-onojeghuo-2.jpg';
import imageCampagne from '../assets/utd-img/Campagne.jpg';
import imageCastaneda from '../assets/utd-img/castañeda.jpg';
import imageGarcia from '../assets/img/faces/clem-onojeghuo-2.jpg';
import imageGomez from '../assets/img/faces/clem-onojeghuo-2.jpg';
import imageGonzalez from '../assets/utd-img/GonzálezHerrera.png';
import imageGurrola from '../assets/utd-img/GurrolaAntuna.jpg';
// import imageHernandez from '../assets/utd-img/hernandez.jpg';
import imageHerrera from '../assets/utd-img/Herrera_Ortiz.jpg';
import imageIbarra from '../assets/utd-img/Ibarra.JPG';
import imageLeon from '../assets/utd-img/Leon_Quintanaa.jpeg';
import imageLuna from '../assets/utd-img/luna.jpeg';
import imageManzanilla from '../assets/utd-img/manzanilla.jpg';
import imageOntiveros from '../assets/utd-img/ontiveros.png';
import imageRenteria from '../assets/img/faces/clem-onojeghuo-2.jpg';
import imageReyna from '../assets/utd-img/reyna.jpg';
import imageRios from '../assets/utd-img/IMG_20240912_164657-transformed.jpeg';
import imageRodriguez from '../assets/img/faces/clem-onojeghuo-2.jpg';
import imageSanchez from '../assets/utd-img/Sanchez_Daniel.jpeg';
import imageSoto from '../assets/utd-img/soto cervantes.jpg';
import imageSoto1 from '../assets/utd-img/SotoGraciano.jpg';
// import imageTorres from '../assets/utd-img/torres.jpg';
import imageVallejo from '../assets/utd-img/vallejo.jpg';
import imageZaldivar from '../assets/utd-img/zaldivar.jpeg';
import Dashboard from './Dashboard';

const studentData = [
    { studentNumber: 1, studentName: 'Cristopher Aguirre', imageSrc: imageAguirre },
    { studentNumber: 2, studentName: 'Gustavo Campagne', imageSrc: imageCampagne },
    { studentNumber: 3, studentName: 'Bernardo Castañeda', imageSrc: imageCastaneda },
    { studentNumber: 4, studentName: 'Carlos Ivan Garcia', imageSrc: imageGarcia },
    // { studentNumber: 5, studentName: 'Eduardo Garcia', imageSrc: imageGarcia },
    { studentNumber: 6, studentName: 'Alan Nahum Gomez', imageSrc: imageGomez },
    { studentNumber: 7, studentName: 'Diego Gonzalez', imageSrc: imageGonzalez },
    { studentNumber: 8, studentName: 'Jonathan Gurrola', imageSrc: imageGurrola },
    // { studentNumber: 9, studentName: 'Fernado Hernandez', imageSrc: imageHernandez },
    { studentNumber: 10, studentName: 'Paola Herrera Ortiz', imageSrc: imageHerrera },
    { studentNumber: 11, studentName: 'Marlenne Ibarra', imageSrc: imageIbarra },
    { studentNumber: 12, studentName: 'Graciela Irene Leon', imageSrc: imageLeon },
    { studentNumber: 13, studentName: 'Luis Luna Hernandez', imageSrc: imageLuna },
    { studentNumber: 14, studentName: 'Miguel Manzanilla', imageSrc: imageManzanilla },
    { studentNumber: 15, studentName: 'Luis Ontiveros', imageSrc: imageOntiveros },
    { studentNumber: 16, studentName: 'Angel Renteria', imageSrc: imageRenteria },
    { studentNumber: 17, studentName: 'Samuel Reyna', imageSrc: imageReyna },
    { studentNumber: 18, studentName: 'Alexis Rios', imageSrc: imageRios },
    { studentNumber: 19, studentName: 'Ehiran Rodriguez', imageSrc: imageRodriguez },
    { studentNumber: 20, studentName: 'Daniel Sanchez', imageSrc: imageSanchez },
    { studentNumber: 21, studentName: 'Alma Diana Soto', imageSrc: imageSoto },
    { studentNumber: 22, studentName: 'Victor Soto', imageSrc: imageSoto1 },
    // { studentNumber: 23, studentName: 'Derek Omar Torres', imageSrc: imageTorres },
    { studentNumber: 24, studentName: 'Edgar Vallejo', imageSrc: imageVallejo },
    { studentNumber: 25, studentName: 'Mauro Zaldivar', imageSrc: imageZaldivar }  // Agrega más datos según sea necesario
];

const StudentList = () => {
  return (
    <div className="content">
    <Row>
      {studentData.map((student, index) => (
        <Dashboard
          key={index}
          studentNumber={student.studentNumber}
          studentName={student.studentName}
          imageSrc={student.imageSrc}
        />
      ))}
    </Row>
    </div>

  );
};

export default StudentList;
