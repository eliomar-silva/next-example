import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Heading, HeadingProps } from '.';

const props: HeadingProps = {
  title: 'any',
};

describe('<Heading />', () => {
  it('should render', () => {
    renderTheme(<Heading {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
