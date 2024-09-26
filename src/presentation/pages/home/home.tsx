import * as S from '@/presentation/pages/home/home.styles';

export default function Home() {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.png" alt="Logo Next.js" />
      <S.Title>Next.js Boilerplate</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS and Styled Components
      </S.Description>
      <S.Illustration
        src="/img/coding.svg"
        alt="A developer using a computer."
      />
    </S.Wrapper>
  );
}
