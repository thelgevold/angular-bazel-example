
import { Cmp9569Component } from './cmp';
describe('Cmp9569Component', () => {
  it('should add', () => {
    expect(new Cmp9569Component().add9569(1)).toBe(9570);
  });
});