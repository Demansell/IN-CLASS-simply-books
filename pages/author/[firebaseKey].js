import { useRouter } from 'next/router';

export default function ViewAuthor() {
  const router = useRouter();
  const { firebaseKEY } = router.query;
  return <div> New Authors Here {firebaseKEY} </div>;
}
