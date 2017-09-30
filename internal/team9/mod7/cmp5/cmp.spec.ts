
import { Cmp8975Component } from './cmp';
describe('Cmp8975Component', () => {
  it('should add', () => {
    expect(new Cmp8975Component().add8975(1)).toBe(8976);
  });
});