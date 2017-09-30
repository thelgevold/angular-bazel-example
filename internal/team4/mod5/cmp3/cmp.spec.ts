
import { Cmp8453Component } from './cmp';
describe('Cmp8453Component', () => {
  it('should add', () => {
    expect(new Cmp8453Component().add8453(1)).toBe(8454);
  });
});