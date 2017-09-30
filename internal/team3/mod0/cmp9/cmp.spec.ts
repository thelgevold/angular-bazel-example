
import { Cmp8309Component } from './cmp';
describe('Cmp8309Component', () => {
  it('should add', () => {
    expect(new Cmp8309Component().add8309(1)).toBe(8310);
  });
});