import { Button, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { FaUnlock } from '@/components/atoms/Icons/Icons';
import { setAuthModal } from '@/lib/features/auth/authSlice';
import { addRedirection } from '@/lib/features/utilSlice/utileSlice';

const PremiumButton = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state?.auth?.user);

  const handleUnlocking = () => {
    localStorage.setItem('isUnlock', 'clicked');
    if (!user) {
      dispatch(setAuthModal('signup'));
      dispatch(addRedirection('/pricing'));
    } else {
      router.push('/pricing');
    }
  };

  return (
    <Button
      onClick={handleUnlocking}
      p='10px 10px'
      height={{ base: 'max-content', sm: '2rem' }}
      bg='#2899ff'
      _hover={{ bg: '#e3ae00' }}
      rightIcon={<Icon as={FaUnlock} />}
      border='none'
    >
      Unlock Contacts
    </Button>
  );
};

export default PremiumButton;
