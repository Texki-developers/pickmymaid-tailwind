import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

type Iprops = {
  children: React.ReactNode;
  isBlur?: boolean;
};

const ForPremium = ({ children, isBlur }: Iprops) => {
  const router = useRouter();
  return (
    <Box
      onClick={() => {
        if (isBlur) router.push('/pricing');
      }}
      filter={isBlur ? 'blur(3px)' : ''}
    >
      {children}
    </Box>
  );
};

export default ForPremium;
