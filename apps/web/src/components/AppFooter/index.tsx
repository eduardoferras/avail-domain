import S from "./styles.module.scss";

export default function AppFooter() {
  return (
    <footer className={S.footer}>
      <p className={S.footer__content}>
        Copyright AvailDomain {new Date().getFullYear()} - Seu consultor de
        Domínios
      </p>
    </footer>
  );
}
