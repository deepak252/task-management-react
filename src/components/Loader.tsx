import classNames from 'classnames'
import ModalWrapper from './ModalWrapper'

type SpinnerProps = {
  className?: string
  center?: boolean
}
const Spinner = ({ className, center }: SpinnerProps) => {
  return (
    <div
      className={classNames({
        'absolute-center': center,
      })}
    >
      <div className={classNames('spinner', className)} role="status"></div>
    </div>
  )
}

const Loader = ({ isLoading }: { isLoading?: boolean }) => {
  return (
    isLoading && (
      <ModalWrapper isOpen={isLoading} className="z-loader">
        <Spinner center />
      </ModalWrapper>
    )
  )
}

export { Spinner }
export default Loader
