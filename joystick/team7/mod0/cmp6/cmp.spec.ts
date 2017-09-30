
import { Cmp9706Component } from './cmp';
describe('Cmp9706Component', () => {
  it('should add', () => {
    expect(new Cmp9706Component().add9706(1)).toBe(9707);
  });
});