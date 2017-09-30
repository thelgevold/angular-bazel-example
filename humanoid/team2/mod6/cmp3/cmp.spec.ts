
import { Cmp7263Component } from './cmp';
describe('Cmp7263Component', () => {
  it('should add', () => {
    expect(new Cmp7263Component().add7263(1)).toBe(7264);
  });
});