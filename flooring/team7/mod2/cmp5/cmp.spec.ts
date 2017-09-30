
import { Cmp5725Component } from './cmp';
describe('Cmp5725Component', () => {
  it('should add', () => {
    expect(new Cmp5725Component().add5725(1)).toBe(5726);
  });
});