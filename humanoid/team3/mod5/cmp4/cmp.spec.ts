
import { Cmp7354Component } from './cmp';
describe('Cmp7354Component', () => {
  it('should add', () => {
    expect(new Cmp7354Component().add7354(1)).toBe(7355);
  });
});