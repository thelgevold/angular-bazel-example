
import { Cmp9094Component } from './cmp';
describe('Cmp9094Component', () => {
  it('should add', () => {
    expect(new Cmp9094Component().add9094(1)).toBe(9095);
  });
});