
import { Cmp8862Component } from './cmp';
describe('Cmp8862Component', () => {
  it('should add', () => {
    expect(new Cmp8862Component().add8862(1)).toBe(8863);
  });
});