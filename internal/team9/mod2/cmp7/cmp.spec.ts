
import { Cmp8927Component } from './cmp';
describe('Cmp8927Component', () => {
  it('should add', () => {
    expect(new Cmp8927Component().add8927(1)).toBe(8928);
  });
});