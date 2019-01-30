import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import '../styles/pagination.scss';

class CustomPagination extends React.Component {
  componentWillMount() {
    const {
      mobile, onPageChange, totalPage, currentPage, maxPageSize
    } = this.props;

    this.renderElements(mobile, currentPage, onPageChange, totalPage, maxPageSize);
  }

  componentWillReceiveProps(nextProps) {
    const {
      currentPage, totalPage, maxPageSize, mobile
    } = this.props;
    if (currentPage !== nextProps.currentPage
      || totalPage !== nextProps.totalPage
      || maxPageSize !== nextProps.maxPageSize
      || mobile !== nextProps.mobile) {
      const {
        mobile, currentPage, onPageChange, totalPage, maxPageSize
      } = nextProps;
      this.renderElements(mobile, currentPage, onPageChange, totalPage, maxPageSize);
    }
  }

  renderElements = (mobile, currentPage, onPageChange, totalPage, maxPageSize) => {
    const elements = [];

    const maxPage = maxPageSize > totalPage ? totalPage : maxPageSize;

    if (maxPageSize < totalPage || mobile) {
      const prevElement = (
        <li key="prev" className={`page-item prev${currentPage <= 1 ? ' disabled' : ''}`}>
          <button type="button" className="page-link" onClick={() => onPageChange('prev')} tabIndex="-1">
            <FontAwesomeIcon icon={faChevronLeft} size="xs" />
          </button>
        </li>
      );
      elements.push(prevElement);
    }

    if (mobile) {
      const element = (
        <p className="paging-mobile" key="1">
          <span className="current-page">{currentPage}</span>
          /
          <span className="total-page">{totalPage}</span>
        </p>
      );
      elements.push(element);
    } else {
      let startIndex = currentPage > Math.ceil(maxPage / 2)
      && currentPage <= totalPage ? currentPage - Math.ceil(maxPage / 2) : 0;

      if (startIndex + maxPage > totalPage) {
        startIndex = totalPage - maxPage;
      }

      for (let i = 0; i < maxPage; i++) {
        const element = (
          <li key={i} className={`page-item${(i + startIndex + 1) === currentPage ? ' active' : ''}`}>
            <button
              type="button"
              className="page-link"
              data-link={i + startIndex + 1}
              onClick={() => onPageChange(i + startIndex + 1)}
            >
              {i + startIndex + 1}
            </button>
          </li>
        );
        elements.push(element);
      }
    }


    if (maxPageSize < totalPage || mobile) {
      const nextElement = (
        <li key="next" className={`page-item next${currentPage >= totalPage ? ' disabled' : ''}`}>
          <button type="button" className="page-link" onClick={() => onPageChange('next')} tabIndex="-1">
            <FontAwesomeIcon icon={faChevronRight} size="xs" />
          </button>
        </li>
      );
      elements.push(nextElement);
    }


    this.setState({
      elements
    });
  }

  render() {
    const { mobile } = this.props;
    const { elements } = this.state;

    return (
      <ul className={`pagination custom-pagination${mobile ? ' mobile' : ''}`}>
        {elements}
      </ul>
    );
  }
}

CustomPagination.defaultProps = {
  mobile: false,
  maxPageSize: 4
};

CustomPagination.propTypes = {
  mobile: PropTypes.bool,
  onPageChange: PropTypes.func.isRequired,
  totalPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  maxPageSize: PropTypes.number
};

export default CustomPagination;
