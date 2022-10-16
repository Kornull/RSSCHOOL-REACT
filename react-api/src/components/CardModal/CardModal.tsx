import React, { Component } from 'react';
import { AboutCard } from '../types/types';

import styles from './CardModal.module.scss';

type ModalProps = {
  infoPerson: AboutCard[];
  modalCondition: boolean;
  onClickModal: (stateModal: boolean) => void;
};

type ModalState = {
  modal: boolean;
};

class CardModal extends Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  handleClick = (ev: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    ev.stopPropagation();
    const elementDom = ev.target as HTMLElement;
    // console.log(elementDom.id);
    if (elementDom.id === 'close-modal') this.props.onClickModal(this.state.modal);
  };

  render() {
    return (
      <div className={styles.modal} onClick={this.handleClick} id="close-modal">
        <div className={styles.modalCard}>
          <ul>
            <li>
              <img className={styles.modalImage} src={this.props.infoPerson[0].image} alt="image" />
            </li>
            <li className={styles.modalList}>
              Dossier created: {this.props.infoPerson[0].created}
            </li>
            <li className={styles.modalList}>
              id: <span className={styles.modalText}>{this.props.infoPerson[0].id}</span>
            </li>
            <li className={styles.modalList}>
              Full name: <span className={styles.modalText}>{this.props.infoPerson[0].name}</span>
            </li>
            <li className={styles.modalList}>
              Species: <span className={styles.modalText}>{this.props.infoPerson[0].species}</span>
            </li>
            <li className={styles.modalList}>
              Status: <span className={styles.modalText}>{this.props.infoPerson[0].status}</span>
            </li>
            <li className={styles.modalList}>
              Gender: <span className={styles.modalText}>{this.props.infoPerson[0].gender}</span>
            </li>
            <li className={styles.modalList}>
              Location:{' '}
              <span className={styles.modalText}>{this.props.infoPerson[0].location!.name}</span>
            </li>
            <li className={styles.modalList}>
              Origin location:{' '}
              <span className={styles.modalText}>{this.props.infoPerson[0].origin!.name}</span>
            </li>
          </ul>
          <button
            className={styles.modalClose}
            onClick={this.handleClick}
            id="close-modal"
          ></button>
        </div>
      </div>
    );
  }
}

export default CardModal;
