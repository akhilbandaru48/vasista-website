    import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

const Breadcrumb = ({ items }) => {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol className={styles.breadcrumbList}>
        {items.map((item, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            {index === items.length - 1 ? (
              <span className={styles.currentPage} aria-current="page">
                {item.label}
              </span>
            ) : (
              <>
                <Link to={item.path} className={styles.breadcrumbLink}>
                  {item.label}
                </Link>
                <span className={styles.separator} aria-hidden="true">
                  /
                </span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb; 