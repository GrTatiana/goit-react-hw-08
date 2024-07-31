import css from "./Section.module.css";

export const Section = ({ children }) => {
  <section className={css.section}>
    <div className={css.container}>{children}</div>
  </section>;
};
