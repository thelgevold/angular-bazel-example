
import { Cmp7761Component } from './cmp';
describe('Cmp7761Component', () => {
  it('should add', () => {
    expect(new Cmp7761Component().add7761(1)).toBe(7762);
  });
});