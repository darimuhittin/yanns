import classNames from 'util/classNames';

import React from 'react';

import { faCaretDown, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { InputGroup, Form, Button } from 'react-bootstrap';

import styles from './Header.module.scss';

// import {
//   // decrement,
//   increment
// } from 'slices/counterSlice';

const menus = [
  {
    name: 'BISIKLET',
    subMenus: [
      {
        name: 'ELEKTRIKLI BISIKLET',
        subMenus: [
          {
            name: 'E-DAG'
          },
          {
            name: 'E-SEHIR'
          },
          {
            name: 'E-ELEKTRIKLI'
          },
          {
            name: 'E-KATLANIR'
          }
        ]
      },
      {
        name: 'DAG BISIKLET',
        subMenus: [
          {
            name: 'E-DAG'
          },
          {
            name: 'E-SEHIR'
          },
          {
            name: 'E-ELEKTRIKLI'
          },
          {
            name: 'E-KATLANIR'
          }
        ]
      },
      {
        name: 'SEHIR BISIKLET',
        subMenus: [
          {
            name: 'E-DAG'
          },
          {
            name: 'E-SEHIR'
          },
          {
            name: 'E-ELEKTRIKLI'
          },
          {
            name: 'E-KATLANIR'
          }
        ]
      },
      {
        name: 'YOL BISIKLET',
        subMenus: [
          {
            name: 'E-DAG'
          },
          {
            name: 'E-SEHIR'
          },
          {
            name: 'E-ELEKTRIKLI'
          },
          {
            name: 'E-KATLANIR'
          }
        ]
      }
    ]
  },
  {
    name: 'YEDEK PARCA',
    subMenus: [
      {
        name: 'KOMPONENTLER',
        subMenus: [
          {
            name: 'E-DAG'
          },
          {
            name: 'E-SEHIR'
          },
          {
            name: 'E-ELEKTRIKLI'
          },
          {
            name: 'E-KATLANIR'
          }
        ]
      },
      {
        name: 'KOMPONENTLER',
        subMenus: [
          {
            name: 'E-DAG'
          },
          {
            name: 'E-SEHIR'
          },
          {
            name: 'E-ELEKTRIKLI'
          },
          {
            name: 'E-KATLANIR'
          }
        ]
      },
      {
        name: 'KOMPONENTLER',
        subMenus: [
          {
            name: 'E-DAG'
          },
          {
            name: 'E-SEHIR'
          },
          {
            name: 'E-ELEKTRIKLI'
          },
          {
            name: 'E-KATLANIR'
          }
        ]
      },
      {
        name: 'KOMPONENTLER',
        subMenus: [
          {
            name: 'E-DAG'
          },
          {
            name: 'E-SEHIR'
          },
          {
            name: 'E-ELEKTRIKLI'
          },
          {
            name: 'E-KATLANIR'
          }
        ]
      }
    ]
  },
  {
    name: 'AKSESUAR',
    subMenus: [
      {
        name: 'ELEKTRIKLI BISIKLET',
        subMenus: [
          {
            name: 'E-DAG'
          },
          {
            name: 'E-SEHIR'
          },
          {
            name: 'E-ELEKTRIKLI'
          },
          {
            name: 'E-KATLANIR'
          }
        ]
      },
      {
        name: 'DAG BISIKLET',
        subMenus: [
          {
            name: 'E-DAG'
          },
          {
            name: 'E-SEHIR'
          },
          {
            name: 'E-ELEKTRIKLI'
          },
          {
            name: 'E-KATLANIR'
          }
        ]
      },
      {
        name: 'SEHIR BISIKLET',
        subMenus: [
          {
            name: 'E-DAG'
          },
          {
            name: 'E-SEHIR'
          },
          {
            name: 'E-ELEKTRIKLI'
          },
          {
            name: 'E-KATLANIR'
          }
        ]
      },
      {
        name: 'YOL BISIKLET',
        subMenus: [
          {
            name: 'E-DAG'
          },
          {
            name: 'E-SEHIR'
          },
          {
            name: 'E-ELEKTRIKLI'
          },
          {
            name: 'E-KATLANIR'
          }
        ]
      }
    ]
  },
  {
    name: 'GIYIM',
    subMenus: [
      {
        name: 'ELEKTRIKLI BISIKLET',
        subMenus: [
          {
            name: 'E-DAG'
          },
          {
            name: 'E-SEHIR'
          },
          {
            name: 'E-ELEKTRIKLI'
          },
          {
            name: 'E-KATLANIR'
          }
        ]
      },
      {
        name: 'DAG BISIKLET',
        subMenus: [
          {
            name: 'E-DAG'
          },
          {
            name: 'E-SEHIR'
          },
          {
            name: 'E-ELEKTRIKLI'
          },
          {
            name: 'E-KATLANIR'
          }
        ]
      },
      {
        name: 'SEHIR BISIKLET',
        subMenus: [
          {
            name: 'E-DAG'
          },
          {
            name: 'E-SEHIR'
          },
          {
            name: 'E-ELEKTRIKLI'
          },
          {
            name: 'E-KATLANIR'
          }
        ]
      },
      {
        name: 'YOL BISIKLET',
        subMenus: [
          {
            name: 'E-DAG'
          },
          {
            name: 'E-SEHIR'
          },
          {
            name: 'E-ELEKTRIKLI'
          },
          {
            name: 'E-KATLANIR'
          }
        ]
      }
    ]
  }
];
const Header = () => {
  return (
    <div className={styles.header}>
      {/* HEADER */}
      <div className={styles.header__container}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <Link href={'/'}>
              <a>
                <Image src="/logo.png" width={140} height={40} className="" />
              </a>
            </Link>
            <div className={styles['header__icon-container']}>
              <InputGroup>
                <Form.Control placeholder="Arama..." aria-label="Arama bolgesi" />
                <Form.Select aria-label="Default select example">
                  <option>Tum Kategoriler</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Button variant="outline-secondary">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </InputGroup>
              <FontAwesomeIcon icon={faCartShopping} className="ms-4" />
            </div>
          </div>
          <ul className={classNames('d-flex', styles.header__menuContainer)}>
            {menus.map((menu) => {
              return (
                <li key={menu.name} className={classNames('me-4', styles.menu__level1)}>
                  <a href="#">
                    {menu.name}
                    <FontAwesomeIcon icon={faCaretDown} className="ms-2" />
                  </a>
                  <div className={styles.menu__sub}>
                    {menu.subMenus.map((subMenu) => {
                      return (
                        <div key={subMenu.name} className={styles.menu__subContainer}>
                          <span style={{ fontSize: 14 }}>{subMenu.name}</span>
                          <ul>
                            {subMenu.subMenus.map((doubleSub) => (
                              <li key={doubleSub.name}>
                                <span style={{ fontSize: 10 }}>{doubleSub.name}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
