
import { Cmp9250Component } from './cmp';
describe('Cmp9250Component', () => {
  it('should add', () => {
    expect(new Cmp9250Component().add9250(1)).toBe(9251);
  });
});