
import { Cmp8922Component } from './cmp';
describe('Cmp8922Component', () => {
  it('should add', () => {
    expect(new Cmp8922Component().add8922(1)).toBe(8923);
  });
});