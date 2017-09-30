
import { Cmp9075Component } from './cmp';
describe('Cmp9075Component', () => {
  it('should add', () => {
    expect(new Cmp9075Component().add9075(1)).toBe(9076);
  });
});