
import { Cmp8151Component } from './cmp';
describe('Cmp8151Component', () => {
  it('should add', () => {
    expect(new Cmp8151Component().add8151(1)).toBe(8152);
  });
});