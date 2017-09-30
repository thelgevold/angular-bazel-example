
import { Cmp7760Component } from './cmp';
describe('Cmp7760Component', () => {
  it('should add', () => {
    expect(new Cmp7760Component().add7760(1)).toBe(7761);
  });
});