
import { Cmp8362Component } from './cmp';
describe('Cmp8362Component', () => {
  it('should add', () => {
    expect(new Cmp8362Component().add8362(1)).toBe(8363);
  });
});