
import { Cmp7421Component } from './cmp';
describe('Cmp7421Component', () => {
  it('should add', () => {
    expect(new Cmp7421Component().add7421(1)).toBe(7422);
  });
});