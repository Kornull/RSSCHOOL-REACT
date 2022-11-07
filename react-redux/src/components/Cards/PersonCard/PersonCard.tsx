// import React from 'react';
// // import { useCardContext } from '../../Hooks';
// import { useNavigate } from 'react-router-dom';
// import { AboutCard } from 'components/types/types';
// import PersonDescription from './PersonDescription';

// import styles from './PersonCard.module.scss';
// import { useSelector } from 'react-redux';
// import { addCards } from 'store/cards-reducer/cardsSlice';
// // import { addpayload } from 'store/payload-reducer/payloadSlice';

// enum PersonClose {
//   closeId = 'modal-close',
// }

// const PersonCard = () => {
//   // const { payload, setpayload } = useCardContext();
//   const { payload } = useSelector(addCards);
//   const navigate = useNavigate();

//   const handleClick = (ev: React.MouseEvent<HTMLButtonElement>): void => {
//     ev.stopPropagation();
//     navigate(-1);
//     setpayload({
//       ...payload,
//       viewPersonCard: false,
//     });
//   };

//   const personInfo = payload.results!.find(
//     (card) => card.id.toString() === payload.personId
//   ) as AboutCard;

//   return (
//     <div className={styles.person} id={`person-${PersonClose.closeId}`} data-testid="modal-card">
//       <div className={styles.personCard} data-testid="describe-card">
//         <ul>
//           <li>
//             <img className={styles.personImage} src={personInfo.image} alt="image" />
//           </li>
//           {personInfo.created ? (
//             <PersonDescription title="Dossier created" describe={personInfo.created} />
//           ) : (
//             <PersonDescription title="Dossier created" describe={''} />
//           )}

//           <PersonDescription title="ID" describe={personInfo.id} />
//           <PersonDescription title="Full name" describe={personInfo.name} />
//           <PersonDescription title="Species" describe={personInfo.species} />
//           <PersonDescription title="Status" describe={personInfo.status} />
//           <PersonDescription title="Gender" describe={personInfo.gender} />
//           <PersonDescription title="Location" describe={personInfo.location!.name} />
//           <PersonDescription title="Origin location" describe={personInfo.origin!.name} />
//         </ul>
//         <button
//           className={styles.personClose}
//           onClick={handleClick}
//           id={PersonClose.closeId}
//           data-testid="close-person"
//         >
//           Back
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PersonCard;
