
import { Cmp4597Component } from './cmp';
describe('Cmp4597Component', () => {
  it('should add', () => {
    expect(new Cmp4597Component().add4597(1)).toBe(4598);
  });
});