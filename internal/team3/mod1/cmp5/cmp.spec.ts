
import { Cmp8315Component } from './cmp';
describe('Cmp8315Component', () => {
  it('should add', () => {
    expect(new Cmp8315Component().add8315(1)).toBe(8316);
  });
});