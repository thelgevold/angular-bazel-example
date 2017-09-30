
import { Cmp8438Component } from './cmp';
describe('Cmp8438Component', () => {
  it('should add', () => {
    expect(new Cmp8438Component().add8438(1)).toBe(8439);
  });
});