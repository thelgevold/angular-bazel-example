
import { Cmp7327Component } from './cmp';
describe('Cmp7327Component', () => {
  it('should add', () => {
    expect(new Cmp7327Component().add7327(1)).toBe(7328);
  });
});