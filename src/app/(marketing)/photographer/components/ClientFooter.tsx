'use client'
import Button from '@/src/components/Button'

export default function ClientFooter() {
const handleButtonClick = () => {
        console.log('작가 입점 방법 알아보기 클릭');
    }
  return (
    <Button buttonText="작가 입점 방법 알아보기" onClick={handleButtonClick} className='mt-[5.1rem]' />
  )
}
