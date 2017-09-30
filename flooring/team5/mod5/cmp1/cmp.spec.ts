
import { Cmp5551Component } from './cmp';
describe('Cmp5551Component', () => {
  it('should add', () => {
    expect(new Cmp5551Component().add5551(1)).toBe(5552);
  });
});