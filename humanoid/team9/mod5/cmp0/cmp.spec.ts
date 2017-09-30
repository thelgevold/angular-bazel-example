
import { Cmp7950Component } from './cmp';
describe('Cmp7950Component', () => {
  it('should add', () => {
    expect(new Cmp7950Component().add7950(1)).toBe(7951);
  });
});