import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const PaginationStyles = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  margin: auto;
  text-align: center;
  background-color: var(--white);
  a {
    color: black;
  }
  .leftCaret {
    color: black;
    font-size: 3rem;
    font-weight: bold;
    float: left;
  }
  .rightCaret {
    color: black;
    font-size: 3rem;
    font-weight: bold;
    float: right;
  }
  & > * {
    padding: 1rem;
    flex: 1;
    border-right: 1px solid var(--grey);
    text-decoration: none;
    &[aria-current],
    &.current {
      color: var(--red);
    }
    &[disabled] {
      pointer-events: none;
      color: var(--grey);
    }
  }
  @media (max-width: 800px) {
    font-size: 1.4rem;
  }
`;

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  // make some variables
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;
  return (
    <PaginationStyles>
      <Link
        title="Prev Page"
        disabled={!hasPrevPage}
        to={`${base}/${prevPage}`}
      >
        <span className="leftCaret">
          <AiFillCaretLeft />
        </span>
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          className={currentPage === 1 && i === 0 ? 'current' : ''}
          to={`${base}/${i > 0 ? i + 1 : ''}`}
          key={`page${i}`}
        >
          {i + 1}
        </Link>
      ))}
      <Link
        title="Next Page"
        disabled={!hasNextPage}
        to={`${base}/${nextPage}`}
      >
        <span className="rightCaret">
          <AiFillCaretRight />
        </span>
      </Link>
    </PaginationStyles>
  );
}
