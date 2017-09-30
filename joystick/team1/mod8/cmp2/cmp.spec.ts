
import { Cmp9182Component } from './cmp';
describe('Cmp9182Component', () => {
  it('should add', () => {
    expect(new Cmp9182Component().add9182(1)).toBe(9183);
  });
});