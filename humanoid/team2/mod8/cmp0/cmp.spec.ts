
import { Cmp7280Component } from './cmp';
describe('Cmp7280Component', () => {
  it('should add', () => {
    expect(new Cmp7280Component().add7280(1)).toBe(7281);
  });
});