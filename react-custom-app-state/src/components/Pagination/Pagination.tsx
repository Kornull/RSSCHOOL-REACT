import React, { useEffect, useReducer } from 'react';

import { useCardContext, useSearchContext } from '../Hooks';
import { ReducerButton } from './Pagination.utils';

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
      searchCard: '',
    });
  }, [setStateSearch, state.page, state.type, state.valueSearch]);

  return (
    <>
      {cards.results.length ? (
        <div className={styles.pagination} data-testid="search-pagination">
          <button
            className={styles.paginationButtons}
            onClick={() => dispatch({ ...stateSearch, typeClick: 'prev' })}
            disabled={+stateSearch.page === 1}
            data-testid="test-btn-prev"
          >
            {'<<'}
          </button>
          <div className={styles.paginationPage}>
            {+stateSearch.page === +cards.info.pages ? (
              <span data-testid="number-page">{stateSearch.page}</span>
            ) : (
              <span data-testid="number-pages">
                {stateSearch.page}...{cards.info.pages}
              </span>
            )}
          </div>
          <button
            className={styles.paginationButtons}
            onClick={() => dispatch({ ...stateSearch, typeClick: 'next' })}
            disabled={+stateSearch.page === +cards.info.pages}
            data-testid="test-btn-next"
          >
            {'>>'}
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
