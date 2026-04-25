import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'nitinranganath.com',
    href: 'https://nitinranganath.com',
  },
  {
    social: 'email',
    link: 'www.chinmoy.dev@gmail.com',
    href: 'mailto:www.chinmoy.dev@gmail.com',
  },
  {
    social: 'github',
    link: 'chinmoy-2004',
    href: 'https://github.com/chinmoy-2004',
  },
  {
    social: 'linkedin',
    link: 'chinmoy-dutta-85940a29a',
    href: 'https://www.linkedin.com/in/chinmoy-dutta-85940a29a/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
