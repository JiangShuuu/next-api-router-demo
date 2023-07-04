import React from 'react';
import Link from 'next/link';

interface Item {
  name: string;
  link: string;
  lists?: Item[];
}

const Items: Item[] = [
  {
    name: 'index',
    link: '/',
  },
  {
    name: 'daisy',
    link: '/daisy',
    lists: [
      {
        name: 'index',
        link: '/daisy',
      },
      {
        name: 'setting',
        link: '/daisy/setting',
      },
    ],
  },
];

export default function Menu() {
  return (
    <div className='mr-2 border-r'>
      <ul className='menu rounded-box w-56'>
        {Items.map((item) => {
          if (item.lists) {
            return (
              <li>
                <details open>
                  <summary>
                    <Link href={item.link}>{item.name}</Link>
                  </summary>
                  <ul>
                    {item.lists?.map((item) => {
                      return (
                        <li>
                          <Link href={item.link}>{item.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </details>
              </li>
            );
          } else {
            return (
              <li>
                <Link href={item.link}>{item.name}</Link>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
