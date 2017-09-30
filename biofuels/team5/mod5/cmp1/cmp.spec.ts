
import { Cmp1551Component } from './cmp';
describe('Cmp1551Component', () => {
  it('should add', () => {
    expect(new Cmp1551Component().add1551(1)).toBe(1552);
  });
});