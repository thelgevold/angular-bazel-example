
import { Cmp1780Component } from './cmp';
describe('Cmp1780Component', () => {
  it('should add', () => {
    expect(new Cmp1780Component().add1780(1)).toBe(1781);
  });
});