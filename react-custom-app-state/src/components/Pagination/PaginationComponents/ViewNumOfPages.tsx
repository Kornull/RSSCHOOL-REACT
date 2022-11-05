import React from 'react';

import { CardInfo, FormDataType } from 'components/Hooks';

import styles from '../Pagination.module.scss';

export type ViewPaginationProps = {
  stateSearch: FormDataType;
  cards: CardInfo;
};

export const ViewNumOfPages = ({ stateSearch, cards }: ViewPaginationProps) => {
  return (
    <div className={styles.paginationPage}>
      {+stateSearch.page === +cards.info.pages ? (
        <span data-testid="number-page">{stateSearch.page}</span>
      ) : (
        <span data-testid="number-pages">
          {stateSearch.page}...{cards.info.pages}
        </span>
      )}
    </div>
  );
};
