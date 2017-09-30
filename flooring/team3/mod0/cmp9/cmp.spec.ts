
import { Cmp5309Component } from './cmp';
describe('Cmp5309Component', () => {
  it('should add', () => {
    expect(new Cmp5309Component().add5309(1)).toBe(5310);
  });
});