import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Visibility',
    image: '/img/undraw_growth_curve_re_t5s7.svg',
    description: (
      <>
        Cyscale helps you keep track of your cloud assets. Whether you have 4
        users, 3 VMs, and a database, or a multi-region cloud architecture
        leveraging services from multiple cloud providers, keeping your asset
        inventory up to date is no longer a concern.
      </>
    ),
  },
  {
    title: 'Security',
    image: '/img/undraw_security_re_a2rk.svg',
    description: (
      <>
        With hundreds out of the box controls that help you identify and fix
        misconfigurations and vulnerabilities covering a wide range of cloud
        services, Cyscale is your platform for maintaing a high security
        posture.
      </>
    ),
  },
  {
    title: 'Compliance',
    image: '/img/undraw_security_on_re_e491.svg',
    description: (
      <>
        Whether you are trying to achieve and maintain compliance with various
        industry standards such as ISO 27001, PCI DSS, and SOC 2, or you have
        your own internal standards, Cyscale has you covered.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          alt={title}
          src={useBaseUrl(image)}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
