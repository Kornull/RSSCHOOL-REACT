import React, { useEffect, useReducer } from 'react';

import { useCardContext, useSearchContext } from '../Hooks';
import { ReducerButton } from './ReducerButton';

import styles from './Pagination.module.scss';

const Pagination = () => {
  const { cards } = useCardContext();
  const { stateSearch, setStateSearch } = useSearchContext();
  const [state, dispatch] = useReducer(ReducerButton, stateSearch);

  useEffect(() => {
    setStateSearch({
      type: state.type,
      valueSearch: state.valueSearch,
      page: state.page,
      searchCard: state.searchCard,
    });
  }, [setStateSearch, state.page, state.type, state.valueSearch]);

  return (
    <>
      <div className={styles.pagination}>
        <button
          className={styles.paginationButtons}
          onClick={() => dispatch({ ...stateSearch, typeClick: 'prev' })}
          disabled={+stateSearch.page === 1}
        >
          {'<<'}
        </button>
        <div className={styles.paginationPage}>
          {+stateSearch.page === +cards.info.pages ? (
            <span>{stateSearch.page}</span>
          ) : (
            <span>
              {stateSearch.page}...{cards.info.pages}
            </span>
          )}
        </div>
        <button
          className={styles.paginationButtons}
          onClick={() => dispatch({ ...stateSearch, typeClick: 'next' })}
          disabled={+stateSearch.page === +cards.info.pages}
        >
          {'>>'}
        </button>
      </div>
    </>
  );
};

export default Pagination;
