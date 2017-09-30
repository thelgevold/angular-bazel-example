
import { Cmp7413Component } from './cmp';
describe('Cmp7413Component', () => {
  it('should add', () => {
    expect(new Cmp7413Component().add7413(1)).toBe(7414);
  });
});