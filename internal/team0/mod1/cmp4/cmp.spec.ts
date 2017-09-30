
import { Cmp8014Component } from './cmp';
describe('Cmp8014Component', () => {
  it('should add', () => {
    expect(new Cmp8014Component().add8014(1)).toBe(8015);
  });
});