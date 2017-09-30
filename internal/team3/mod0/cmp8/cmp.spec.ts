
import { Cmp8308Component } from './cmp';
describe('Cmp8308Component', () => {
  it('should add', () => {
    expect(new Cmp8308Component().add8308(1)).toBe(8309);
  });
});