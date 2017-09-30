
import { Cmp5161Component } from './cmp';
describe('Cmp5161Component', () => {
  it('should add', () => {
    expect(new Cmp5161Component().add5161(1)).toBe(5162);
  });
});