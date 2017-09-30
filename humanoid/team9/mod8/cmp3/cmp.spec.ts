
import { Cmp7983Component } from './cmp';
describe('Cmp7983Component', () => {
  it('should add', () => {
    expect(new Cmp7983Component().add7983(1)).toBe(7984);
  });
});