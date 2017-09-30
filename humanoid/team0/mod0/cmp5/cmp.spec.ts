
import { Cmp7005Component } from './cmp';
describe('Cmp7005Component', () => {
  it('should add', () => {
    expect(new Cmp7005Component().add7005(1)).toBe(7006);
  });
});