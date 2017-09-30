
import { Cmp7551Component } from './cmp';
describe('Cmp7551Component', () => {
  it('should add', () => {
    expect(new Cmp7551Component().add7551(1)).toBe(7552);
  });
});