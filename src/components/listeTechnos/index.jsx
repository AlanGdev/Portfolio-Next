'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ListeTechnos({ technos }) {
  const [domaines, setDomaines] = useState({});

  useEffect(() => {
    const domainesTemp = {};
    technos.map((techno) => {
      if (!domainesTemp[techno.domaine]) {
        domainesTemp[techno.domaine] = [];
      }
      domainesTemp[techno.domaine].push(techno);
    });
    setDomaines(domainesTemp);
    console.log(domainesTemp);
  }, [technos]);
  return (
    <>
      <div className="mt-4 flex flex-wrap gap-8">
        {' '}
        {Object.keys(domaines).map((domaine) => (
          <div key={domaine}>
            <h3 className="text-xl font-bold">{domaine}</h3>
            <ul>
              {domaines[domaine].map((techno) => (
                <li key={techno._id} className="px-2 text-sm">
                  <div className="flex h-16 items-center">
                    {' '}
                    <Image
                      src={techno.image}
                      width={50}
                      height={50}
                      className="me-2"
                    />
                    {techno.nom}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
