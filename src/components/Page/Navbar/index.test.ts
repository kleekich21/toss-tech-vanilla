import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';
import Navbar from './index';

jest.mock('../../../init', () => ({
  router: {
    push: jest.fn(),
  },
}));

describe('Navbar', () => {
  let navbar: HTMLElement;

  beforeEach(() => {
    jest.clearAllMocks();
    document.body.innerHTML = ''; // 테스트 간의 DOM 초기화
    navbar = Navbar();
    document.body.appendChild(navbar);
  });

  it('로고 및 toss tech text 이미지가 포함 된 a tag를 노출한다.', () => {
    expect(navbar).toBeInTheDocument();
    expect(navbar).toHaveClass('navbar');

    const link = screen.getByRole('link', {
      name: /토스 기술 블로그 클론, 토스 테크 클론/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');

    const logoImg = screen.getByAltText('toss logo image');
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveClass('logo');
    expect(logoImg).toHaveAttribute('src', './src/assets/images/logo.png');

    const titleImg = screen.getByAltText('toss tech title image');
    expect(titleImg).toBeInTheDocument();
    expect(titleImg).toHaveClass('title-img');
    expect(titleImg).toHaveAttribute('src', './src/assets/images/title.png');
  });
});
