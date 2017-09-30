
import { Cmp7618Component } from './cmp';
describe('Cmp7618Component', () => {
  it('should add', () => {
    expect(new Cmp7618Component().add7618(1)).toBe(7619);
  });
});