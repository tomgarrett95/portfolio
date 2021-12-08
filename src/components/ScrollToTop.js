
import { useEffect, useState } from 'react'
import { FiArrowUpCircle } from "react-icons/fi";
import { classNames } from '../utils/ClassNames';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (element.scroll > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    element.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    element.addEventListener('scroll', toggleVisibility)

    return () => {
      element.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-2 right-2">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'inline-flex items-center p-3 rounded-full shadow-sm text-white bg-pink-600 transition-opacity hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500',
        )}
      >
        <FiArrowUpCircle className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}