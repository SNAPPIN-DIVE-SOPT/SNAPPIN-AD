'use client'
import Button from '@/src/components/Button'
import { useRouter } from 'next/navigation';

type ClientFooterProps = {
  buttonText: string;
}
export default function ClientFooter({ buttonText }: ClientFooterProps) {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/login");
  }
  return (
    <Button buttonText={buttonText} onClick={handleButtonClick} className='mt-[5.1rem]' />
  );
}
