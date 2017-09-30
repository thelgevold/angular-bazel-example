
import { Cmp8850Component } from './cmp';
describe('Cmp8850Component', () => {
  it('should add', () => {
    expect(new Cmp8850Component().add8850(1)).toBe(8851);
  });
});