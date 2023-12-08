import styles from '@/ui/styles/shared/highlightedText.module.css'
export default function HighlightedText({firstText , highlightedText}) {
  return (
    <>
      <span className={styles.highlightedText_span}>
        {highlightedText}
      </span>
      <h2 className={styles.highlightedText_h2}>
        {firstText}
      </h2>
    </>
  )
}
