
import { Cmp9095Component } from './cmp';
describe('Cmp9095Component', () => {
  it('should add', () => {
    expect(new Cmp9095Component().add9095(1)).toBe(9096);
  });
});