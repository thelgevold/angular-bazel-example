
import { Cmp4551Component } from './cmp';
describe('Cmp4551Component', () => {
  it('should add', () => {
    expect(new Cmp4551Component().add4551(1)).toBe(4552);
  });
});