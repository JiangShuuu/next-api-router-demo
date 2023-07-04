'use client';
import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

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
  {
    name: 'layouthook',
    link: '/layouthook',
  },
];

export default function Menu() {
  const segments = useSelectedLayoutSegments();
  const active = console.log('get', segments);
  return (
    <div className='mr-2 border-r'>
      <ul className='menu rounded-box w-56'>
        {Items.map((item, idx) => (
          <li key={idx} className=''>
            {item.lists ? (
              <details open>
                <summary>
                  <Link href={item.link}>{item.name}</Link>
                </summary>
                <ul>
                  {item.lists.map((listItem, listIdx) => (
                    <li key={listIdx}>
                      <Link href={listItem.link}>{listItem.name}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <Link
                href={item.link}
                className={`${
                  item.name === segments[0] && 'bg-teal-600 text-white'
                }`}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
