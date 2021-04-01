import styles from './Iframe.module.scss';

const iFrame = ({ ratio = "1/1", ...rest }) => {
  return (
    <div className={styles.iframe}>
      <iframe {...rest} />
    </div>
  )
}

export default iFrame;