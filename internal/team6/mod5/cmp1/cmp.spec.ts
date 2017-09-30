
import { Cmp8651Component } from './cmp';
describe('Cmp8651Component', () => {
  it('should add', () => {
    expect(new Cmp8651Component().add8651(1)).toBe(8652);
  });
});