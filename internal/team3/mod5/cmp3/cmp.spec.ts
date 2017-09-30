
import { Cmp8353Component } from './cmp';
describe('Cmp8353Component', () => {
  it('should add', () => {
    expect(new Cmp8353Component().add8353(1)).toBe(8354);
  });
});