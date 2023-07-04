import React from 'react';
import Link from 'next/link';

interface Item {
  name: string;
  link: string;
}

const Items: Item[] = [
  {
    name: 'index',
    link: '/',
  },
  {
    name: 'daisy',
    link: '/daisy',
  },
];

export default function Menu() {
  return (
    <div className='mr-2 border-r'>
      <ul className='menu rounded-box w-56'>
        {Items.map((item) => {
          return (
            <li>
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })}

        {/* <li>
        <details open>
          <summary>Parent</summary>
          <ul>
            <li>
              <a>level 2 item 1</a>
            </li>
            <li>
              <a>level 2 item 2</a>
            </li>
            <li>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li>
                    <a>level 3 item 1</a>
                  </li>
                  <li>
                    <a>level 3 item 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li> */}
      </ul>
    </div>
  );
}
