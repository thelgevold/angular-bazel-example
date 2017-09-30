
import { Cmp8226Component } from './cmp';
describe('Cmp8226Component', () => {
  it('should add', () => {
    expect(new Cmp8226Component().add8226(1)).toBe(8227);
  });
});