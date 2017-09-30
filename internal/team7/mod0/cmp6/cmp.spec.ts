
import { Cmp8706Component } from './cmp';
describe('Cmp8706Component', () => {
  it('should add', () => {
    expect(new Cmp8706Component().add8706(1)).toBe(8707);
  });
});