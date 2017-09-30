
import { Cmp9140Component } from './cmp';
describe('Cmp9140Component', () => {
  it('should add', () => {
    expect(new Cmp9140Component().add9140(1)).toBe(9141);
  });
});