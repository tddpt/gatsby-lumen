// @flow strict
import React from 'react';
import Author from './Author';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <h1></h1>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
