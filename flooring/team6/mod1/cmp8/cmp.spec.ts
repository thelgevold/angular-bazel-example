
import { Cmp5618Component } from './cmp';
describe('Cmp5618Component', () => {
  it('should add', () => {
    expect(new Cmp5618Component().add5618(1)).toBe(5619);
  });
});