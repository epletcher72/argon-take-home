import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterButton text="Home" url="https://argon-ai.com" />
      {divider}
      <FooterButton text="About" url="https://argon-ai.com/about" />
      {divider}
      <FooterButton text="Contact" url="https://argon-ai.com/contact" />
    </footer>
  );
}

type FooterButtonProps = {
  text: string;
  url: string;
};

function FooterButton({ text, url }: FooterButtonProps) {
  return (
    <a
      className={styles.footerbutton}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}

const divider = <span className={styles.divider}>|</span>;
