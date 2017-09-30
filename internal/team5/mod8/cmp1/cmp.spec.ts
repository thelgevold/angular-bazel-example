
import { Cmp8581Component } from './cmp';
describe('Cmp8581Component', () => {
  it('should add', () => {
    expect(new Cmp8581Component().add8581(1)).toBe(8582);
  });
});